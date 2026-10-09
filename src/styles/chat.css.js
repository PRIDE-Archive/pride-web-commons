/**
 * Styles for PRIDE Assistant floating chat widget and popup window
 */
export const CHAT_CSS = `
:host {
  all: initial;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.pride-chat-host {
  position: relative;
}

/* Floating round chat button */
.popup-container {
  position: fixed;
  right: 30px;
  bottom: 80px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #5BC0BE;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18);
  cursor: pointer;
  border: none;
  outline: none;
  padding: 0;
  z-index: 10000;
  transition: transform .25s ease, box-shadow .25s ease, background-color .25s ease;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

.popup-container:hover {
  background-color: #4eb0ae;
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.26);
}

.popup-container:active {
  transform: scale(0.95);
}

.popup-container:focus-visible {
  outline: 3px solid #205493;
  outline-offset: 3px;
}

.icon-chat,
.icon-close {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform .2s ease;
}

.popup-container.is-open .icon-close {
  transform: rotate(90deg);
}

/* Popup window containing chatbot iframe */
.popup-chat {
  position: fixed;
  right: 30px;
  bottom: 155px;
  width: 380px;
  height: 520px;
  max-width: calc(100vw - 40px);
  max-height: calc(100vh - 180px);
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.12);
  z-index: 10001;
  display: flex;
  flex-direction: column;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: translateY(20px) scale(0.96);
  transition: opacity .25s ease, transform .25s ease, visibility .25s ease;
}

.popup-chat.is-open {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translateY(0) scale(1);
}

.popup-chat-body {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #ffffff;
}

.chat-iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}

/* Mobile responsive layout */
@media (max-width: 480px) {
  .popup-container {
    right: 16px;
    bottom: 60px;
    width: 52px;
    height: 52px;
  }

  .popup-chat {
    right: 12px;
    left: 12px;
    width: auto;
    max-width: none;
    bottom: 125px;
    height: 70vh;
    max-height: calc(100vh - 145px);
    border-radius: 10px;
  }
}
`
