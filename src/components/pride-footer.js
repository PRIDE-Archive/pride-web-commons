import { FOOTER_CSS } from '../styles/footer.css.js'
import { ICONS } from '../assets/icons.js'

export class PrideFooter extends HTMLElement {
  static get observedAttributes() {
    return ['show-elixir', 'show-ebi-footer']
  }

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  get showElixir() {
    return this.getAttribute('show-elixir') !== 'false'
  }

  get showEbiFooter() {
    return this.getAttribute('show-ebi-footer') !== 'false'
  }

  connectedCallback() {
    this.render()
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render()
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>${FOOTER_CSS}</style>

      ${this.showElixir ? `
        <!-- ELIXIR Core Data Resource Banner -->
        <div class="elixir-banner">
          <div class="elixir-container">
            <div class="elixir-left">
              <span class="elixir-badge">ELIXIR</span>
              <span class="elixir-text">PRIDE database is an ELIXIR Core Data Resource</span>
            </div>
            <a href="https://www.elixir-europe.org/about-us/who-we-are/nodes/embl-ebi" class="elixir-link" target="_blank" rel="noopener">
              More information ${ICONS.externalLink}
            </a>
          </div>
        </div>
      ` : ''}

      ${this.showEbiFooter ? `
        <!-- EMBL-EBI Global Footer -->
        <footer class="ebi-global-footer">
          <div class="footer-container">
            <div class="footer-grid">
              <!-- Column 1: EMBL-EBI -->
              <div class="footer-col">
                <h4>EMBL-EBI</h4>
                <ul class="footer-links">
                  <li><a href="https://www.ebi.ac.uk/about" target="_blank">Overview</a></li>
                  <li><a href="https://www.ebi.ac.uk/about/leadership" target="_blank">Leadership</a></li>
                  <li><a href="https://www.ebi.ac.uk/about/funding" target="_blank">Funding</a></li>
                  <li><a href="https://www.ebi.ac.uk/about/jobs" target="_blank">Jobs</a></li>
                  <li><a href="https://www.ebi.ac.uk/about/contact" target="_blank">Contact us</a></li>
                </ul>
              </div>

              <!-- Column 2: Services -->
              <div class="footer-col">
                <h4>Services</h4>
                <ul class="footer-links">
                  <li><a href="https://www.ebi.ac.uk/services" target="_blank">By topic</a></li>
                  <li><a href="https://www.ebi.ac.uk/services/all" target="_blank">By name (A-Z)</a></li>
                  <li><a href="https://www.ebi.ac.uk/support" target="_blank">Help &amp; Support</a></li>
                  <li><a href="https://www.ebi.ac.uk/licencing" target="_blank">Terms of use</a></li>
                </ul>
              </div>

              <!-- Column 3: Research -->
              <div class="footer-col">
                <h4>Research</h4>
                <ul class="footer-links">
                  <li><a href="https://www.ebi.ac.uk/research" target="_blank">Overview</a></li>
                  <li><a href="https://www.ebi.ac.uk/research/publications" target="_blank">Publications</a></li>
                  <li><a href="https://www.ebi.ac.uk/research/groups" target="_blank">Research groups</a></li>
                  <li><a href="https://www.ebi.ac.uk/research/postdocs" target="_blank">Postdocs &amp; PhDs</a></li>
                </ul>
              </div>

              <!-- Column 4: Training -->
              <div class="footer-col">
                <h4>Training</h4>
                <ul class="footer-links">
                  <li><a href="https://www.ebi.ac.uk/training" target="_blank">Overview</a></li>
                  <li><a href="https://www.ebi.ac.uk/training/live-events" target="_blank">Live training</a></li>
                  <li><a href="https://www.ebi.ac.uk/training/on-demand" target="_blank">On-demand training</a></li>
                  <li><a href="https://www.ebi.ac.uk/training/trainer-support" target="_blank">Trainer support</a></li>
                </ul>
              </div>

              <!-- Column 5: PRIDE Archive -->
              <div class="footer-col">
                <h4>PRIDE Resources</h4>
                <ul class="footer-links">
                  <li><a href="https://www.ebi.ac.uk/pride/archive">Datasets</a></li>
                  <li><a href="https://www.ebi.ac.uk/pride/markdownpage/pridesubmissiontool">Submission tool</a></li>
                  <li><a href="https://www.ebi.ac.uk/pride/ws/archive/v3/webjars/swagger-ui/index.html" target="_blank">Web service API</a></li>
                  <li><a href="https://www.ebi.ac.uk/pride/markdownpage/documentationpage">Documentation</a></li>
                  <li><a href="https://www.ebi.ac.uk/pride/markdownpage/citationpage">Citing PRIDE</a></li>
                </ul>
              </div>
            </div>

            <!-- Footer Meta -->
            <div class="footer-meta">
              <div class="meta-links">
                <a href="https://www.ebi.ac.uk/about/terms-of-use" target="_blank">Terms of use</a>
                <a href="https://www.ebi.ac.uk/about/privacy" target="_blank">Privacy notice</a>
                <a href="https://www.ebi.ac.uk/about/cookies" target="_blank">Cookie settings</a>
                <a href="https://www.ebi.ac.uk/about/security" target="_blank">Security</a>
              </div>
              <div class="copyright">
                &copy; EMBL-EBI European Bioinformatics Institute, Hinxton, Cambridgeshire, UK.
              </div>
            </div>
          </div>
        </footer>
      ` : ''}
    `
  }
}
