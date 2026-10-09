const ICON_FONTS_ID = 'pride-web-commons-icon-fonts'
const ICON_FONTS_BASE = 'https://ebi.emblstatic.net/web_guidelines/EBI-Icon-fonts/v1.2'

const fontFace = (family) => `
@font-face {
  font-family: '${family}';
  src: url('${ICON_FONTS_BASE}/${family}/fonts/${family}.woff2') format('woff2'),
       url('${ICON_FONTS_BASE}/${family}/fonts/${family}.woff') format('woff'),
       url('${ICON_FONTS_BASE}/${family}/fonts/${family}.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}`

/**
 * Register the EBI icon fonts on the host document.
 *
 * @font-face rules declared inside a shadow root are not reliably honoured
 * across browsers, so the faces are registered on the document instead, where
 * every shadow tree can use them.
 */
export function ensureIconFonts() {
  if (typeof document === 'undefined' || document.getElementById(ICON_FONTS_ID)) return
  const style = document.createElement('style')
  style.id = ICON_FONTS_ID
  style.textContent = fontFace('EBI-Generic') + fontFace('EBI-Functional')
  document.head.appendChild(style)
}
