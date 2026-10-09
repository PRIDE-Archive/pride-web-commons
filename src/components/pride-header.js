import { HEADER_CSS } from '../styles/header.css.js'
import { ICONS } from '../assets/icons.js'
import { PRIDE_LOGO_DATA_URI } from '../assets/logo.js'

export class PrideHeader extends HTMLElement {
  static get observedAttributes() {
    return ['active-section', 'hide-search', 'base-url', 'banner-url', 'username', 'token']
  }

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this._bannerContent = ''
    this._isCompact = false
    this._openDropdown = null
    this._onScroll = this._onScroll.bind(this)
    this._onDocumentClick = this._onDocumentClick.bind(this)
    this._onKeyDown = this._onKeyDown.bind(this)
  }

  get baseUrl() {
    return this.getAttribute('base-url') || 'https://www.ebi.ac.uk/pride'
  }

  get bannerUrl() {
    return this.getAttribute('banner-url') || `${this.baseUrl}/banner/index.txt`
  }

  get activeSection() {
    return (this.getAttribute('active-section') || '').toLowerCase()
  }

  get hideSearch() {
    const val = this.getAttribute('hide-search')
    return val !== null && val !== 'false'
  }

  get username() {
    return this.getAttribute('username') || localStorage.getItem('username') || ''
  }

  get token() {
    return this.getAttribute('token') || localStorage.getItem('token') || ''
  }

  connectedCallback() {
    this.render()
    this.fetchBanner()
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
      } else {
        this.render()
      }
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
    // If click is outside the header, close all dropdowns
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
    this.shadowRoot.querySelectorAll('.dropdown.is-open, .ebi-dropdown-pane.is-open').forEach(el => {
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

  async fetchBanner() {
    try {
      const res = await fetch(this.bannerUrl)
      if (!res.ok) return
      const text = await res.text()
      // Remove HTML comments used for commenting out banner
      const cleaned = text.replace(/<!--[\s\S]*?-->/g, '').trim()
      if (cleaned) {
        this._bannerContent = cleaned
        const bannerEl = this.shadowRoot.querySelector('.pride-alert-banner')
        const contentEl = this.shadowRoot.querySelector('.banner-text')
        if (bannerEl && contentEl) {
          contentEl.innerHTML = cleaned
          bannerEl.classList.add('is-visible')
        }
      }
    } catch (e) {
      // Banner file not found or network error; fail silently
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

      <!-- 1. EBI Global Black Bar -->
      <div class="ebi-global-bar">
        <div class="skip-to">
          <a href="#content">Skip to main content</a>
        </div>
        <div class="ebi-row">
          <div class="ebi-nav-left">
            <a href="https://www.ebi.ac.uk" class="ebi-logo-link" title="EMBL-EBI Homepage">
              ${ICONS.ebiLogo}
            </a>
            <ul class="ebi-nav-links">
              <li><a href="https://www.ebi.ac.uk/services">Services</a></li>
              <li><a href="https://www.ebi.ac.uk/research">Research</a></li>
              <li><a href="https://www.ebi.ac.uk/training">Training</a></li>
              <li><a href="https://www.ebi.ac.uk/about">About us</a></li>
            </ul>
          </div>
          <div class="ebi-nav-right">
            <button type="button" class="ebi-btn" id="ebi-search-btn" aria-label="Search all of EMBL-EBI">
              ${ICONS.search} <span>Search</span>
            </button>
            <button type="button" class="ebi-btn" id="ebi-campus-btn">
              <span>Hinxton</span> ${ICONS.chevronDown}
            </button>

            <!-- Search Dropdown Pane -->
            <div id="ebi-search-pane" class="ebi-dropdown-pane ebi-search-pane">
              <form class="ebi-search-form" action="https://www.ebi.ac.uk/ebisearch/search.ebi" method="GET" target="_blank">
                <input type="hidden" name="db" value="allebi">
                <input type="search" name="query" class="ebi-search-input" placeholder="Search all of EMBL-EBI..." required>
                <button type="submit" class="ebi-search-submit">Search</button>
              </form>
            </div>

            <!-- Campus Dropdown Pane -->
            <div id="ebi-campus-pane" class="ebi-dropdown-pane">
              <h4>EMBL Sites</h4>
              <ul class="ebi-campus-list">
                <li><a href="https://www.embl.org/sites/barcelona/" target="_blank">Barcelona</a></li>
                <li><a href="https://www.embl.org/sites/grenoble/" target="_blank">Grenoble</a></li>
                <li><a href="https://www.embl.org/sites/hamburg/" target="_blank">Hamburg</a></li>
                <li><a href="https://www.embl.org/sites/heidelberg/" target="_blank">Heidelberg</a></li>
                <li><a href="https://www.ebi.ac.uk" target="_blank" style="font-weight:700;color:#5bc0be">Hinxton (EMBL-EBI)</a></li>
                <li><a href="https://www.embl.org/sites/rome/" target="_blank">Rome</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- 2. PRIDE Dynamic Announcement Banner -->
      <div class="pride-alert-banner ${this._bannerContent ? 'is-visible' : ''}">
        <div class="banner-content">
          ${ICONS.alert}
          <div class="banner-text">${this._bannerContent}</div>
        </div>
        <button type="button" class="banner-close" aria-label="Close notification">
          ${ICONS.close}
        </button>
      </div>

      <!-- 3. PRIDE Main Masthead & Navigation -->
      <header class="pride-masthead">
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
                  <li><a href="${base}/archive/affinity-qc" class="dropdown-item">Affinity QC Generator <span class="nav-new-pill">New</span></a></li>
                  <li><a href="https://www.ebi.ac.uk/pride/services/pmultiqc/" class="dropdown-item" target="_blank" rel="noopener">pMultiQC ${ICONS.externalLink}</a></li>
                  <li><a href="https://www.ebi.ac.uk/pride/ws/archive/v3/webjars/swagger-ui/index.html" class="dropdown-item" target="_blank" rel="noopener">Web service API ${ICONS.externalLink}</a></li>
                  <li><a href="https://www.ebi.ac.uk/pride/services/sdrf-editor/" class="dropdown-item" target="_blank" rel="noopener">SDRF editor ${ICONS.externalLink}</a></li>
                  <li><a href="https://www.ebi.ac.uk/pride/services/sdrf-validator" class="dropdown-item" target="_blank" rel="noopener">SDRF validator ${ICONS.externalLink}</a></li>
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
                  <li><a href="https://www.ebi.ac.uk/pride/chatbot" class="dropdown-item" target="_blank" rel="noopener">PRIDE Assistant ${ICONS.externalLink}</a></li>
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

            <!-- Quick Search Form -->
            ${!this.hideSearch ? `
              <form class="quick-search-form" role="search">
                <span class="search-icon">${ICONS.search}</span>
                <input type="search" class="quick-search-input" placeholder="PXD accession or keyword" aria-label="Search PRIDE Archive">
              </form>
            ` : ''}

            <!-- User Account / Sign In -->
            <ul class="pride-account">
              ${!isLoggedIn ? `
                <li><a href="${base}/login" class="account-link">Log in</a></li>
                <li><a href="${base}/register" class="account-link register">Register</a></li>
              ` : `
                <li class="dropdown" id="menu-user">
                  <button type="button" class="account-link dropdown-trigger" aria-haspopup="true">
                    ${ICONS.person} <span>${user}</span> ${ICONS.chevronDown}
                  </button>
                  <ul class="dropdown-menu account-dropdown-menu">
                    <li><a href="${base}/profile/${user.split('@')[0]}" class="dropdown-item">Profile</a></li>
                    <li><a href="#" class="dropdown-item logout-btn">Log out</a></li>
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

      <!-- 4. Mobile Sliding Drawer -->
      <div class="drawer-backdrop"></div>
      <aside class="drawer-panel" aria-label="Mobile Navigation">
        <div class="drawer-header">
          <span class="drawer-title">Navigation</span>
          <button type="button" class="drawer-close" aria-label="Close menu">${ICONS.close}</button>
        </div>
        <div class="drawer-body">
          <a href="${base}/" class="drawer-link" style="font-weight:600">Home</a>

          <div class="drawer-group-title">Archive</div>
          <a href="${base}/archive" class="drawer-link">Datasets</a>
          <a href="${base}/archive/affinity-proteomics" class="drawer-link">Affinity proteomics</a>
          <a href="${base}/archive/crosslinking" class="drawer-link">Crosslinking</a>
          <a href="${base}/spectrumlibrary" class="drawer-link">Spectral libraries</a>
          <a href="${base}/archive/proteins" class="drawer-link">Proteins</a>
          <a href="${base}/archive/usi" class="drawer-link">USI Viewer</a>

          <div class="drawer-group-title">Tools</div>
          <a href="${base}/markdownpage/pridesubmissiontool" class="drawer-link">Submission tool</a>
          <a href="${base}/filesspecification" class="drawer-link">Submission Files Requirements</a>
          <a href="https://www.ebi.ac.uk/pride/services/pmultiqc/" class="drawer-link" target="_blank">pMultiQC</a>
          <a href="https://www.ebi.ac.uk/pride/ws/archive/v3/webjars/swagger-ui/index.html" class="drawer-link" target="_blank">Web service API</a>
          <a href="https://www.ebi.ac.uk/pride/services/sdrf-editor/" class="drawer-link" target="_blank">SDRF editor</a>
          <a href="https://www.ebi.ac.uk/pride/services/sdrf-validator" class="drawer-link" target="_blank">SDRF validator</a>

          <div class="drawer-group-title">Help & About</div>
          <a href="${base}/markdownpage/documentationpage" class="drawer-link">Documentation</a>
          <a href="https://www.ebi.ac.uk/pride/chatbot" class="drawer-link" target="_blank">PRIDE Assistant</a>
          <a href="${base}/markdownpage/citationpage" class="drawer-link">About PRIDE</a>
          <a href="${base}/markdownpage/license" class="drawer-link">License</a>
          <a href="${base}/markdownpage/contact" class="drawer-link">Contact</a>

          <div class="drawer-group-title">Account</div>
          ${!isLoggedIn ? `
            <a href="${base}/login" class="drawer-link">Log in</a>
            <a href="${base}/register" class="drawer-link" style="color:#0284c7;font-weight:600">Register</a>
          ` : `
            <a href="${base}/profile/${user.split('@')[0]}" class="drawer-link">Profile (${user})</a>
            <a href="#" class="drawer-link logout-btn">Log out</a>
          `}
        </div>
      </aside>
    `

    this._bindEvents()
  }

  _bindEvents() {
    const root = this.shadowRoot

    // Dropdown triggers
    root.querySelectorAll('.dropdown-trigger').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation()
        const parent = btn.closest('.dropdown')
        if (parent) {
          const wasOpen = parent.classList.contains('is-open')
          this._closeAllDropdowns()
          if (!wasOpen) parent.classList.add('is-open')
        }
      })
    })

    // EBI Bar Dropdowns
    const searchBtn = root.getElementById('ebi-search-btn')
    if (searchBtn) {
      searchBtn.addEventListener('click', (e) => {
        e.stopPropagation()
        this._toggleDropdown('ebi-search-pane')
        const input = root.querySelector('.ebi-search-input')
        if (input && root.getElementById('ebi-search-pane').classList.contains('is-open')) {
          setTimeout(() => input.focus(), 50)
        }
      })
    }

    const campusBtn = root.getElementById('ebi-campus-btn')
    if (campusBtn) {
      campusBtn.addEventListener('click', (e) => {
        e.stopPropagation()
        this._toggleDropdown('ebi-campus-pane')
      })
    }

    // Banner close button
    const bannerClose = root.querySelector('.banner-close')
    if (bannerClose) {
      bannerClose.addEventListener('click', () => {
        const bannerEl = root.querySelector('.pride-alert-banner')
        if (bannerEl) bannerEl.classList.remove('is-visible')
      })
    }

    // Search form submission
    const searchForm = root.querySelector('.quick-search-form')
    if (searchForm) {
      searchForm.addEventListener('submit', (e) => this._handleSearch(e))
    }

    // Mobile drawer triggers
    const toggleBtn = root.querySelector('.menu-toggle')
    if (toggleBtn) toggleBtn.addEventListener('click', () => this._openDrawer())

    const closeBtn = root.querySelector('.drawer-close')
    if (closeBtn) closeBtn.addEventListener('click', () => this._closeDrawer())

    const backdrop = root.querySelector('.drawer-backdrop')
    if (backdrop) backdrop.addEventListener('click', () => this._closeDrawer())

    // Logout buttons
    root.querySelectorAll('.logout-btn').forEach(btn => {
      btn.addEventListener('click', (e) => this._handleLogout(e))
    })

    // Navigation interceptor for SPA support
    root.querySelectorAll('a[href]:not([target="_blank"]):not([href^="#"])').forEach(a => {
      a.addEventListener('click', (e) => {
        const href = a.getAttribute('href')
        if (href && !href.startsWith('javascript:')) {
          this._handleNavigate(e, href)
        }
      })
    })
  }
}
