import { PrideHeader } from './components/pride-header.js'
import { PrideFooter } from './components/pride-footer.js'

export { PrideHeader, PrideFooter }

/**
 * Automatically register the Web Components if running in browser
 */
export function registerPrideWebCommons() {
  if (typeof window !== 'undefined' && 'customElements' in window) {
    if (!customElements.get('pride-header')) {
      customElements.define('pride-header', PrideHeader)
    }
    if (!customElements.get('pride-footer')) {
      customElements.define('pride-footer', PrideFooter)
    }

    // Convenience aliases
    if (!customElements.get('pride-navbar')) {
      customElements.define('pride-navbar', class extends PrideHeader {})
    }
    if (!customElements.get('pride-web-header')) {
      customElements.define('pride-web-header', class extends PrideHeader {})
    }
    if (!customElements.get('pride-web-footer')) {
      customElements.define('pride-web-footer', class extends PrideFooter {})
    }
  }
}

// Auto-register on import / script execution
registerPrideWebCommons()

export default {
  PrideHeader,
  PrideFooter,
  register: registerPrideWebCommons
}
