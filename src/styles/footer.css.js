export const FOOTER_CSS = `
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
`
