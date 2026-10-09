export const FOOTER_CSS = `
:host {
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  width: 100%;
  color: #d1d5db;
}

*, *::before, *::after {
  box-sizing: inherit;
}

/* ==========================================================
   ELIXIR Banner
   ========================================================== */
.elixir-banner {
  background-color: #374151;
  color: #f3f4f6;
  padding: 12px 24px;
  font-size: 14px;
  border-top: 1px solid #4b5563;
}

.elixir-container {
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

.elixir-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.elixir-badge {
  background: #f97316;
  color: #ffffff;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 3px 8px;
  border-radius: 4px;
}

.elixir-text {
  font-size: 13.5px;
  color: #e5e7eb;
}

.elixir-link {
  color: #93c5fd;
  text-decoration: underline;
  font-size: 13px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.elixir-link:hover {
  color: #bfdbfe;
}

/* ==========================================================
   EMBL-EBI Global Footer
   ========================================================== */
.ebi-global-footer {
  background-color: #1f2937;
  color: #9ca3af;
  padding: 48px 24px 24px;
  font-size: 13px;
}

.footer-container {
  max-width: 1600px;
  margin: 0 auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 32px;
  margin-bottom: 40px;
}

.footer-col h4 {
  color: #f3f4f6;
  font-size: 14px;
  font-weight: 700;
  margin: 0 0 16px 0;
  letter-spacing: 0.3px;
}

.footer-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-links a {
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.15s ease;
  line-height: 1.4;
}

.footer-links a:hover {
  color: #5bc0be;
}

.footer-meta {
  border-top: 1px solid #374151;
  padding-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.meta-links {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.meta-links a {
  color: #9ca3af;
  text-decoration: none;
}

.meta-links a:hover {
  color: #ffffff;
}

.copyright {
  color: #6b7280;
  font-size: 12px;
}

/* Responsive Footer */
@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 640px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .elixir-container {
    flex-direction: column;
    align-items: flex-start;
  }
  .footer-meta {
    flex-direction: column;
    align-items: flex-start;
  }
}
`;
