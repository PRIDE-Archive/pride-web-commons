import { PrideHeader } from './components/pride-header.js'
import { PrideFooter } from './components/pride-footer.js'
import { PrideChat } from './components/pride-chat.js'

export { PrideHeader, PrideFooter, PrideChat }

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
    if (!customElements.get('pride-chat')) {
      customElements.define('pride-chat', PrideChat)
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
    if (!customElements.get('pride-chatbot')) {
      customElements.define('pride-chatbot', class extends PrideChat {})
    }
  }
}

// Auto-register on import / script execution
registerPrideWebCommons()

export default {
  PrideHeader,
  PrideFooter,
  PrideChat,
  register: registerPrideWebCommons
}
