export const HEADER_CSS = `
:host {
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  color: #2f3644;
  line-height: 1.5;
  box-sizing: border-box;
  width: 100%;
}

*, *::before, *::after {
  box-sizing: inherit;
}

/* ==========================================================
   1. EMBL-EBI Global Black Bar (DefaultNav.vue / ebi-global.css)
   ========================================================== */
.ebi-global-bar {
  position: relative;
  z-index: 1000;
  width: 100%;
}

#skip-to {
  top: -5000px;
  position: absolute;
}

#skip-to a:focus {
  top: 6px;
  left: 10px;
  background: #5bc0be;
  color: #111;
  padding: 6px 12px;
  z-index: 10000;
  position: fixed;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
}

.masthead-black-bar {
  background-color: #111;
  height: 37px;
  line-height: 37px;
  font-family: Helvetica, Arial, FreeSans, "Liberation Sans", sans-serif;
  color: #fff;
  position: relative;
}

.masthead-black-bar a {
  color: #fff;
  text-decoration: none;
}

.masthead-black-bar .row {
  margin: 0 auto;
  display: flex;
  align-items: center;
  max-width: 150rem !important;
  height: 37px;
  padding: 0 1rem;
  position: relative;
}

ul#global-nav.menu {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: stretch;
  height: 37px;
  width: 100%;
}

ul#global-nav.menu li {
  display: inline-flex;
  align-items: center;
  position: relative;
  height: 100%;
}

ul#global-nav.menu li a {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0 0.85rem;
  height: 100%;
  color: #fff;
  font-size: 13px;
  font-weight: 400;
  text-decoration: none;
  border-bottom: none;
  line-height: 1;
  transition: background-color .15s ease;
}

ul#global-nav.menu li a svg {
  width: 14px;
  height: 14px;
  opacity: 0.9;
}

ul#global-nav.menu li.home-mobile {
  display: none;
}

ul#global-nav.menu li.home.active a {
  background-color: #000;
  font-weight: 700;
}

ul#global-nav.menu li.home a:hover {
  background-color: #007c82;
}

ul#global-nav.menu li.services a:hover {
  background-color: #389198;
}

ul#global-nav.menu li.research a:hover {
  background-color: #6dab49;
}

ul#global-nav.menu li.training a:hover {
  background-color: #e9b400;
}

ul#global-nav.menu li.about a:hover {
  background-color: #389198;
}

ul#global-nav.menu li.search a:hover {
  background-color: #389198;
}

ul#global-nav.menu li.float-right.embl-selector {
  margin-left: auto;
}

.embl-selector .button {
  background: #333 no-repeat 8px 50% url("https://ebi.emblstatic.net/web_guidelines/EBI-Framework/v1.2/images/logos/EMBL-EBI/EMBL_EBI_Logo_white.svg");
  background-size: 100px;
  padding-left: 114px;
  padding-right: 24px;
  height: 37px;
  line-height: 37px;
  color: #fff;
  border: none;
  font-size: 13px;
  cursor: pointer;
  position: relative;
  font-family: Helvetica, Arial, FreeSans, "Liberation Sans", sans-serif;
  display: inline-flex;
  align-items: center;
  transition: background-color .15s ease;
}

.embl-selector .button:hover,
.embl-selector .button:focus {
  background-color: #444;
}

.embl-selector .button::after {
  content: '';
  display: block;
  width: 0;
  height: 0;
  border: inset 4px;
  border-color: #fff transparent transparent;
  border-top-style: solid;
  position: absolute;
  top: 17px;
  right: 8px;
}

/* Hinxton Campus Dropdown */
#embl-dropdown {
  display: none;
  position: absolute;
  top: 37px;
  right: 0;
  background-color: #333;
  background-image: url("https://ebi.emblstatic.net/web_guidelines/EBI-Framework/v1.2/images/map.png");
  background-position: 100% 100%;
  background-repeat: no-repeat;
  color: #fff;
  padding: 20px;
  width: 580px;
  max-width: 90vw;
  box-shadow: 0 4px 16px rgba(0,0,0,.4);
  z-index: 1001;
  font-size: 13px;
  box-sizing: border-box;
  text-align: left;
}

#embl-dropdown.is-open {
  display: block;
}

#embl-dropdown p {
  margin: 0 0 12px;
  color: #fff;
  line-height: 1.4;
  font-size: 13px;
}

#embl-dropdown p a {
  color: #5bc0be;
  text-decoration: underline;
  display: inline;
}

#embl-dropdown h6 {
  margin: 14px 0 10px;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
}

#embl-dropdown .small-collapse {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 16px;
}

#embl-dropdown .small-collapse a {
  color: #fff;
  font-weight: 600;
  text-decoration: underline;
  font-size: 13px;
  display: inline-block;
}

#embl-dropdown .small-collapse .small {
  font-size: 11px;
  color: #cbd5e1;
  margin-top: 2px;
}

/* Global Search Dropdown */
#search-global-dropdown {
  display: none;
  position: absolute;
  top: 37px;
  left: 0;
  width: 100%;
  background: #222;
  padding: 12px 1rem;
  box-sizing: border-box;
  z-index: 1001;
  box-shadow: 0 4px 12px rgba(0,0,0,.3);
}

#search-global-dropdown.is-open {
  display: block;
}

#search-global-dropdown form {
  max-width: 700px;
  margin: 0 auto;
}

#search-global-dropdown fieldset {
  border: none;
  margin: 0;
  padding: 0;
}

#search-global-dropdown .input-group {
  display: flex;
  width: 100%;
}

#search-global-dropdown input[type="text"] {
  flex: 1;
  height: 38px;
  padding: 0 14px;
  font-size: 14px;
  border: 1px solid #444;
  border-right: none;
  background: #fff;
  color: #222;
  border-radius: 4px 0 0 4px;
  outline: none;
  box-sizing: border-box;
  font-family: inherit;
}

#search-global-dropdown input[type="submit"] {
  height: 38px;
  padding: 0 20px;
  background: #007c82;
  color: #fff;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  font-family: inherit;
}

#search-global-dropdown input[type="submit"]:hover {
  background: #006065;
}


/* ==========================================================
   2. Alert Announcement Banner (Nav.vue Alert / View UI Plus)
   ========================================================== */
.pride-banner-container {
  width: 100%;
  box-sizing: border-box;
}

.ivu-alert.ivu-alert-warning.ivu-alert-with-banner {
  position: relative;
  padding: 10px 16px;
  border-radius: 0;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid #ffd77a;
  background-color: #fff9e6;
  color: #515a6e;
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 0;
  width: 100%;
  box-sizing: border-box;
}

.banner p {
  color: #454548 !important;
  font-size: 16px;
  margin: 4px 0;
  line-height: 1.4;
}

.banner a {
  color: #454548 !important;
  text-decoration: underline;
}


/* ==========================================================
   3. PRIDE Masthead & Main Navigation (Nav.vue)
   ========================================================== */
.pride-masthead {
  background-color: #f5f7f8;
  background-size: cover;
  background-position: center;
  border-bottom: 1px solid #e3e6ea;
  box-shadow: 0 1px 3px rgba(0,0,0,.06);
  transition: box-shadow .2s;
  width: 100%;
}

.pride-masthead.compact {
  box-shadow: 0 2px 8px rgba(0,0,0,.12);
}

.masthead-row {
  max-width: 1600px;
  margin: 0 auto;
  padding: 14px 24px;
  display: flex;
  align-items: center;
  gap: 28px;
  transition: padding .2s;
}

.compact .masthead-row {
  padding: 6px 24px;
}

.pride-brand {
  display: inline-flex;
  align-items: center;
  border: none;
  flex-shrink: 0;
  text-decoration: none;
}

.pride-brand:hover {
  border: none;
}

.pride-brand-logo {
  height: 46px;
  width: auto;
  transition: height .2s;
  display: block;
}

.compact .pride-brand-logo {
  height: 30px;
}

.pride-nav {
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
  gap: 16px;
}

.pride-menu, .pride-account {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
}

.pride-menu > li {
  position: relative;
}

.pride-menu a, .pride-account a, .dropdown-trigger {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  padding: 8px 12px;
  font-size: 15px;
  color: #2f3644;
  border: none;
  border-radius: 4px;
  white-space: nowrap;
  line-height: 20px;
  text-decoration: none;
  background: transparent;
  cursor: pointer;
  font-family: inherit;
  font-weight: 400;
}

.pride-menu a:hover, .pride-account a:hover, .dropdown-trigger:hover {
  background: rgba(91,192,190,.14);
  color: #17233d;
  border: none;
}

.pride-menu > li.active > a,
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

.dropdown-trigger svg {
  width: 14px;
  height: 14px;
  color: #808695;
  margin-left: 2px;
}

/* Dropdown Menu (mirroring iView / View UI Plus) */
.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 5px;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 1px 6px rgba(0,0,0,.2);
  list-style: none;
  padding: 4px 0;
  min-width: 180px;
  z-index: 1000;
}

/* Hover bridge keeps cursor inside menu during brief gaps */
.dropdown-menu::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: -8px;
  height: 8px;
}

.dropdown.is-open .dropdown-menu,
.dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown-item {
  display: flex !important;
  align-items: center;
  font-size: 14px !important;
  padding: 9px 16px 9px 12px !important;
  color: #515a6e !important;
  text-decoration: none;
  line-height: 1.4;
  white-space: nowrap;
  border-radius: 0 !important;
}

.dropdown-item:hover {
  background-color: #f3f3f3 !important;
  color: #5bc0be !important;
}

.dropdown-item .ext {
  font-size: 12px;
  color: #c5c8ce;
  margin-left: 4px;
  display: inline-flex;
  align-items: center;
}

.dropdown-item .ext svg {
  width: 13px;
  height: 13px;
}

/* Quick Search */
.quick-search {
  margin-left: auto;
  display: flex;
  align-items: center;
  background: #fff;
  border: 1px solid #dcdee2;
  border-radius: 999px;
  padding: 0 10px 0 12px;
  height: 34px;
  width: 260px;
  max-width: 30vw;
  transition: border-color .15s, box-shadow .15s;
}

.quick-search:focus-within {
  border-color: #5bc0be;
  box-shadow: 0 0 0 3px rgba(91,192,190,.2);
}

.quick-search-icon {
  color: #808695;
  margin-right: 6px;
  display: flex;
  align-items: center;
}

.quick-search-icon svg {
  width: 16px;
  height: 16px;
}

.quick-search-input {
  border: none !important;
  outline: none;
  background: none !important;
  width: 100%;
  font-size: 13px;
  color: #17233d;
  height: 30px !important;
  box-shadow: none !important;
  margin: 0;
  padding: 0 !important;
  font-family: inherit;
}

.quick-search-input::placeholder {
  color: #9aa0a8;
}

/* Account items */
.pride-account {
  flex-shrink: 0;
}

.pride-account a.register {
  background: #5bc0be;
  color: #fff;
  margin-left: 4px;
}

.pride-account a.register:hover {
  background: #4aa9a7;
  color: #fff;
}

.account-email {
  max-width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.nav-new-pill {
  display: inline-block;
  background: #5bc0be;
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  padding: 1px 6px;
  border-radius: 999px;
  margin-left: 6px;
  vertical-align: middle;
  line-height: 1.3;
}

/* Mobile Toggle */
.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: #2f3644;
  margin-left: auto;
  padding: 4px;
}

.menu-toggle svg {
  width: 24px;
  height: 24px;
}

/* Drawer / Mobile Menu */
.drawer-backdrop {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2000;
}

.drawer-backdrop.is-open {
  display: block;
}

.drawer-panel {
  position: fixed;
  top: 0;
  right: -300px;
  width: 280px;
  height: 100%;
  background: #fff;
  z-index: 2001;
  box-shadow: -2px 0 8px rgba(0,0,0,0.15);
  transition: right 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  display: flex;
  flex-direction: column;
}

.drawer-panel.is-open {
  right: 0;
}

.drawer-header {
  padding: 16px;
  border-bottom: 1px solid #e8eaec;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.drawer-header h3 {
  margin: 0;
  font-size: 16px;
  color: #17233d;
}

.drawer-close {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  color: #808695;
}

.drawer-body {
  flex: 1;
  overflow-y: auto;
  padding: 12px 16px;
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
  font-size: 14px;
}

.drawer-menu li a:hover {
  background: #f0f2f5;
  color: #5bc0be;
}

.drawer-group {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: .05em;
  color: #808695;
  padding: 14px 8px 4px;
  font-weight: 700;
}

/* Responsive Breakpoints */
@media (max-width: 1279px) {
  .pride-menu a {
    padding: 8px 9px;
    font-size: 14px;
  }
  .quick-search {
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
  .pride-menu, .quick-search, .pride-account {
    display: none;
  }
  .menu-toggle {
    display: inline-flex;
  }
  .pride-brand-logo {
    height: 44px;
  }
}

@media (max-width: 640px) {
  .masthead-black-bar nav ul.menu li:not(.home):not(.embl-selector) {
    display: none;
  }
  .embl-selector .button {
    padding-left: 90px;
    font-size: 11px;
  }
}
`
