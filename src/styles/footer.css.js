export const FOOTER_CSS = `
:host {
  display: block;
  font-family: Helvetica, Arial, FreeSans, "Liberation Sans", sans-serif;
  font-size: 14px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
  padding: 16px 0;
  background-color: #656665;
  color: #ffffff;
  clear: both;
  font-family: Helvetica, Arial, FreeSans, "Liberation Sans", sans-serif;
}

.elixir-ribbon .row {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
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
  margin: 0 16px -8px 0;
  height: 60px;
  width: 60px;
  display: inline-block;
  float: left;
  background-size: 60px;
}

.elixir-ribbon h5 {
  font-size: 20.8px;
  padding: 0;
  margin: 0;
  display: inline-block;
  font-weight: 400;
  line-height: 1.4;
  color: #ffffff;
  font-family: Helvetica, Arial, FreeSans, "Liberation Sans", sans-serif;
}

.elixir-ribbon .elixir-banner-name {
  font-weight: 400;
}

.elixir-banner-info {
  margin-top: 2px;
}

.elixir-banner-info small {
  font-size: 11.2px;
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
  padding-top: 24px;
  padding-bottom: 32px;
  color: #666666;
  font-size: 11.9px;
  line-height: 1.6;
  font-family: Helvetica, Arial, FreeSans, "Liberation Sans", sans-serif;
}

.global-footer .row {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  flex-wrap: wrap;
}

.global-nav-expanded {
  margin-bottom: 24px;
  width: 100%;
}

.global-nav-expanded .columns {
  flex: 0 0 16.66667%;
  max-width: 16.66667%;
  padding: 0 12px;
  box-sizing: border-box;
}

.global-footer .ebi-logo {
  display: block;
  height: 53px;
  width: 140px;
  background-image: url("https://ebi.emblstatic.net/web_guidelines/EBI-Framework/v1.2/images/logos/EMBL-EBI/EMBL_EBI_Logo_black.svg");
  background-size: contain;
  background-repeat: no-repeat;
  margin-left: -4px;
  position: relative;
  top: 8px;
}

.global-footer h5 {
  font-size: 20px;
  margin-top: 16px;
  margin-bottom: 6px;
  font-weight: 400;
  line-height: 1.4;
  font-family: Helvetica, Arial, FreeSans, "Liberation Sans", sans-serif;
}

.global-footer h5 a {
  text-decoration: none;
  font-weight: 400;
}

/* The live PRIDE footer (theme-embl-petrol) renders column headings in grey */
.global-footer h5 a {
  color: #666666;
}

.global-footer ul {
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 11.9px;
  line-height: 1.35;
}

.global-footer ul li {
  margin-bottom: 3px;
}

.global-footer a {
  color: #666666;
  text-decoration: none;
  transition: color 0.15s ease;
}

.global-footer a:hover,
.global-footer a:focus,
.global-footer a:active {
  color: #222222;
  text-decoration: underline;
}

.ebi-footer-meta {
  border-top: none;
  padding-top: 16px;
  padding-bottom: 24px;
  font-size: 11.9px;
  color: #666666;
  width: 100%;
  line-height: 1.5;
}

.ebi-footer-meta .columns {
  flex: 0 0 100%;
  max-width: 100%;
  padding: 0 12px;
  box-sizing: border-box;
}

.ebi-footer-meta p {
  margin: 0 0 6px 0;
}

.ebi-footer-meta a {
  color: #666666;
  text-decoration: none;
}

.ebi-footer-meta a:hover {
  color: #222222;
  text-decoration: underline;
}

.ebi-footer-meta .float-right {
  float: right;
}

.ebi-footer-meta .readmore.float-right:after {
  content: " >";
}

@media (max-width: 1024px) {
  .global-nav-expanded .columns {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
    margin-bottom: 24px;
  }
}

@media (max-width: 640px) {
  .global-nav-expanded .columns {
    flex: 0 0 50%;
    max-width: 50%;
    margin-bottom: 20px;
  }
  .ebi-footer-meta .float-right {
    float: none;
    display: block;
    margin-top: 4px;
  }
}
`
