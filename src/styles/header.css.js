export const HEADER_CSS = `
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
  border: 1px solid #374151;
  color: #e5e7eb;
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 4px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: all 0.15s ease;
}

.ebi-btn:hover {
  background: #1f2937;
  color: #ffffff;
  border-color: #4b5563;
}

/* EBI Dropdowns */
.ebi-dropdown-pane {
  position: absolute;
  top: 100%;
  right: 0;
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 6px;
  padding: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  display: none;
  z-index: 1001;
  min-width: 220px;
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
   Announcement Banner
   ========================================================== */
.pride-alert-banner {
  background-color: #fffbe6;
  border-bottom: 1px solid #ffe58f;
  color: #5c3c00;
  padding: 10px 24px;
  display: none;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 14px;
  z-index: 990;
}

.pride-alert-banner.is-visible {
  display: flex;
}

.banner-content {
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: 1400px;
  text-align: center;
  line-height: 1.4;
}

.banner-content a {
  color: #1d4ed8;
  font-weight: 600;
  text-decoration: underline;
}

.banner-close {
  background: none;
  border: none;
  color: #8c6b00;
  cursor: pointer;
  padding: 4px 8px;
  margin-left: 16px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
}

.banner-close:hover {
  background: rgba(0, 0, 0, 0.05);
}

/* ==========================================================
   PRIDE Main Masthead & Navigation
   ========================================================== */
.pride-masthead {
  background-color: #f8fafc;
  background-image: linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(248,250,252,0.95) 100%), url('https://www.ebi.ac.uk/pride/image/hero-beta-banner.webp');
  background-size: cover;
  background-position: center;
  border-bottom: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
  position: sticky;
  top: 0;
  z-index: 900;
}

.pride-masthead.compact {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.masthead-row {
  max-width: 1600px;
  margin: 0 auto;
  padding: 12px 24px;
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
  flex-shrink: 0;
}

.pride-brand-logo {
  height: 44px;
  width: auto;
  display: block;
  transition: height 0.2s ease;
}

.pride-masthead.compact .pride-brand-logo {
  height: 32px;
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
  gap: 4px;
  padding: 8px 12px;
  font-size: 15px;
  color: #334155;
  text-decoration: none;
  border: none;
  background: none;
  border-radius: 6px;
  white-space: nowrap;
  line-height: 20px;
  cursor: pointer;
  transition: all 0.15s ease;
}

.menu-item-link:hover, .dropdown-trigger:hover {
  background: rgba(91, 192, 190, 0.15);
  color: #0f172a;
}

/* Active Section Indicator */
.pride-menu > li.active .menu-item-link,
.pride-menu > li.active .dropdown-trigger {
  color: #0f172a;
  font-weight: 600;
}

.pride-menu > li.active::after {
  content: '';
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: -4px;
  height: 3px;
  border-radius: 2px;
  background: #5bc0be;
}

/* Dropdown Menus */
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 6px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
  padding: 6px;
  min-width: 230px;
  list-style: none;
  display: none;
  z-index: 1050;
}

/* Bridge gap so cursor doesn't lose hover */
.dropdown-menu::before {
  content: '';
  position: absolute;
  top: -10px;
  left: 0;
  right: 0;
  height: 10px;
}

.dropdown.is-open .dropdown-menu {
  display: block;
  animation: fadeIn 0.15s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
}

.dropdown-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  color: #334155;
  text-decoration: none;
  border-radius: 6px;
  font-size: 14px;
  transition: all 0.15s ease;
  cursor: pointer;
  white-space: nowrap;
}

.dropdown-item:hover {
  background: #f1f5f9;
  color: #0284c7;
}

.nav-new-pill {
  background: #e0f2fe;
  color: #0369a1;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 2px 6px;
  border-radius: 999px;
  margin-left: 8px;
}

.ext-icon {
  margin-left: 6px;
  color: #94a3b8;
}

/* Quick Search */
.quick-search-form {
  margin-left: auto;
  display: flex;
  align-items: center;
  background: #ffffff;
  border: 1px solid #cbd5e1;
  border-radius: 999px;
  padding: 0 12px;
  height: 36px;
  width: 260px;
  max-width: 30vw;
  transition: all 0.15s ease;
}

.quick-search-form:focus-within {
  border-color: #5bc0be;
  box-shadow: 0 0 0 3px rgba(91, 192, 190, 0.25);
}

.search-icon {
  color: #94a3b8;
  margin-right: 8px;
  display: flex;
  align-items: center;
}

.quick-search-input {
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  font-size: 13px;
  color: #0f172a;
  padding: 0;
  margin: 0;
}

.quick-search-input::placeholder {
  color: #94a3b8;
}

/* Account Section */
.pride-account {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.account-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  font-size: 14px;
  font-weight: 500;
  color: #334155;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.15s ease;
  cursor: pointer;
}

.account-link:hover {
  background: #f1f5f9;
  color: #0f172a;
}

.account-link.register {
  background: #5bc0be;
  color: #ffffff;
  font-weight: 600;
}

.account-link.register:hover {
  background: #48a6a4;
  color: #ffffff;
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
  color: #334155;
  margin-left: auto;
  padding: 6px;
  border-radius: 6px;
}

.menu-toggle:hover {
  background: #f1f5f9;
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
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.drawer-group-title {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  color: #94a3b8;
  letter-spacing: 0.05em;
  margin: 12px 0 6px 4px;
}

.drawer-link {
  display: block;
  padding: 9px 12px;
  font-size: 14px;
  color: #334155;
  text-decoration: none;
  border-radius: 6px;
}

.drawer-link:hover {
  background: #f1f5f9;
  color: #5bc0be;
}

/* Responsive Breakpoints */
@media (max-width: 1200px) {
  .pride-menu .menu-item-link, .pride-menu .dropdown-trigger {
    padding: 8px 8px;
    font-size: 14px;
  }
  .quick-search-form {
    width: 200px;
  }
}

@media (max-width: 1040px) {
  .pride-menu, .quick-search-form, .pride-account {
    display: none;
  }
  .menu-toggle {
    display: inline-flex;
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
`;
