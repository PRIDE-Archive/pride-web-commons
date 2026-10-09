import { FOOTER_CSS } from '../styles/footer.css.js'

const EBI_LOGO_BLACK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 587 181" width="140" height="43">
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
</svg>`

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
              <a href="//www.ebi.ac.uk" title="EMBL-EBI" class="ebi-logo">
                ${EBI_LOGO_BLACK_SVG}
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
