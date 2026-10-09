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
`
