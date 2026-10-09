const m = `
:host {
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: #2f3644;
  line-height: 1.5;
  box-sizing: border-box;
  width: 100%;
}

*, *::before, *::after {
  box-sizing: inherit;
}

/* ==========================================================
   EBI Global Black Bar
   ========================================================== */
.ebi-global-bar {
  background-color: #111827;
  color: #d1d5db;
  font-size: 13px;
  position: relative;
  z-index: 1000;
  border-bottom: 1px solid #1f2937;
}

.ebi-global-bar a {
  color: #e5e7eb;
  text-decoration: none;
  transition: color 0.15s ease;
}

.ebi-global-bar a:hover {
  color: #ffffff;
}

.skip-to a {
  position: absolute;
  top: -40px;
  left: 10px;
  background: #5bc0be;
  color: #111827;
  padding: 8px 12px;
  font-weight: 600;
  z-index: 10000;
  border-radius: 4px;
  transition: top 0.2s;
}

.skip-to a:focus {
  top: 6px;
}

.ebi-row {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 24px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.ebi-nav-left {
  display: flex;
  align-items: center;
  gap: 18px;
}

.ebi-logo-link {
  font-weight: 800;
  letter-spacing: 0.5px;
  color: #ffffff !important;
  font-size: 14px;
  display: flex;
  align-items: center;
}

.ebi-nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 16px;
}

.ebi-nav-links li a {
  padding: 4px 6px;
  border-radius: 3px;
}

.ebi-nav-links li a:hover {
  background: rgba(255, 255, 255, 0.1);
}

.ebi-nav-right {
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
}

.ebi-btn {
  background: none;
  border: none;
  color: #d1d5db;
  font-size: 13px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.15s ease;
}

.ebi-btn:hover {
  background: #374151;
  color: #ffffff;
}

/* EBI Dropdown Panes */
.ebi-dropdown-pane {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 6px;
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 6px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
  padding: 12px;
  min-width: 220px;
  display: none;
  z-index: 1050;
}

.ebi-dropdown-pane.is-open {
  display: block;
}

.ebi-dropdown-pane h4 {
  margin: 0 0 8px 0;
  font-size: 11px;
  text-transform: uppercase;
  color: #9ca3af;
  letter-spacing: 0.5px;
}

.ebi-campus-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 6px;
}

.ebi-campus-list a {
  display: block;
  padding: 6px 8px;
  border-radius: 4px;
  font-size: 13px;
  color: #f3f4f6;
}

.ebi-campus-list a:hover {
  background: #374151;
  color: #5bc0be;
}

/* Global search dropdown */
.ebi-search-pane {
  left: 0;
  right: 0;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
}

.ebi-search-form {
  display: flex;
  gap: 8px;
}

.ebi-search-input {
  flex: 1;
  background: #111827;
  border: 1px solid #4b5563;
  color: #ffffff;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
}

.ebi-search-input:focus {
  border-color: #5bc0be;
}

.ebi-search-submit {
  background: #5bc0be;
  color: #111827;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
}

/* ==========================================================
   PRIDE Main Masthead & Navigation
   ========================================================== */
.pride-masthead {
  background-color: #f5f7f8;
  background-size: cover;
  background-position: center;
  border-bottom: 1px solid #e3e6ea;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.2s ease;
  position: relative;
}

.pride-masthead.compact {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
}

/* ==========================================================
   Announcement Banner inside Masthead (top of header)
   ========================================================== */
.pride-banner-container {
  width: 100%;
  background-color: #fffbe6;
  border-bottom: 1px solid #ffe58f;
  position: relative;
  z-index: 10;
}

.pride-banner-inner {
  max-width: 1600px;
  margin: 0 auto;
  padding: 8px 48px 8px 24px;
  position: relative;
}

.banner {
  font-size: 14px;
  line-height: 1.5;
}

.banner p {
  color: #454548 !important;
  font-size: 16px;
  margin: 0;
}

.banner a {
  color: #454548 !important;
  text-decoration: underline;
}

.banner-close {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  color: #999;
  padding: 6px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: color 0.15s, background-color 0.15s;
}

.banner-close:hover {
  color: #454548;
  background-color: rgba(0, 0, 0, 0.05);
}

.masthead-row {
  max-width: 1600px;
  margin: 0 auto;
  padding: 14px 24px;
  display: flex;
  align-items: center;
  gap: 28px;
  transition: padding 0.2s ease;
}

.pride-masthead.compact .masthead-row {
  padding: 6px 24px;
}

.pride-brand {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  border: none;
  flex-shrink: 0;
}

.pride-brand:hover {
  border: none;
}

.pride-brand-logo {
  height: 46px;
  width: auto;
  display: block;
  transition: height 0.2s ease;
}

.pride-masthead.compact .pride-brand-logo {
  height: 30px;
}

.pride-nav {
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
  gap: 16px;
}

.pride-menu {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 4px;
}

.pride-menu > li {
  position: relative;
}

.menu-item-link, .dropdown-trigger {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  padding: 8px 12px;
  font-size: 15px;
  color: #2f3644;
  text-decoration: none;
  border: none;
  background: none;
  border-radius: 4px;
  white-space: nowrap;
  line-height: 20px;
  cursor: pointer;
  transition: all 0.15s ease;
}

.menu-item-link:hover, .dropdown-trigger:hover {
  background: rgba(91, 192, 190, 0.14);
  color: #17233d;
}

/* Active Section Indicator */
.pride-menu > li.active .menu-item-link,
.pride-menu > li.active .dropdown-trigger {
  color: #17233d;
  font-weight: 600;
}

.pride-menu > li.active::after {
  content: '';
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 0;
  height: 3px;
  border-radius: 2px;
  background: #5bc0be;
}

/* Dropdown Menus */
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 5px;
  background: #ffffff;
  border: 1px solid #dcdee2;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  padding: 4px 0;
  min-width: 220px;
  list-style: none;
  display: none;
  z-index: 1050;
}

/* Bridge gap so cursor doesn't lose hover */
.dropdown-menu::before {
  content: '';
  position: absolute;
  top: -8px;
  left: 0;
  right: 0;
  height: 8px;
}

.dropdown.is-open .dropdown-menu {
  display: block;
}

.dropdown-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 16px 9px 12px;
  color: #515a6e;
  font-size: 14px;
  text-decoration: none;
  transition: background 0.15s ease, color 0.15s ease;
  cursor: pointer;
  white-space: nowrap;
}

.dropdown-item:hover {
  background: #f8f8f9;
  color: #5bc0be;
}

.nav-new-pill {
  display: inline-block;
  background: #5bc0be;
  color: #ffffff;
  font-size: 10px;
  font-weight: 700;
  padding: 1px 6px;
  border-radius: 999px;
  margin-left: 6px;
  vertical-align: middle;
  line-height: 1.3;
}

.ext-icon {
  margin-left: 4px;
  font-size: 12px;
  color: #c5c8ce;
  vertical-align: -1px;
}

/* Quick Search */
.quick-search-form {
  margin-left: auto;
  display: flex;
  align-items: center;
  background: #ffffff;
  border: 1px solid #dcdee2;
  border-radius: 999px;
  padding: 0 10px 0 12px;
  height: 34px;
  width: 260px;
  max-width: 30vw;
  transition: border-color 0.15s, box-shadow 0.15s;
}

.quick-search-form:focus-within {
  border-color: #5bc0be;
  box-shadow: 0 0 0 3px rgba(91, 192, 190, 0.2);
}

.search-icon {
  color: #808695;
  margin-right: 6px;
  display: flex;
  align-items: center;
}

.quick-search-input {
  border: none !important;
  outline: none;
  background: transparent !important;
  width: 100%;
  font-size: 13px;
  color: #17233d;
  height: 30px !important;
  box-shadow: none !important;
  margin: 0;
  padding: 0 !important;
}

.quick-search-input::placeholder {
  color: #9aa0a8;
}

/* Account Section */
.pride-account {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
}

.account-link {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  padding: 8px 12px;
  font-size: 15px;
  color: #2f3644;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.15s ease;
  cursor: pointer;
  white-space: nowrap;
  line-height: 20px;
}

.account-link:hover {
  background: rgba(91, 192, 190, 0.14);
  color: #17233d;
}

.account-link.register {
  background: #5bc0be;
  color: #ffffff;
  margin-left: 4px;
}

.account-link.register:hover {
  background: #4aa9a7;
  color: #ffffff;
}

.account-email {
  max-width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.account-dropdown-menu {
  right: 0;
  left: auto;
}

/* Mobile Hamburger Toggle */
.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: #2f3644;
  margin-left: auto;
  padding: 4px;
}

/* Mobile Drawer */
.drawer-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.5);
  backdrop-filter: blur(2px);
  z-index: 10000;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}

.drawer-backdrop.is-open {
  opacity: 1;
  pointer-events: auto;
}

.drawer-panel {
  position: fixed;
  top: 0;
  bottom: 0;
  right: -320px;
  width: 320px;
  max-width: 85vw;
  background: #ffffff;
  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.15);
  z-index: 10001;
  display: flex;
  flex-direction: column;
  transition: right 0.25s ease;
  overflow-y: auto;
}

.drawer-panel.is-open {
  right: 0;
}

.drawer-header {
  padding: 16px 20px;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.drawer-title {
  font-size: 16px;
  font-weight: 700;
  color: #0f172a;
}

.drawer-close {
  background: none;
  border: none;
  color: #64748b;
  cursor: pointer;
  padding: 6px;
  border-radius: 6px;
}

.drawer-close:hover {
  background: #f1f5f9;
}

.drawer-body {
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
}

.drawer-menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

.drawer-menu li a {
  display: block;
  padding: 9px 8px;
  color: #2f3644;
  text-decoration: none;
  border-radius: 4px;
}

.drawer-menu li a:hover {
  background: #f0f2f5;
}

.drawer-group {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: .05em;
  color: #808695;
  padding: 14px 8px 4px;
  list-style: none;
}

/* Responsive Breakpoints */
@media (max-width: 1279px) {
  .pride-menu .menu-item-link, .pride-menu .dropdown-trigger {
    padding: 8px 9px;
    font-size: 14px;
  }
  .quick-search-form {
    width: 190px;
  }
  .masthead-row {
    gap: 14px;
  }
  .pride-brand-logo {
    height: 40px;
  }
}

@media (max-width: 1079px) {
  .pride-menu, .quick-search-form, .pride-account {
    display: none;
  }
  .menu-toggle {
    display: inline-flex;
  }
  .pride-brand-logo {
    height: 44px;
  }
}

@media (max-width: 768px) {
  .ebi-nav-links {
    display: none;
  }
  .masthead-row {
    padding: 10px 16px;
  }
}
`, t = {
  search: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
  chevronDown: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>',
  externalLink: '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ext-icon"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>',
  close: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
  menu: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>',
  person: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
  ebiLogo: '<svg viewBox="0 0 140 40" width="80" height="23" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="4" y="28" font-family="-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif" font-weight="900" font-size="28" fill="#ffffff" letter-spacing="1">EMBL-EBI</text></svg>'
}, g = "data:image/png;base64,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", w = "data:image/webp;base64,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";
class c extends HTMLElement {
  static get observedAttributes() {
    return ["active-section", "hide-search", "base-url", "banner-url", "bg-image", "username", "token"];
  }
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this._bannerContent = "", this._isCompact = !1, this._openDropdown = null, this._onScroll = this._onScroll.bind(this), this._onDocumentClick = this._onDocumentClick.bind(this), this._onKeyDown = this._onKeyDown.bind(this);
  }
  get baseUrl() {
    return this.getAttribute("base-url") || "https://www.ebi.ac.uk/pride";
  }
  get bannerUrl() {
    return this.getAttribute("banner-url") || `${this.baseUrl}/banner/index.txt`;
  }
  get bgImage() {
    return this.getAttribute("bg-image") || w;
  }
  get activeSection() {
    return (this.getAttribute("active-section") || "").toLowerCase();
  }
  get hideSearch() {
    const e = this.getAttribute("hide-search");
    return e !== null && e !== "false";
  }
  get username() {
    return this.getAttribute("username") || localStorage.getItem("username") || "";
  }
  get token() {
    return this.getAttribute("token") || localStorage.getItem("token") || "";
  }
  connectedCallback() {
    this.render(), this.fetchBanner(), window.addEventListener("scroll", this._onScroll, { passive: !0 }), document.addEventListener("click", this._onDocumentClick), document.addEventListener("keydown", this._onKeyDown);
  }
  disconnectedCallback() {
    window.removeEventListener("scroll", this._onScroll), document.removeEventListener("click", this._onDocumentClick), document.removeEventListener("keydown", this._onKeyDown);
  }
  attributeChangedCallback(e, r, a) {
    r !== a && this.shadowRoot && this.shadowRoot.innerHTML && (e === "active-section" ? this._updateActiveSection() : this.render());
  }
  _onScroll() {
    const e = window.pageYOffset || document.documentElement.scrollTop || 0, r = this.shadowRoot.querySelector(".pride-masthead");
    r && (!this._isCompact && e > 120 ? (this._isCompact = !0, r.classList.add("compact")) : this._isCompact && e < 40 && (this._isCompact = !1, r.classList.remove("compact")));
  }
  _onDocumentClick(e) {
    this.contains(e.target) || this._closeAllDropdowns();
  }
  _onKeyDown(e) {
    e.key === "Escape" && (this._closeAllDropdowns(), this._closeDrawer());
  }
  _closeAllDropdowns() {
    this.shadowRoot && (this.shadowRoot.querySelectorAll(".dropdown.is-open, .ebi-dropdown-pane.is-open").forEach((e) => {
      e.classList.remove("is-open");
    }), this._openDropdown = null);
  }
  _toggleDropdown(e) {
    const r = this.shadowRoot.getElementById(e);
    if (!r) return;
    const a = r.classList.contains("is-open");
    this._closeAllDropdowns(), a || (r.classList.add("is-open"), this._openDropdown = e);
  }
  _openDrawer() {
    const e = this.shadowRoot.querySelector(".drawer-backdrop"), r = this.shadowRoot.querySelector(".drawer-panel");
    e && r && (e.classList.add("is-open"), r.classList.add("is-open"));
  }
  _closeDrawer() {
    const e = this.shadowRoot.querySelector(".drawer-backdrop"), r = this.shadowRoot.querySelector(".drawer-panel");
    e && r && (e.classList.remove("is-open"), r.classList.remove("is-open"));
  }
  async fetchBanner() {
    try {
      const e = await fetch(this.bannerUrl);
      if (!e.ok) return;
      const r = await e.text(), a = (typeof r == "string" ? r : "").replace(/<!--[\s\S]*?-->/g, "").trim();
      if (a) {
        this._bannerContent = a;
        const o = this.shadowRoot.querySelector(".pride-banner-container"), l = this.shadowRoot.querySelector(".banner");
        o && l && (l.innerHTML = a, o.style.display = "block");
      }
    } catch {
    }
  }
  _handleSearch(e) {
    e.preventDefault();
    const r = this.shadowRoot.querySelector(".quick-search-input"), a = r ? r.value.trim() : "";
    if (!a) return;
    const o = new CustomEvent("pride-search", {
      bubbles: !0,
      composed: !0,
      cancelable: !0,
      detail: { query: a }
    });
    this.dispatchEvent(o) && (/^(PXD|PRD|PAD|RPXD)\d+$/i.test(a) ? window.location.href = `${this.baseUrl}/archive/projects/${a.toUpperCase()}` : window.location.href = `${this.baseUrl}/archive?keyword=${encodeURIComponent(a)}`);
  }
  _handleNavigate(e, r) {
    const a = new CustomEvent("pride-navigate", {
      bubbles: !0,
      composed: !0,
      cancelable: !0,
      detail: { href: r }
    });
    this.dispatchEvent(a) || e.preventDefault();
  }
  _handleLogout(e) {
    e.preventDefault(), localStorage.removeItem("username"), localStorage.removeItem("token"), localStorage.removeItem("logintype"), localStorage.removeItem("type");
    const r = new CustomEvent("pride-logout", {
      bubbles: !0,
      composed: !0,
      cancelable: !0
    });
    this.dispatchEvent(r) ? window.location.href = `${this.baseUrl}/archive` : this.render();
  }
  _updateActiveSection() {
    const e = this.activeSection;
    this.shadowRoot.querySelectorAll(".pride-menu > li").forEach((r) => {
      r.getAttribute("data-section") === e ? r.classList.add("active") : r.classList.remove("active");
    });
  }
  render() {
    const e = this.baseUrl, r = this.activeSection, a = this.username, o = !!(a && this.token);
    this.shadowRoot.innerHTML = `
      <style>${m}</style>

      <!-- 1. EBI Global Black Bar -->
      <div class="ebi-global-bar">
        <div class="skip-to">
          <a href="#content">Skip to main content</a>
        </div>
        <div class="ebi-row">
          <div class="ebi-nav-left">
            <a href="https://www.ebi.ac.uk" class="ebi-logo-link" title="EMBL-EBI Homepage">
              ${t.ebiLogo}
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
              ${t.search} <span>Search</span>
            </button>
            <button type="button" class="ebi-btn" id="ebi-campus-btn">
              <span>Hinxton</span> ${t.chevronDown}
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

      <!-- 2. PRIDE Main Masthead & Navigation (with background image and announcement banner on top) -->
      <header class="pride-masthead ${this._isCompact ? "compact" : ""}" style="background-image: url('${this.bgImage}');">
        <!-- Banner on top of header part -->
        <div class="pride-banner-container" style="display: ${this._bannerContent ? "block" : "none"};">
          <div class="pride-banner-inner">
            <div class="banner">${this._bannerContent}</div>
            <button type="button" class="banner-close" aria-label="Close notification">
              ${t.close}
            </button>
          </div>
        </div>

        <div class="masthead-row">
          <a href="${e}/" class="pride-brand" title="PRIDE Archive Home">
            <img src="${g}" alt="PRIDE" class="pride-brand-logo">
          </a>

          <nav class="pride-nav" aria-label="Main Navigation">
            <ul class="pride-menu">
              <!-- Home -->
              <li data-section="home" class="${r === "home" ? "active" : ""}">
                <a href="${e}/" class="menu-item-link">Home</a>
              </li>

              <!-- Archive Dropdown -->
              <li data-section="archive" class="dropdown ${r === "archive" ? "active" : ""}" id="menu-archive">
                <button type="button" class="dropdown-trigger" aria-haspopup="true">
                  Archive ${t.chevronDown}
                </button>
                <ul class="dropdown-menu">
                  <li><a href="${e}/archive" class="dropdown-item">Datasets</a></li>
                  <li><a href="${e}/archive/affinity-proteomics" class="dropdown-item">Affinity proteomics</a></li>
                  <li><a href="${e}/archive/crosslinking" class="dropdown-item">Crosslinking</a></li>
                  <li><a href="${e}/spectrumlibrary" class="dropdown-item">Spectral libraries</a></li>
                </ul>
              </li>

              <!-- Proteins -->
              <li data-section="proteins" class="${r === "proteins" ? "active" : ""}">
                <a href="${e}/archive/proteins" class="menu-item-link">Proteins</a>
              </li>

              <!-- USI -->
              <li data-section="usi" class="${r === "usi" ? "active" : ""}">
                <a href="${e}/archive/usi" class="menu-item-link" title="Universal Spectrum Identifier viewer">USI</a>
              </li>

              <!-- Tools Dropdown -->
              <li data-section="tools" class="dropdown ${r === "tools" ? "active" : ""}" id="menu-tools">
                <button type="button" class="dropdown-trigger" aria-haspopup="true">
                  Tools ${t.chevronDown}
                </button>
                <ul class="dropdown-menu">
                  <li><a href="${e}/markdownpage/pridesubmissiontool" class="dropdown-item">Submission tool</a></li>
                  <li><a href="${e}/filesspecification" class="dropdown-item">Submission Files Requirements</a></li>
                  <li><a href="${e}/archive/affinity-qc" class="dropdown-item">Affinity QC Generator <span class="nav-new-pill">New</span></a></li>
                  <li><a href="https://www.ebi.ac.uk/pride/services/pmultiqc/" class="dropdown-item" target="_blank" rel="noopener">pMultiQC ${t.externalLink}</a></li>
                  <li><a href="https://www.ebi.ac.uk/pride/ws/archive/v3/webjars/swagger-ui/index.html" class="dropdown-item" target="_blank" rel="noopener">Web service API ${t.externalLink}</a></li>
                  <li><a href="https://www.ebi.ac.uk/pride/services/sdrf-editor/" class="dropdown-item" target="_blank" rel="noopener">SDRF editor ${t.externalLink}</a></li>
                  <li><a href="https://www.ebi.ac.uk/pride/services/sdrf-validator" class="dropdown-item" target="_blank" rel="noopener">SDRF validator ${t.externalLink}</a></li>
                </ul>
              </li>

              <!-- Help Dropdown -->
              <li data-section="help" class="dropdown ${r === "help" ? "active" : ""}" id="menu-help">
                <button type="button" class="dropdown-trigger" aria-haspopup="true">
                  Help ${t.chevronDown}
                </button>
                <ul class="dropdown-menu">
                  <li><a href="${e}/markdownpage/documentationpage" class="dropdown-item">Documentation</a></li>
                  <li><a href="${e}/markdownpage/controlledaccess" class="dropdown-item">Controlled-access submissions</a></li>
                  <li><a href="https://www.ebi.ac.uk/pride/chatbot" class="dropdown-item" target="_blank" rel="noopener">PRIDE Assistant ${t.externalLink}</a></li>
                </ul>
              </li>

              <!-- About Dropdown -->
              <li data-section="about" class="dropdown ${r === "about" ? "active" : ""}" id="menu-about">
                <button type="button" class="dropdown-trigger" aria-haspopup="true">
                  About ${t.chevronDown}
                </button>
                <ul class="dropdown-menu">
                  <li><a href="${e}/markdownpage/citationpage" class="dropdown-item">About PRIDE</a></li>
                  <li><a href="${e}/markdownpage/license" class="dropdown-item">License</a></li>
                  <li><a href="${e}/markdownpage/contact" class="dropdown-item">Contact</a></li>
                </ul>
              </li>
            </ul>

            <!-- Quick Search Form -->
            ${this.hideSearch ? "" : `
              <form class="quick-search-form" role="search">
                <span class="search-icon">${t.search}</span>
                <input type="search" class="quick-search-input" placeholder="PXD accession or keyword" aria-label="Search PRIDE Archive">
              </form>
            `}

            <!-- User Account / Sign In -->
            <ul class="pride-account">
              ${o ? `
                <li class="dropdown" id="menu-user">
                  <button type="button" class="account-link dropdown-trigger" aria-haspopup="true">
                    ${t.person} <span>${a}</span> ${t.chevronDown}
                  </button>
                  <ul class="dropdown-menu account-dropdown-menu">
                    <li><a href="${e}/profile/${a.split("@")[0]}" class="dropdown-item">Profile</a></li>
                    <li><a href="#" class="dropdown-item logout-btn">Log out</a></li>
                  </ul>
                </li>
              ` : `
                <li><a href="${e}/login" class="account-link">Log in</a></li>
                <li><a href="${e}/register" class="account-link register">Register</a></li>
              `}
            </ul>

            <!-- Mobile Drawer Toggle -->
            <button type="button" class="menu-toggle" aria-label="Open mobile menu">
              ${t.menu}
            </button>
          </nav>
        </div>
      </header>

      <!-- 3. Mobile Sliding Drawer -->
      <div class="drawer-backdrop"></div>
      <aside class="drawer-panel" aria-label="Mobile Navigation">
        <div class="drawer-header">
          <span class="drawer-title">Navigation</span>
          <button type="button" class="drawer-close" aria-label="Close menu">${t.close}</button>
        </div>
        <div class="drawer-body">
          <a href="${e}/" class="drawer-link" style="font-weight:600">Home</a>

          <div class="drawer-group-title">Archive</div>
          <a href="${e}/archive" class="drawer-link">Datasets</a>
          <a href="${e}/archive/affinity-proteomics" class="drawer-link">Affinity proteomics</a>
          <a href="${e}/archive/crosslinking" class="drawer-link">Crosslinking</a>
          <a href="${e}/spectrumlibrary" class="drawer-link">Spectral libraries</a>
          <a href="${e}/archive/proteins" class="drawer-link">Proteins</a>
          <a href="${e}/archive/usi" class="drawer-link">USI Viewer</a>

          <div class="drawer-group-title">Tools</div>
          <a href="${e}/markdownpage/pridesubmissiontool" class="drawer-link">Submission tool</a>
          <a href="${e}/filesspecification" class="drawer-link">Submission Files Requirements</a>
          <a href="https://www.ebi.ac.uk/pride/services/pmultiqc/" class="drawer-link" target="_blank">pMultiQC</a>
          <a href="https://www.ebi.ac.uk/pride/ws/archive/v3/webjars/swagger-ui/index.html" class="drawer-link" target="_blank">Web service API</a>
          <a href="https://www.ebi.ac.uk/pride/services/sdrf-editor/" class="drawer-link" target="_blank">SDRF editor</a>
          <a href="https://www.ebi.ac.uk/pride/services/sdrf-validator" class="drawer-link" target="_blank">SDRF validator</a>

          <div class="drawer-group-title">Help & About</div>
          <a href="${e}/markdownpage/documentationpage" class="drawer-link">Documentation</a>
          <a href="https://www.ebi.ac.uk/pride/chatbot" class="drawer-link" target="_blank">PRIDE Assistant</a>
          <a href="${e}/markdownpage/citationpage" class="drawer-link">About PRIDE</a>
          <a href="${e}/markdownpage/license" class="drawer-link">License</a>
          <a href="${e}/markdownpage/contact" class="drawer-link">Contact</a>

          <div class="drawer-group-title">Account</div>
          ${o ? `
            <a href="${e}/profile/${a.split("@")[0]}" class="drawer-link">Profile (${a})</a>
            <a href="#" class="drawer-link logout-btn">Log out</a>
          ` : `
            <a href="${e}/login" class="drawer-link">Log in</a>
            <a href="${e}/register" class="drawer-link" style="color:#0284c7;font-weight:600">Register</a>
          `}
        </div>
      </aside>
    `, this._bindEvents();
  }
  _bindEvents() {
    const e = this.shadowRoot;
    e.querySelectorAll(".dropdown-trigger").forEach((i) => {
      i.addEventListener("click", (n) => {
        n.stopPropagation();
        const s = i.closest(".dropdown");
        if (s) {
          const h = s.classList.contains("is-open");
          this._closeAllDropdowns(), h || s.classList.add("is-open");
        }
      });
    });
    const r = e.getElementById("ebi-search-btn");
    r && r.addEventListener("click", (i) => {
      i.stopPropagation(), this._toggleDropdown("ebi-search-pane");
      const n = e.querySelector(".ebi-search-input");
      n && e.getElementById("ebi-search-pane").classList.contains("is-open") && setTimeout(() => n.focus(), 50);
    });
    const a = e.getElementById("ebi-campus-btn");
    a && a.addEventListener("click", (i) => {
      i.stopPropagation(), this._toggleDropdown("ebi-campus-pane");
    });
    const o = e.querySelector(".banner-close");
    o && o.addEventListener("click", () => {
      this._bannerContent = "";
      const i = e.querySelector(".pride-banner-container");
      i && (i.style.display = "none");
    });
    const l = e.querySelector(".quick-search-form");
    l && l.addEventListener("submit", (i) => this._handleSearch(i));
    const A = e.querySelector(".menu-toggle");
    A && A.addEventListener("click", () => this._openDrawer());
    const p = e.querySelector(".drawer-close");
    p && p.addEventListener("click", () => this._closeDrawer());
    const f = e.querySelector(".drawer-backdrop");
    f && f.addEventListener("click", () => this._closeDrawer()), e.querySelectorAll(".logout-btn").forEach((i) => {
      i.addEventListener("click", (n) => this._handleLogout(n));
    }), e.querySelectorAll('a[href]:not([target="_blank"]):not([href^="#"])').forEach((i) => {
      i.addEventListener("click", (n) => {
        const s = i.getAttribute("href");
        s && !s.startsWith("javascript:") && this._handleNavigate(n, s);
      });
    });
  }
}
const v = `
:host {
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  width: 100%;
}

*, *::before, *::after {
  box-sizing: inherit;
}

/* ==========================================================
   ELIXIR Banner (Ribbon)
   Matches official EBI/ELIXIR styling with data-color="#656665"
   ========================================================== */
.elixir-ribbon {
  padding: 1rem 0;
  background-color: #656665;
  color: #ffffff;
  clear: both;
}

.elixir-ribbon .row {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.elixir-ribbon .row::before,
.elixir-ribbon .row::after {
  display: table;
  content: ' ';
}

.elixir-ribbon a,
.elixir-ribbon a:active,
.elixir-ribbon a:visited,
.elixir-ribbon a:hover {
  color: #ffffff;
  text-decoration: none;
  border-bottom: none;
  display: block;
}

.elixir-ribbon a:hover {
  opacity: .85;
}

.elixir-ribbon .elixir-logo-kite {
  background: 80% 58% url("https://ebi.emblstatic.net/web_guidelines/EBI-Framework/v1.2/images/logos/assorted/elixir_kitemark-60px.png") no-repeat;
  position: relative;
  top: -5px;
  margin: 0 1rem -.5rem 0;
  height: 60px;
  width: 60px;
  display: inline-block;
  float: left;
  background-size: 60px;
}

.elixir-ribbon h5 {
  font-size: 1.3rem;
  padding: 0;
  margin: 0;
  display: inline-block;
  font-weight: 400;
  line-height: 1.4;
  color: #ffffff;
}

.elixir-ribbon .elixir-banner-name {
  font-weight: 700;
}

.elixir-banner-info {
  margin-top: 2px;
}

.elixir-banner-info small {
  font-size: 0.875rem;
  color: #ffffff;
}

.elixir-ribbon .readmore {
  border-bottom: 1px dotted #ffffff;
  margin-left: 6px;
}

/* ==========================================================
   EMBL-EBI Global Footer
   Light theme matching EBI Framework v1.2 / theme-embl-petrol
   ========================================================== */
.global-footer {
  background-color: #ffffff;
  border-top: 0 !important;
  padding-top: 1.5rem;
  padding-bottom: 2rem;
  color: #666666;
  font-size: 0.85rem;
  line-height: 1.5;
}

.global-footer .row {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-wrap: wrap;
}

.global-nav-expanded {
  margin-bottom: 1.5rem;
}

.global-nav-expanded .columns {
  flex: 0 0 16.66667%;
  max-width: 16.66667%;
  padding: 0 0.75rem;
  box-sizing: border-box;
}

.global-footer .ebi-logo {
  display: block;
  height: 53px;
  width: 100%;
  max-width: 140px;
  margin-top: 4px;
}

.global-footer .ebi-logo svg {
  width: 100%;
  height: auto;
  max-height: 53px;
}

.global-footer h5 {
  font-size: 0.95rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
  line-height: 1.3;
}

.global-footer h5 a {
  text-decoration: none;
}

.global-footer h5.services a,
.global-footer .services-color {
  color: #048880;
}

.global-footer h5.research a,
.global-footer .research-color {
  color: #405466;
}

.global-footer h5.training a,
.global-footer .training-color {
  color: #55758a;
}

.global-footer h5.industry a,
.global-footer .industry-color {
  color: #647f93;
}

.global-footer h5.about a,
.global-footer .ebi-color {
  color: #007c82;
}

.global-footer ul {
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 0.85rem;
}

.global-footer ul li {
  margin-bottom: 0.35rem;
  line-height: 1.35;
}

.global-footer a {
  color: #666666;
  text-decoration: none;
  transition: color 0.15s ease, border-bottom 0.15s ease;
}

.global-footer a:hover,
.global-footer a:focus,
.global-footer a:active {
  color: #222222;
  border-bottom: 1px dashed #cccccc;
}

.ebi-footer-meta {
  border-top: 1px solid #e5e7eb;
  padding-top: 1rem;
  font-size: 0.85rem;
  color: #666666;
  width: 100%;
}

.ebi-footer-meta .columns {
  flex: 0 0 100%;
  max-width: 100%;
  padding: 0 0.75rem;
  box-sizing: border-box;
}

.ebi-footer-meta p {
  margin: 0 0 6px 0;
}

.ebi-footer-meta a {
  color: #666666;
}

.ebi-footer-meta a:hover {
  color: #222222;
  border-bottom: 1px dashed #cccccc;
}

.ebi-footer-meta .float-right {
  float: right;
}

@media (max-width: 1024px) {
  .global-nav-expanded .columns {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
    margin-bottom: 1.5rem;
  }
}

@media (max-width: 640px) {
  .global-nav-expanded .columns {
    flex: 0 0 50%;
    max-width: 50%;
    margin-bottom: 1.25rem;
  }
  .ebi-footer-meta .float-right {
    float: none;
    display: block;
    margin-top: 4px;
  }
}
`, x = `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 587 181" width="140" height="43">
<defs>
<circle id="ebia" r="7.5" fill="#6DAB49"/>
<circle id="ebib" r="7.5" fill="#DA0F21"/>
</defs>
<use xlink:href="#ebia" transform="translate(467 28.1)"/>
<use xlink:href="#ebia" transform="translate(467 48.7)"/>
<use xlink:href="#ebia" transform="translate(467 69.2)"/>
<use xlink:href="#ebia" transform="translate(467 89.7)"/>
<use xlink:href="#ebia" transform="translate(467 130.9)"/>
<use xlink:href="#ebia" transform="translate(467 151.5)"/>
<use xlink:href="#ebia" transform="translate(430 48.6)"/>
<use xlink:href="#ebia" transform="translate(430 69.3)"/>
<use xlink:href="#ebia" transform="translate(430 89.7)"/>
<use xlink:href="#ebia" transform="translate(430 110.3)"/>
<use xlink:href="#ebia" transform="translate(430 130.8)"/>
<use xlink:href="#ebia" transform="translate(449 38.4)"/>
<use xlink:href="#ebia" transform="translate(449 59)"/>
<use xlink:href="#ebia" transform="translate(449 79.5)"/>
<use xlink:href="#ebia" transform="translate(449 100)"/>
<use xlink:href="#ebia" transform="translate(449 120.5)"/>
<use xlink:href="#ebia" transform="translate(449 141)"/>
<use xlink:href="#ebia" transform="translate(576.7 48.6)"/>
<use xlink:href="#ebia" transform="translate(576.7 69)"/>
<use xlink:href="#ebia" transform="translate(576.7 89.7)"/>
<use xlink:href="#ebia" transform="translate(576.7 110)"/>
<use xlink:href="#ebia" transform="translate(576.7 131)"/>
<use xlink:href="#ebia" transform="translate(558 38.4)"/>
<use xlink:href="#ebia" transform="translate(558 59)"/>
<use xlink:href="#ebia" transform="translate(558 79.5)"/>
<use xlink:href="#ebia" transform="translate(558 100)"/>
<use xlink:href="#ebia" transform="translate(558 120.5)"/>
<use xlink:href="#ebia" transform="translate(558 141)"/>
<use xlink:href="#ebia" transform="translate(540 28)"/>
<use xlink:href="#ebia" transform="translate(540 48.7)"/>
<use xlink:href="#ebia" transform="translate(540 69)"/>
<use xlink:href="#ebia" transform="translate(540 89.7)"/>
<use xlink:href="#ebia" transform="translate(540 110)"/>
<use xlink:href="#ebia" transform="translate(540 131)"/>
<use xlink:href="#ebia" transform="translate(540 151.5)"/>
<use xlink:href="#ebib" transform="translate(467 110)"/>
<use xlink:href="#ebia" transform="translate(522 18)"/>
<use xlink:href="#ebia" transform="translate(522 38)"/>
<use xlink:href="#ebia" transform="translate(522 59)"/>
<use xlink:href="#ebia" transform="translate(522 79)"/>
<use xlink:href="#ebia" transform="translate(522 100)"/>
<use xlink:href="#ebia" transform="translate(522 120.5)"/>
<use xlink:href="#ebia" transform="translate(522 141)"/>
<use xlink:href="#ebia" transform="translate(522 161.6)"/>
<use xlink:href="#ebia" transform="translate(503.5 7.5)"/>
<use xlink:href="#ebia" transform="translate(503.5 28)"/>
<use xlink:href="#ebia" transform="translate(503.5 48.6)"/>
<use xlink:href="#ebia" transform="translate(503.5 69)"/>
<use xlink:href="#ebia" transform="translate(503.5 90)"/>
<use xlink:href="#ebia" transform="translate(503.5 110.3)"/>
<use xlink:href="#ebia" transform="translate(503.5 131)"/>
<use xlink:href="#ebia" transform="translate(503.5 151.4)"/>
<use xlink:href="#ebia" transform="translate(485 17.7)"/>
<use xlink:href="#ebia" transform="translate(485 38.3)"/>
<use xlink:href="#ebia" transform="translate(485 58.8)"/>
<use xlink:href="#ebia" transform="translate(485 79.4)"/>
<use xlink:href="#ebia" transform="translate(485 100)"/>
<use xlink:href="#ebia" transform="translate(485 120.5)"/>
<use xlink:href="#ebia" transform="translate(485 141)"/>
<use xlink:href="#ebia" transform="translate(485 161.6)"/>
<use xlink:href="#ebia" transform="translate(503.5 172)"/>
<path id="E" d="M-22.8 31H22v-7.7h-36.7V4.5h34v-7h-34v-21h37.5V-31h-45.6z" transform="matrix(1 0 0 -1 26.2 89.6)"/>
<path d="M-29.6 31h12L.2-21.4 17.8 31h12v-62h-8v52.3l-17.6-52H-4l-17.8 52v-52h-8z" transform="matrix(1 0 0 -1 86 90)"/>
<path id="B" d="M-24 30.8H2.3c9.4 0 21.7-4.7 21.7-18 0-11.4-8-14-11.3-15.2C15-3.4 21-6.7 21-15.6 21-28 10-31 2.8-31H-24V31zM-15.7-5v-19h15c3.8 0 13.4.2 13.4 9.4 0 9.6-9.4 9.8-13 9.8h-15.4zM2.5 23.7h-18.2V2H1c3.6 0 14.7.3 14.7 10.4 0 9.7-8 11.3-13.2 11.2z" transform="translate(155 90)"/>
<path id="I" d="M-4.2 31h8.4v-62h-8.4v62z" transform="translate(193 90)"/>
<use xlink:href="#I" transform="matrix(0 .87 .64 0 151.5 -50.35)"/>
<use xlink:href="#I" transform="matrix(0 .75 .4 0 210 -58)"/>
<use xlink:href="#E" transform="translate(267.8 0)"/>
<use xlink:href="#B" transform="translate(193.4 0)"/>
<use xlink:href="#I" transform="translate(192 0)"/>
</svg>`;
class d extends HTMLElement {
  static get observedAttributes() {
    return ["show-elixir", "show-ebi-footer"];
  }
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  get showElixir() {
    return this.getAttribute("show-elixir") !== "false";
  }
  get showEbiFooter() {
    return this.getAttribute("show-ebi-footer") !== "false";
  }
  connectedCallback() {
    this.render();
  }
  attributeChangedCallback(e, r, a) {
    r !== a && this.render();
  }
  render() {
    const e = (/* @__PURE__ */ new Date()).getFullYear();
    this.shadowRoot.innerHTML = `
      <style>${v}</style>

      ${this.showElixir ? `
        <!-- ELIXIR Ribbon -->
        <div id="elixir-ribbon" class="elixir-ribbon">
          <div class="row">
            <div class="column">
              <a href="https://www.elixir-europe.org/about-us/who-we-are/nodes/embl-ebi" target="_blank" rel="noopener">
                <div class="elixir-logo-kite"></div>
                <h5>
                  <span class="elixir-banner-name">This service</span> is part of the ELIXIR infrastructure
                </h5>
                <div id="elixir-banner-info">
                  <small>
                    <span class="elixir-banner-description">PRIDE database is an ELIXIR Core Data Resource</span>
                    <span class="readmore">Learn more &#8250;</span>
                  </small>
                </div>
              </a>
            </div>
          </div>
        </div>
      ` : ""}

      ${this.showEbiFooter ? `
        <!-- EMBL-EBI Global Footer -->
        <footer class="global-footer ebi-global-footer">
          <nav id="global-nav-expanded" class="global-nav-expanded row">
            <!-- Column 1: EMBL-EBI Logo -->
            <div class="columns small-6 medium-2">
              <a href="//www.ebi.ac.uk" title="EMBL-EBI" class="ebi-logo">
                ${x}
              </a>
            </div>

            <!-- Column 2: Services -->
            <div class="columns small-6 medium-2">
              <h5 class="services"><a class="services-color" href="//www.ebi.ac.uk/services">Services</a></h5>
              <ul>
                <li><a href="//www.ebi.ac.uk/services/data-resources-and-tools">Data resources and tools</a></li>
                <li><a href="//www.ebi.ac.uk/submission">Data submission</a></li>
                <li><a href="//www.ebi.ac.uk/support">Support and feedback</a></li>
                <li class="last"><a href="https://www.ebi.ac.uk/licencing">Licensing</a></li>
              </ul>
            </div>

            <!-- Column 3: Research -->
            <div class="columns small-6 medium-2">
              <h5 class="research"><a class="research-color" href="//www.ebi.ac.uk/research">Research</a></h5>
              <ul>
                <li><a href="//www.ebi.ac.uk/research/publications">Publications</a></li>
                <li><a href="//www.ebi.ac.uk/research/groups">Research groups</a></li>
                <li class="last"><a href="//www.ebi.ac.uk/research/postdocs">Postdocs</a> and <a href="//www.ebi.ac.uk/research/eipp">PhDs</a></li>
              </ul>
            </div>

            <!-- Column 4: Training -->
            <div class="columns small-6 medium-2">
              <h5 class="training"><a class="training-color" href="//www.ebi.ac.uk/training">Training</a></h5>
              <ul>
                <li><a href="//www.ebi.ac.uk/training/live-events">Live training</a></li>
                <li><a href="//www.ebi.ac.uk/training/on-demand">On-demand training</a></li>
                <li><a href="//www.ebi.ac.uk/training/trainer-support">Support for trainers</a></li>
              </ul>
            </div>

            <!-- Column 5: Industry -->
            <div class="columns small-6 medium-2">
              <h5 class="industry"><a class="industry-color" href="//www.ebi.ac.uk/industry">Industry</a></h5>
              <ul>
                <li><a href="//www.ebi.ac.uk/industry/private/members-area/">Members Area</a></li>
                <li class="last"><a href="//www.ebi.ac.uk/industry/contact-us">Contact Industry team</a></li>
              </ul>
            </div>

            <!-- Column 6: About EMBL-EBI -->
            <div class="columns small-6 medium-2">
              <h5 class="about"><a class="ebi-color" href="//www.ebi.ac.uk/about">About EMBL-EBI</a></h5>
              <ul>
                <li><a href="//www.ebi.ac.uk/about/contact">Contact us</a></li>
                <li><a href="//www.ebi.ac.uk/about/events">Events</a></li>
                <li><a href="//www.ebi.ac.uk/about/jobs" title="Jobs, postdocs, PhDs...">Jobs</a></li>
                <li class="first"><a href="//www.ebi.ac.uk/about/news">News</a></li>
                <li><a href="//www.ebi.ac.uk/about/people">People and groups</a></li>
              </ul>
            </div>
          </nav>

          <section id="ebi-footer-meta" class="ebi-footer-meta row">
            <div class="columns">
              <p class="address">EMBL-EBI, Wellcome Genome Campus, Hinxton, Cambridgeshire, CB10 1SD, UK. +44 (0)1223 49 44 44</p>
              <p class="legal">
                Copyright &copy; EMBL ${e} | EMBL-EBI is <a href="https://www.embl.org/">part of the European Molecular Biology Laboratory</a> | <a href="//www.ebi.ac.uk/about/terms-of-use">Terms of use</a>
                <a class="readmore float-right" href="https://intranet.ebi.ac.uk">Intranet</a>
              </p>
            </div>
          </section>
        </footer>
      ` : ""}
    `;
  }
}
function b() {
  typeof window < "u" && "customElements" in window && (customElements.get("pride-header") || customElements.define("pride-header", c), customElements.get("pride-footer") || customElements.define("pride-footer", d), customElements.get("pride-navbar") || customElements.define("pride-navbar", class extends c {
  }), customElements.get("pride-web-header") || customElements.define("pride-web-header", class extends c {
  }), customElements.get("pride-web-footer") || customElements.define("pride-web-footer", class extends d {
  }));
}
b();
const k = {
  PrideHeader: c,
  PrideFooter: d,
  register: b
};
export {
  d as PrideFooter,
  c as PrideHeader,
  k as default,
  b as registerPrideWebCommons
};
