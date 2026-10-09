/**
 * PRIDE Assistant Chatbot Web Component (<pride-chat>)
 *
 * Provides a floating chat trigger button and popup window housing the PRIDE
 * Assistant iframe. Supports lazy loading, origin verification, responsive mobile
 * layout, and automatic relevant source documents dispatch.
 */
import { CHAT_CSS } from '../styles/chat.css.js'

const CHAT_ICON_SVG = `
  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5z"></path>
    <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
  </svg>
`

const CLOSE_ICON_SVG = `
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
`

export class PrideChat extends HTMLElement {
  static get observedAttributes() {
    return ['type', 'base-url', 'src', 'open']
  }

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this._isOpen = false
    this._iframeLoaded = false
    this._iframeEl = null
    this._onMessage = this._onMessage.bind(this)
  }

  get type() {
    return this.getAttribute('type') || 'assistant'
  }

  set type(val) {
    if (val) this.setAttribute('type', val)
    else this.removeAttribute('type')
  }

  get baseUrl() {
    return (this.getAttribute('base-url') || 'https://www.ebi.ac.uk/pride').replace(/\/+$/, '')
  }

  set baseUrl(val) {
    if (val) this.setAttribute('base-url', val)
    else this.removeAttribute('base-url')
  }

  get src() {
    if (this.hasAttribute('src')) {
      return this.getAttribute('src')
    }
    return `${this.baseUrl}/chatbot/popup?type=${encodeURIComponent(this.type)}`
  }

  set src(val) {
    if (val) this.setAttribute('src', val)
    else this.removeAttribute('src')
  }

  get isOpen() {
    return this._isOpen
  }

  set isOpen(val) {
    const next = Boolean(val)
    if (this._isOpen === next) return
    this._isOpen = next
    this._updateState()
  }

  toggle() {
    this.isOpen = !this.isOpen
  }

  open() {
    this.isOpen = true
  }

  close() {
    this.isOpen = false
  }

  connectedCallback() {
    this.render()
    if (this.hasAttribute('open')) {
      this._isOpen = true
      this._updateState()
    }
    window.addEventListener('message', this._onMessage)
  }

  disconnectedCallback() {
    window.removeEventListener('message', this._onMessage)
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return
    if (name === 'open') {
      this.isOpen = this.hasAttribute('open') && this.getAttribute('open') !== 'false'
    } else if (name === 'type' || name === 'src' || name === 'base-url') {
      if (this._iframeEl) {
        this._iframeEl.src = this.src
      }
    }
  }

  _ensureIframe() {
    if (this._iframeLoaded) return
    this._iframeLoaded = true
    const chatBody = this.shadowRoot.querySelector('.popup-chat-body')
    if (!chatBody) return
    const iframe = document.createElement('iframe')
    iframe.className = 'chat-iframe'
    iframe.src = this.src
    iframe.setAttribute('title', 'PRIDE Assistant Chatbot')
    iframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture')
    chatBody.appendChild(iframe)
    this._iframeEl = iframe
  }

  _updateState() {
    const root = this.shadowRoot
    if (!root) return
    const chatPopup = root.querySelector('.popup-chat')
    const btn = root.querySelector('.popup-container')
    const chatIcon = root.querySelector('.icon-chat')
    const closeIcon = root.querySelector('.icon-close')
    if (!chatPopup || !btn) return

    if (this._isOpen) {
      this._ensureIframe()
      chatPopup.classList.add('is-open')
      btn.classList.add('is-open')
      btn.setAttribute('aria-expanded', 'true')
      btn.setAttribute('title', 'Close PRIDE Assistant')
      if (chatIcon) chatIcon.style.display = 'none'
      if (closeIcon) closeIcon.style.display = 'flex'
      this.dispatchEvent(new CustomEvent('pride-chat-open', { bubbles: true, composed: true }))
    } else {
      chatPopup.classList.remove('is-open')
      btn.classList.remove('is-open')
      btn.setAttribute('aria-expanded', 'false')
      btn.setAttribute('title', 'Open PRIDE Assistant')
      if (chatIcon) chatIcon.style.display = 'flex'
      if (closeIcon) closeIcon.style.display = 'none'
      this.dispatchEvent(new CustomEvent('pride-chat-close', { bubbles: true, composed: true }))
    }
  }

  _onMessage(e) {
    if (!this._iframeEl) return
    let allowedOrigin = ''
    try {
      allowedOrigin = new URL(this.src).origin
    } catch {
      allowedOrigin = ''
    }
    if (e.origin !== allowedOrigin || e.source !== this._iframeEl.contentWindow) return
    if (!e.data || typeof e.data !== 'object' || e.data.type !== 'relevant' || typeof e.data.content !== 'string') return
    try {
      localStorage.setItem('content', e.data.content)
    } catch (err) {
      console.warn('PRIDE Chat: Could not store relevant document content', err)
    }
    const relevantUrl = `${this.baseUrl}/relevant`
    window.open(relevantUrl, '_blank')
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>${CHAT_CSS}</style>
      <div class="pride-chat-host">
        <button type="button" class="popup-container ${this._isOpen ? 'is-open' : ''}" aria-label="Toggle PRIDE Assistant" title="${this._isOpen ? 'Close PRIDE Assistant' : 'Open PRIDE Assistant'}" aria-expanded="${this._isOpen}">
          <span class="icon-chat" style="display: ${this._isOpen ? 'none' : 'flex'};">
            ${CHAT_ICON_SVG}
          </span>
          <span class="icon-close" style="display: ${this._isOpen ? 'flex' : 'none'};">
            ${CLOSE_ICON_SVG}
          </span>
        </button>
        <div class="popup-chat ${this._isOpen ? 'is-open' : ''}" role="dialog" aria-label="PRIDE Assistant">
          <div class="popup-chat-body"></div>
        </div>
      </div>
    `

    const btn = this.shadowRoot.querySelector('.popup-container')
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault()
        this.toggle()
      })
    }

    if (this._isOpen) {
      this._ensureIframe()
    }
  }
}
