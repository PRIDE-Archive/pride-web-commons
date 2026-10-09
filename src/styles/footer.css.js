export const FOOTER_CSS = `
:host {
  display: block;
  font-family: Helvetica, Arial, FreeSans, "Liberation Sans", sans-serif;
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
  font-family: Helvetica, Arial, FreeSans, "Liberation Sans", sans-serif;
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
  font-weight: 500;
  line-height: 1.4;
  color: #ffffff;
  font-family: Helvetica, Arial, FreeSans, "Liberation Sans", sans-serif;
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
  font-family: Helvetica, Arial, FreeSans, "Liberation Sans", sans-serif;
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
  width: 100%;
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
  width: 140px;
  background-image: url("https://ebi.emblstatic.net/web_guidelines/EBI-Framework/v1.2/images/logos/EMBL-EBI/EMBL_EBI_Logo_black.svg");
  background-size: contain;
  background-repeat: no-repeat;
  margin-left: -.25rem;
  position: relative;
  top: 8px;
}

.global-footer h5 {
  font-size: 1.15rem;
  margin-top: 1.25rem;
  margin-bottom: 8px;
  font-weight: 400;
  line-height: 1.4;
  font-family: Helvetica, Arial, FreeSans, "Liberation Sans", sans-serif;
}

.global-footer h5 a {
  text-decoration: none;
  font-weight: 500;
}

.global-footer h5.services a,
.global-footer .services-color {
  color: #389198;
}

.global-footer h5.research a,
.global-footer .research-color {
  color: #6dab49;
}

.global-footer h5.training a,
.global-footer .training-color {
  color: #e9b400;
}

.global-footer h5.industry a,
.global-footer .industry-color {
  color: #0086b4;
}

.global-footer h5.about a,
.global-footer .ebi-color {
  color: #007c82;
}

.global-footer ul {
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 13.6px;
  line-height: 1.5;
}

.global-footer ul li {
  margin-bottom: 0.4rem;
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
  border-bottom: 1px dashed #999999;
}

.ebi-footer-meta {
  border-top: 1px solid #eeeeee;
  padding-top: 1rem;
  padding-bottom: 1.5rem;
  font-size: 13px;
  color: #666666;
  width: 100%;
  line-height: 1.5;
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
  text-decoration: none;
}

.ebi-footer-meta a:hover {
  color: #222222;
  border-bottom: 1px dashed #999999;
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
`
