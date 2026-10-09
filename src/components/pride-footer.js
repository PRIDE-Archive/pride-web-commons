import { FOOTER_CSS } from '../styles/footer.css.js'

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
    const currentYear = new Date().getFullYear()

    this.shadowRoot.innerHTML = `
      <style>${FOOTER_CSS}</style>

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
      ` : ''}

      ${this.showEbiFooter ? `
        <!-- EMBL-EBI Global Footer -->
        <footer class="global-footer ebi-global-footer">
          <nav id="global-nav-expanded" class="global-nav-expanded row">
            <!-- Column 1: EMBL-EBI Logo -->
            <div class="columns small-6 medium-2">
              <a href="//www.ebi.ac.uk" title="EMBL-EBI">
                <span class="ebi-logo"></span>
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
                Copyright &copy; EMBL ${currentYear} | EMBL-EBI is <a href="https://www.embl.org/">part of the European Molecular Biology Laboratory</a> | <a href="//www.ebi.ac.uk/about/terms-of-use">Terms of use</a>
                <a class="readmore float-right" href="https://intranet.ebi.ac.uk">Intranet</a>
              </p>
            </div>
          </section>
        </footer>
      ` : ''}
    `
  }
}
