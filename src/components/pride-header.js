import { HEADER_CSS } from '../styles/header.css.js'
import { ensureIconFonts } from '../styles/fonts.js'
import { ICONS } from '../assets/icons.js'
import { PRIDE_LOGO_DATA_URI } from '../assets/logo.js'
import { HERO_BANNER_DATA_URI } from '../assets/banner-image.js'
import { DEFAULT_BANNER_CONTENT } from '../assets/banner-content.js'

function getSessionStorage(key, fallback = null) {
  try {
    return sessionStorage.getItem(key) ?? fallback
  } catch {
    return fallback
  }
}

function setSessionStorage(key, val) {
  try {
    sessionStorage.setItem(key, val)
  } catch {}
}

export class PrideHeader extends HTMLElement {
  static get observedAttributes() {
    return ['active-section', 'hide-search', 'base-url', 'banner-url', 'bg-image', 'username', 'token', 'banner-collapsed', 'hide-chat', 'chat-type']
  }

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    // Pre-populate with bundled production banner so it renders immediately with 0 latency & no CORS dependency
    this._bannerContent = DEFAULT_BANNER_CONTENT
    this._isBannerCollapsed = getSessionStorage('pride_banner_collapsed') === 'true'
    this._isCompact = false
    this._openDropdown = null
    this._onScroll = this._onScroll.bind(this)
    this._onDocumentClick = this._onDocumentClick.bind(this)
    this._onKeyDown = this._onKeyDown.bind(this)
  }

  get baseUrl() {
    return this.getAttribute('base-url') || 'https://www.ebi.ac.uk/pride'
  }

  set baseUrl(val) {
    if (val) this.setAttribute('base-url', val)
    else this.removeAttribute('base-url')
  }

  get bannerUrl() {
    return this.getAttribute('banner-url') || `${this.baseUrl}/banner/index.txt`
  }

  set bannerUrl(val) {
    if (val) this.setAttribute('banner-url', val)
    else this.removeAttribute('banner-url')
  }

  get bgImage() {
    return this.getAttribute('bg-image') || HERO_BANNER_DATA_URI
  }

  set bgImage(val) {
    if (val) this.setAttribute('bg-image', val)
    else this.removeAttribute('bg-image')
  }

  get activeSection() {
    return (this.getAttribute('active-section') || '').toLowerCase()
  }

  set activeSection(val) {
    if (val) this.setAttribute('active-section', val)
    else this.removeAttribute('active-section')
  }

  get hideSearch() {
    const val = this.getAttribute('hide-search')
    return val !== null && val !== 'false'
  }

  set hideSearch(val) {
    if (val !== undefined && val !== null && val !== false && val !== 'false') {
      this.setAttribute('hide-search', 'true')
    } else {
      this.removeAttribute('hide-search')
    }
  }

  get username() {
    return this.getAttribute('username') || localStorage.getItem('username') || ''
  }

  set username(val) {
    if (val) this.setAttribute('username', val)
    else this.removeAttribute('username')
  }

  get token() {
    return this.getAttribute('token') || localStorage.getItem('token') || ''
  }

  set token(val) {
    if (val) this.setAttribute('token', val)
    else this.removeAttribute('token')
  }

  get bannerCollapsed() {
    return this.hasAttribute('banner-collapsed') ? this.getAttribute('banner-collapsed') !== 'false' : this._isBannerCollapsed
  }

  set bannerCollapsed(val) {
    if (val) this.setAttribute('banner-collapsed', '')
    else this.removeAttribute('banner-collapsed')
  }

  get hideChat() {
    const val = this.getAttribute('hide-chat')
    return val !== null && val !== 'false'
  }

  set hideChat(val) {
    if (val !== undefined && val !== null && val !== false && val !== 'false') {
      this.setAttribute('hide-chat', 'true')
    } else {
      this.removeAttribute('hide-chat')
    }
  }

  get chatType() {
    return this.getAttribute('chat-type') || (this.activeSection === 'archive' ? 'search' : 'assistant')
  }

  set chatType(val) {
    if (val) this.setAttribute('chat-type', val)
    else this.removeAttribute('chat-type')
  }

  connectedCallback() {
    ensureIconFonts()
    this.render()
    this.fetchBanner()
    this._setupChatWidget()
    window.addEventListener('scroll', this._onScroll, { passive: true })
    document.addEventListener('click', this._onDocumentClick)
    document.addEventListener('keydown', this._onKeyDown)
  }

  disconnectedCallback() {
    window.removeEventListener('scroll', this._onScroll)
    document.removeEventListener('click', this._onDocumentClick)
    document.removeEventListener('keydown', this._onKeyDown)
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue && this.shadowRoot && this.shadowRoot.innerHTML) {
      if (name === 'active-section') {
        this._updateActiveSection()
        const chat = document.querySelector('pride-chat')
        if (chat && !this.hasAttribute('chat-type')) {
          chat.setAttribute('type', newValue === 'archive' ? 'search' : 'assistant')
        }
      } else if (name === 'banner-collapsed') {
        this._isBannerCollapsed = newValue !== null && newValue !== 'false'
        this._updateBannerVisibility()
      } else if (name === 'hide-chat') {
        const chat = document.querySelector('pride-chat')
        if (chat && this.hideChat) {
          chat.remove()
        } else if (!chat && !this.hideChat) {
          this._setupChatWidget()
        }
      } else if (name === 'chat-type') {
        const chat = document.querySelector('pride-chat')
        if (chat) {
          chat.setAttribute('type', this.chatType)
        }
      } else {
        this.render()
      }
    }
  }

  _setupChatWidget() {
    if (this.hideChat) return
    if (typeof document === 'undefined') return
    // Auto-mount pride-chat onto document body if not already present
    if (!document.querySelector('pride-chat')) {
      const chat = document.createElement('pride-chat')
      if (this.hasAttribute('base-url')) {
        chat.setAttribute('base-url', this.baseUrl)
      }
      chat.setAttribute('type', this.chatType)
      document.body.appendChild(chat)
    }
  }

  _onScroll() {
    const y = window.pageYOffset || document.documentElement.scrollTop || 0
    const masthead = this.shadowRoot.querySelector('.pride-masthead')
    if (!masthead) return

    if (!this._isCompact && y > 120) {
      this._isCompact = true
      masthead.classList.add('compact')
    } else if (this._isCompact && y < 40) {
      this._isCompact = false
      masthead.classList.remove('compact')
    }
  }

  _onDocumentClick(e) {
    if (!this.contains(e.target)) {
      this._closeAllDropdowns()
    }
  }

  _onKeyDown(e) {
    if (e.key === 'Escape') {
      this._closeAllDropdowns()
      this._closeDrawer()
    }
  }

  _closeAllDropdowns() {
    if (!this.shadowRoot) return
    this.shadowRoot.querySelectorAll('.dropdown.is-open, #embl-dropdown.is-open, #search-global-dropdown.is-open').forEach(el => {
      el.classList.remove('is-open')
    })
    this._openDropdown = null
  }

  _toggleDropdown(id) {
    const dropdown = this.shadowRoot.getElementById(id)
    if (!dropdown) return

    const wasOpen = dropdown.classList.contains('is-open')
    this._closeAllDropdowns()

    if (!wasOpen) {
      dropdown.classList.add('is-open')
      this._openDropdown = id
    }
  }

  _openDrawer() {
    const backdrop = this.shadowRoot.querySelector('.drawer-backdrop')
    const panel = this.shadowRoot.querySelector('.drawer-panel')
    if (backdrop && panel) {
      backdrop.classList.add('is-open')
      panel.classList.add('is-open')
    }
  }

  _closeDrawer() {
    const backdrop = this.shadowRoot.querySelector('.drawer-backdrop')
    const panel = this.shadowRoot.querySelector('.drawer-panel')
    if (backdrop && panel) {
      backdrop.classList.remove('is-open')
      panel.classList.remove('is-open')
    }
  }

  _toggleBannerCollapse() {
    this._isBannerCollapsed = !this._isBannerCollapsed
    setSessionStorage('pride_banner_collapsed', this._isBannerCollapsed ? 'true' : 'false')
    this._updateBannerVisibility()
    this.dispatchEvent(new CustomEvent('pride-banner-collapse', {
      bubbles: true,
      composed: true,
      detail: { collapsed: this._isBannerCollapsed }
    }))
  }

  _updateBannerVisibility() {
    if (!this.shadowRoot) return
    const bannerContainer = this.shadowRoot.querySelector('.pride-banner-container')
    if (!bannerContainer) return

    if (!this._bannerContent) {
      bannerContainer.style.display = 'none'
      return
    }

    bannerContainer.style.display = 'block'
    const expandedEl = this.shadowRoot.querySelector('.banner-expanded-wrapper')
    const collapsedEl = this.shadowRoot.querySelector('.banner-collapsed-bar')

    if (this._isBannerCollapsed) {
      if (expandedEl) expandedEl.style.display = 'none'
      if (collapsedEl) collapsedEl.style.display = 'flex'
    } else {
      if (expandedEl) expandedEl.style.display = 'block'
      if (collapsedEl) collapsedEl.style.display = 'none'
    }
  }

  async fetchBanner() {
    try {
      const res = await fetch(this.bannerUrl)
      if (!res.ok) return
      const text = await res.text()
      const cleaned = (typeof text === 'string' ? text : '')
        .replace(/<!--[\s\S]*?-->/g, '')
        .trim()
      if (cleaned) {
        this._bannerContent = cleaned
        const contentEl = this.shadowRoot.querySelector('.banner')
        if (contentEl) {
          contentEl.innerHTML = cleaned
        }
        this._updateBannerVisibility()
      }
    } catch (e) {
      // Keep bundled default banner content on network or CORS errors
    }
  }

  _handleSearch(e) {
    e.preventDefault()
    const input = this.shadowRoot.querySelector('.quick-search-input')
    const query = input ? input.value.trim() : ''
    if (!query) return

    const event = new CustomEvent('pride-search', {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: { query }
    })
    const notPrevented = this.dispatchEvent(event)

    if (notPrevented) {
      if (/^(PXD|PRD|PAD|RPXD)\d+$/i.test(query)) {
        window.location.href = `${this.baseUrl}/archive/projects/${query.toUpperCase()}`
      } else {
        window.location.href = `${this.baseUrl}/archive?keyword=${encodeURIComponent(query)}`
      }
    }
  }

  _handleNavigate(e, href) {
    const event = new CustomEvent('pride-navigate', {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: { href }
    })
    const notPrevented = this.dispatchEvent(event)
    if (!notPrevented) {
      e.preventDefault()
    }
  }

  _handleLogout(e) {
    e.preventDefault()
    localStorage.removeItem('username')
    localStorage.removeItem('token')
    localStorage.removeItem('logintype')
    localStorage.removeItem('type')

    const event = new CustomEvent('pride-logout', {
      bubbles: true,
      composed: true,
      cancelable: true
    })
    const notPrevented = this.dispatchEvent(event)
    if (notPrevented) {
      window.location.href = `${this.baseUrl}/archive`
    } else {
      this.render()
    }
  }

  _updateActiveSection() {
    const sec = this.activeSection
    this.shadowRoot.querySelectorAll('.pride-menu > li').forEach(li => {
      if (li.getAttribute('data-section') === sec) {
        li.classList.add('active')
      } else {
        li.classList.remove('active')
      }
    })
  }

  render() {
    const base = this.baseUrl
    const sec = this.activeSection
    const user = this.username
    const isLoggedIn = !!(user && this.token)

    this.shadowRoot.innerHTML = `
      <style>${HEADER_CSS}</style>

      <!-- 1. EMBL-EBI Global Black Bar (DefaultNav.vue / ebi-global.css) -->
      <div class="nav-container ebi-global-bar">
        <div id="skip-to">
          <a href="#content">Skip to main content</a>
        </div>
        <header id="masthead-black-bar" class="clearfix masthead-black-bar">
          <nav class="row">
            <ul id="global-nav" class="menu">
              <li class="home-mobile"><a href="https://www.ebi.ac.uk"></a></li>
              <li class="home active">
                <a href="https://www.ebi.ac.uk">EMBL-EBI</a>
              </li>
              <li class="services">
                <a href="https://www.ebi.ac.uk/services">Services</a>
              </li>
              <li class="research">
                <a href="https://www.ebi.ac.uk/research">Research</a>
              </li>
              <li class="training">
                <a href="https://www.ebi.ac.uk/training">Training</a>
              </li>
              <li class="about">
                <a href="https://www.ebi.ac.uk/about">About us</a>
              </li>
              <li class="embl-selector">
                <button class="button" type="button" id="blackbar-embl-btn">Hinxton</button>
                <div id="embl-dropdown" class="embl-dropdown dropdown-pane bottom">
                  <p>EMBL-EBI in Hinxton, Cambridge is one of <br/>six EMBL locations across europe.<br/> <a href="https://www.ebi.ac.uk/about" class="small readmore" target="_blank">More about EMBL-EBI</a></p>
                  <h6>Connect to another EMBL location</h6>
                  <div class="small-collapse">
                    <div>
                      <a href="https://www.embl.org/sites/heidelberg/" target="_blank">Heidelberg</a>
                      <div class="small">Main laboratory</div>
                    </div>
                    <div>
                      <a href="https://www.embl.org/sites/barcelona/" target="_blank">Barcelona</a>
                      <div class="small">Tissue biology and disease modelling</div>
                    </div>
                    <div>
                      <a href="https://www.embl.org/sites/grenoble/" target="_blank">Grenoble</a>
                      <div class="small">Structural biology</div>
                    </div>
                    <div>
                      <a href="https://www.embl.org/sites/hamburg/" target="_blank">Hamburg</a>
                      <div class="small">Structural biology</div>
                    </div>
                    <div>
                      <a href="https://www.embl.org/sites/rome/" target="_blank">Rome</a>
                      <div class="small">Epigenetics and neurobiology</div>
                    </div>
                    <div>
                      <a href="https://www.embl.org/" class="readmore" target="_blank">More about EMBL</a>
                    </div>
                  </div>
                </div>
              </li>
              <li class="search">
                <a href="#" id="blackbar-search-btn" aria-label="Search all of EMBL-EBI">
                  <span class="show-for-small-only">Search</span>
                </a>
                <div id="search-global-dropdown" class="dropdown-pane">
                  <form id="global-search" name="global-search" action="https://www.ebi.ac.uk/ebisearch/search.ebi" method="GET" target="_blank">
                    <fieldset>
                      <div class="input-group">
                        <input type="text" name="query" id="global-searchbox" placeholder="Search all of EMBL-EBI">
                        <input type="hidden" name="db" value="allebi">
                        <input type="hidden" name="requestFrom" value="masthead-black-bar">
                        <input type="submit" name="submit" value="Search">
                      </div>
                    </fieldset>
                  </form>
                </div>
              </li>
            </ul>
          </nav>
        </header>
      </div>

      <!-- 2. PRIDE Main Masthead & Navigation (with background image and alert announcement banner) -->
      <header class="pride-masthead ${this._isCompact ? 'compact' : ''}" style="background-image: url('${this.bgImage}');">
        <!-- Banner on top of header part matching View UI Plus Alert warning -->
        <div class="pride-banner-container" style="display: ${this._bannerContent ? 'block' : 'none'};">
          <div class="banner-expanded-wrapper" style="display: ${this._isBannerCollapsed ? 'none' : 'block'};">
            <div class="ivu-alert ivu-alert-warning ivu-alert-with-banner">
              <span class="banner">${this._bannerContent}</span>
              <button type="button" class="banner-collapse-btn" id="banner-collapse-btn" title="Collapse banner" aria-label="Collapse banner">
                <span>Collapse</span>
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
              </button>
            </div>
          </div>

          <div class="banner-collapsed-bar" style="display: ${this._isBannerCollapsed ? 'flex' : 'none'};">
            <div class="banner-collapsed-info">
              <span class="banner-collapsed-icon">⚠️</span>
              <span class="banner-collapsed-title">System Announcements</span>
            </div>
            <div class="banner-collapsed-actions">
              <button type="button" class="banner-expand-btn" id="banner-expand-btn" title="Expand banner" aria-label="Expand banner">
                <span>Expand</span>
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="masthead-row">
          <a href="${base}/" class="pride-brand" title="PRIDE Archive Home">
            <img src="${PRIDE_LOGO_DATA_URI}" alt="PRIDE" class="pride-brand-logo">
          </a>

          <nav class="pride-nav" aria-label="Main Navigation">
            <ul class="pride-menu">
              <!-- Home -->
              <li data-section="home" class="${sec === 'home' ? 'active' : ''}">
                <a href="${base}/" class="menu-item-link">Home</a>
              </li>

              <!-- Archive Dropdown -->
              <li data-section="archive" class="dropdown ${sec === 'archive' ? 'active' : ''}" id="menu-archive">
                <button type="button" class="dropdown-trigger" aria-haspopup="true">
                  Archive ${ICONS.chevronDown}
                </button>
                <ul class="dropdown-menu">
                  <li><a href="${base}/archive" class="dropdown-item">Datasets</a></li>
                  <li><a href="${base}/archive/affinity-proteomics" class="dropdown-item">Affinity proteomics</a></li>
                  <li><a href="${base}/archive/crosslinking" class="dropdown-item">Crosslinking</a></li>
                  <li><a href="${base}/spectrumlibrary" class="dropdown-item">Spectral libraries</a></li>
                </ul>
              </li>

              <!-- Proteins -->
              <li data-section="proteins" class="${sec === 'proteins' ? 'active' : ''}">
                <a href="${base}/archive/proteins" class="menu-item-link">Proteins</a>
              </li>

              <!-- USI -->
              <li data-section="usi" class="${sec === 'usi' ? 'active' : ''}">
                <a href="${base}/archive/usi" class="menu-item-link" title="Universal Spectrum Identifier viewer">USI</a>
              </li>

              <!-- Tools Dropdown -->
              <li data-section="tools" class="dropdown ${sec === 'tools' ? 'active' : ''}" id="menu-tools">
                <button type="button" class="dropdown-trigger" aria-haspopup="true">
                  Tools ${ICONS.chevronDown}
                </button>
                <ul class="dropdown-menu">
                  <li><a href="${base}/markdownpage/pridesubmissiontool" class="dropdown-item">Submission tool</a></li>
                  <li><a href="${base}/filesspecification" class="dropdown-item">Submission Files Requirements</a></li>
                  <li><a href="${base}/archive/affinity-proteomics/qc-report" class="dropdown-item">Affinity QC Report Generator <span class="nav-new-pill">New</span></a></li>
                  <li><a href="https://www.ebi.ac.uk/pride/services/pmultiqc/" class="dropdown-item" target="_blank" rel="noopener">pMultiQC <span class="ext">${ICONS.externalLink}</span></a></li>
                  <li><a href="https://www.ebi.ac.uk/pride/ws/archive/v3/webjars/swagger-ui/index.html" class="dropdown-item" target="_blank" rel="noopener">Web service API <span class="ext">${ICONS.externalLink}</span></a></li>
                  <li><a href="https://www.ebi.ac.uk/pride/services/sdrf-editor/" class="dropdown-item" target="_blank" rel="noopener">SDRF editor <span class="ext">${ICONS.externalLink}</span></a></li>
                  <li><a href="https://www.ebi.ac.uk/pride/services/sdrf-validator" class="dropdown-item" target="_blank" rel="noopener">SDRF validator <span class="ext">${ICONS.externalLink}</span></a></li>
                </ul>
              </li>

              <!-- Help Dropdown -->
              <li data-section="help" class="dropdown ${sec === 'help' ? 'active' : ''}" id="menu-help">
                <button type="button" class="dropdown-trigger" aria-haspopup="true">
                  Help ${ICONS.chevronDown}
                </button>
                <ul class="dropdown-menu">
                  <li><a href="${base}/markdownpage/documentationpage" class="dropdown-item">Documentation</a></li>
                  <li><a href="${base}/markdownpage/controlledaccess" class="dropdown-item">Controlled-access submissions</a></li>
                  <li><a href="https://www.ebi.ac.uk/pride/chatbot" class="dropdown-item" target="_blank" rel="noopener">PRIDE Assistant <span class="ext">${ICONS.externalLink}</span></a></li>
                </ul>
              </li>

              <!-- About Dropdown -->
              <li data-section="about" class="dropdown ${sec === 'about' ? 'active' : ''}" id="menu-about">
                <button type="button" class="dropdown-trigger" aria-haspopup="true">
                  About ${ICONS.chevronDown}
                </button>
                <ul class="dropdown-menu">
                  <li><a href="${base}/markdownpage/citationpage" class="dropdown-item">About PRIDE</a></li>
                  <li><a href="${base}/markdownpage/license" class="dropdown-item">License</a></li>
                  <li><a href="${base}/markdownpage/contact" class="dropdown-item">Contact</a></li>
                </ul>
              </li>
            </ul>

            <!-- Quick Accession Search -->
            ${!this.hideSearch ? `
              <form class="quick-search" role="search">
                <span class="quick-search-icon">${ICONS.search}</span>
                <input type="search" class="quick-search-input" placeholder="PXD accession or keyword" aria-label="Search PRIDE Archive">
              </form>
            ` : ''}

            <!-- Account / User Menu -->
            <ul class="pride-account">
              ${!isLoggedIn ? `
                <li><a href="${base}/login" class="menu-item-link">Log in</a></li>
                <li><a href="${base}/register" class="register">Register</a></li>
              ` : `
                <li class="dropdown" id="menu-user">
                  <button type="button" class="dropdown-trigger" aria-haspopup="true">
                    ${ICONS.person} <span class="account-email">${user}</span> ${ICONS.chevronDown}
                  </button>
                  <ul class="dropdown-menu">
                    <li><a href="${base}/profile/${encodeURIComponent(user.split('@')[0])}" class="dropdown-item">Profile</a></li>
                    <li><a href="#" class="dropdown-item logout-link">Log out</a></li>
                  </ul>
                </li>
              `}
            </ul>

            <!-- Mobile Drawer Toggle -->
            <button type="button" class="menu-toggle" aria-label="Open mobile menu">
              ${ICONS.menu}
            </button>
          </nav>
        </div>
      </header>

      <!-- Narrow Screens: Off-canvas Drawer -->
      <div class="drawer-backdrop"></div>
      <div class="drawer-panel">
        <div class="drawer-header">
          <h3>Menu</h3>
          <button type="button" class="drawer-close" aria-label="Close menu">${ICONS.close}</button>
        </div>
        <div class="drawer-body">
          <ul class="drawer-menu">
            <li><a href="${base}/">Home</a></li>
            <li class="drawer-group">Archive</li>
            <li><a href="${base}/archive">Datasets</a></li>
            <li><a href="${base}/archive/affinity-proteomics">Affinity proteomics</a></li>
            <li><a href="${base}/archive/crosslinking">Crosslinking</a></li>
            <li><a href="${base}/spectrumlibrary">Spectral libraries</a></li>
            <li><a href="${base}/archive/proteins">Proteins</a></li>
            <li><a href="${base}/archive/usi">USI</a></li>

            <li class="drawer-group">Tools</li>
            <li><a href="${base}/markdownpage/pridesubmissiontool">Submission tool</a></li>
            <li><a href="${base}/filesspecification">Submission Files Requirements</a></li>
            <li><a href="${base}/archive/affinity-proteomics/qc-report">Affinity QC Report Generator <span class="nav-new-pill">New</span></a></li>
            <li><a href="https://www.ebi.ac.uk/pride/services/pmultiqc/" target="_blank" rel="noopener">pMultiQC</a></li>
            <li><a href="https://www.ebi.ac.uk/pride/ws/archive/v3/webjars/swagger-ui/index.html" target="_blank" rel="noopener">Web service API</a></li>
            <li><a href="https://www.ebi.ac.uk/pride/services/sdrf-editor/" target="_blank" rel="noopener">SDRF editor</a></li>
            <li><a href="https://www.ebi.ac.uk/pride/services/sdrf-validator" target="_blank" rel="noopener">SDRF validator</a></li>

            <li class="drawer-group">Help</li>
            <li><a href="${base}/markdownpage/documentationpage">Documentation</a></li>
            <li><a href="${base}/markdownpage/controlledaccess">Controlled-access submissions</a></li>
            <li><a href="https://www.ebi.ac.uk/pride/chatbot" target="_blank" rel="noopener">PRIDE Assistant</a></li>

            <li class="drawer-group">About</li>
            <li><a href="${base}/markdownpage/citationpage">About PRIDE</a></li>
            <li><a href="${base}/markdownpage/license">License</a></li>
            <li><a href="${base}/markdownpage/contact">Contact</a></li>

            <li class="drawer-group">Account</li>
            ${!isLoggedIn ? `
              <li><a href="${base}/login">Log in</a></li>
              <li><a href="${base}/register">Register</a></li>
            ` : `
              <li><a href="${base}/profile/${encodeURIComponent(user.split('@')[0])}">Profile</a></li>
              <li><a href="#" class="logout-link">Log out (${user})</a></li>
            `}
          </ul>
        </div>
      </div>
    `

    this._attachEventListeners()
  }

  _attachEventListeners() {
    const root = this.shadowRoot

    // Banner collapse, expand & dismiss buttons
    const collapseBtn = root.getElementById('banner-collapse-btn')
    if (collapseBtn) {
      collapseBtn.addEventListener('click', (e) => {
        e.preventDefault()
        this._toggleBannerCollapse()
      })
    }

    const expandBtn = root.getElementById('banner-expand-btn')
    if (expandBtn) {
      expandBtn.addEventListener('click', (e) => {
        e.preventDefault()
        this._toggleBannerCollapse()
      })
    }

    // Black bar search dropdown
    const blackbarSearchBtn = root.getElementById('blackbar-search-btn')
    if (blackbarSearchBtn) {
      blackbarSearchBtn.addEventListener('click', (e) => {
        e.preventDefault()
        this._toggleDropdown('search-global-dropdown')
      })
    }

    // Black bar Hinxton campus dropdown
    const blackbarEmblBtn = root.getElementById('blackbar-embl-btn')
    if (blackbarEmblBtn) {
      blackbarEmblBtn.addEventListener('click', (e) => {
        e.preventDefault()
        this._toggleDropdown('embl-dropdown')
      })
    }

    // Dropdown triggers
    root.querySelectorAll('.dropdown-trigger').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation()
        const parent = btn.closest('.dropdown')
        if (parent && parent.id) {
          this._toggleDropdown(parent.id)
        }
      })
    })

    // Quick search form
    const searchForm = root.querySelector('.quick-search')
    if (searchForm) {
      searchForm.addEventListener('submit', (e) => this._handleSearch(e))
    }

    // Mobile drawer
    const menuToggle = root.querySelector('.menu-toggle')
    if (menuToggle) {
      menuToggle.addEventListener('click', () => this._openDrawer())
    }

    const drawerClose = root.querySelector('.drawer-close')
    if (drawerClose) {
      drawerClose.addEventListener('click', () => this._closeDrawer())
    }

    const drawerBackdrop = root.querySelector('.drawer-backdrop')
    if (drawerBackdrop) {
      drawerBackdrop.addEventListener('click', () => this._closeDrawer())
    }

    // Logout handlers
    root.querySelectorAll('.logout-link').forEach(link => {
      link.addEventListener('click', (e) => this._handleLogout(e))
    })

    // Navigation interception
    root.querySelectorAll('a[href]').forEach(a => {
      const href = a.getAttribute('href')
      if (!href || href === '#' || href.startsWith('javascript:')) return
      if (!a.hasAttribute('target')) {
        a.addEventListener('click', (e) => this._handleNavigate(e, href))
      }
    })
  }
}

if (!customElements.get('pride-header')) {
  customElements.define('pride-header', PrideHeader)
}
