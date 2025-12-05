import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer-compact bg-white text-dark pt-5">
      <div className="container">
        <div className="row gy-4 align-items-start">
          {/* LEFT COLUMN: Logo + description + socials + contact */}
          <div className="col-md-7">
            <div className="d-flex align-items-center mb-3">
              {/* Simple star logo (svg) */}
              <svg className="me-2" width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 2l2.7 5.5L20 9l-4 3.8L17.5 20 12 16.8 6.5 20 8 12.8 4 9l5.3-1.5L12 2z" fill="#0b6ea6" />
              </svg>
              <h5 className="mb-0 fw-bold">Réussites Tunisiennes</h5>
            </div>

            <p className="text-muted mb-3" style={{ maxWidth: 560 }}>
              Célébrons l'excellence tunisienne à travers les parcours exceptionnels de personnalités qui inspirent et façonnent l'avenir.
            </p>

            <div className="mb-3">
              <h6 className="mb-2">Suivez-nous</h6>
              <div className="d-flex gap-2">
                {/* Social buttons: accessible labels */}
                <a className="social-btn" href="https://www.facebook.com/" aria-label="Facebook" title="Facebook">
                  {/* simple Facebook SVG */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 5.03 3.66 9.2 8.44 9.94v-7.04H8.1V12.1h2.33V9.88c0-2.3 1.37-3.57 3.47-3.57.99 0 2.03.18 2.03.18v2.24h-1.14c-1.12 0-1.47.7-1.47 1.41V12.1h2.5l-.4 2.88h-2.1v7.03C18.34 21.27 22 17.1 22 12.07z" fill="#334155"/>
                  </svg>
                </a>

                <a className="social-btn" href="https://x.com/" aria-label="X" title="X / Twitter">
                  {/* simple X icon */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M20 6.2c-.6.3-1.2.5-1.9.6.7-.4 1.3-1 1.6-1.7-.6.4-1.4.6-2.2.8C16.7 5 15.8 4.6 15 4.6c-1.6 0-2.8 1.3-2.8 2.9 0 .2 0 .4.1.6-2.3-.1-4.4-1.2-5.8-2.8-.2.4-.3.8-.3 1.3 0 1 .5 1.9 1.3 2.5-.5 0-1-.1-1.4-.4v.1c0 1.5 1.1 2.8 2.6 3.1-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.7 2.3 3.2 2.3-1.1.9-2.4 1.5-3.9 1.5h-.8c1.4.9 3.1 1.4 4.9 1.4 5.9 0 9.2-4.9 9.2-9.2v-.4c.7-.5 1.3-1.2 1.8-2z" fill="#334155"/>
                  </svg>
                </a>

                <a className="social-btn" href="https://www.linkedin.com/" aria-label="LinkedIn" title="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M4.98 3.5a2.5 2.5 0 11-.001 5.001A2.5 2.5 0 014.98 3.5zM3 8.98h3.96V21H3V8.98zM9.5 9h3.79v1.59h.05c.53-1 1.82-2.07 3.75-2.07 4.01 0 4.75 2.64 4.75 6.07V21H19v-5.46c0-1.3 0-2.97-1.81-2.97-1.81 0-2.09 1.42-2.09 2.87V21H9.5V9z" fill="#334155"/>
                  </svg>
                </a>

                <a className="social-btn" href="https://www.instagram.com/" aria-label="Instagram" title="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.1a4.9 4.9 0 100 9.8 4.9 4.9 0 000-9.8zm4.8-2.3a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" fill="#334155"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="contact-lines mt-2">
              <div className="d-flex align-items-center mb-2 text-muted">
                {/* envelope icon */}
                <svg className="me-2" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M3 6.5v11A2.5 2.5 0 005.5 20h13a2.5 2.5 0 002.5-2.5v-11A2.5 2.5 0 0018.5 4h-13A2.5 2.5 0 003 6.5z" stroke="#94a3b8" strokeWidth="1" fill="none"/>
                  <path d="M21 6l-9 6L3 6" stroke="#94a3b8" strokeWidth="1" fill="none"/>
                </svg>
                <a className="text-muted" href="mailto:contact@reussites-tunisiennes.tn">contact@reussites-tunisiennes.tn</a>
              </div>

              <div className="d-flex align-items-center text-muted">
                {/* location icon */}
                <svg className="me-2" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 2C8 2 5 5 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-4-3-7-7-7z" stroke="#94a3b8" strokeWidth="1" fill="none"/>
                  <circle cx="12" cy="9" r="2.3" fill="#94a3b8"/>
                </svg>
                <span className="text-muted">Tunis, Tunisie</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Liens Rapides */}
          <div className="col-md-5">
            <h6 className="fw-bold">Liens Rapides</h6>
            <ul className="list-unstyled quick-links mt-3">
              <li><Link to="/" className="text-dark">Accueil</Link></li>
              <li><a href="#profiles" className="text-dark">Nos Profils</a></li>
              <li><Link to="/about" className="text-dark">À propos</Link></li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <hr className="mt-4 mb-3" />

        {/* Bottom row: copyright left, GitHub right */}
        <div className="d-flex justify-content-between align-items-center pb-3">
          <div className="small text-muted">© {new Date().getFullYear()} Réussites Tunisiennes. Tous droits réservés.</div>

          <div>
            <a className="d-flex align-items-center text-muted small" href="https://github.com" target="_blank" rel="noreferrer">
              {/* GitHub icon */}
              <svg className="me-2" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 .5C5.7.5.9 5.3.9 11.6c0 4.6 3 8.5 7.2 9.9.5.1.6-.2.6-.4v-1.4c-2.9.6-3.5-1.3-3.5-1.3-.4-1-1-1.2-1-1.2-.8-.6.1-.6.1-.6.9.1 1.4.9 1.4.9.8 1.4 2 1 2.5.8.1-.6.3-1 .6-1.3-2.3-.3-4.7-1.1-4.7-5 0-1.1.4-2 1.1-2.8-.1-.3-.5-1.5.1-3.2 0 0 .9-.3 3 .9a10.1 10.1 0 015.5 0c2.1-1.2 3-.9 3-.9.6 1.7.2 2.9.1 3.2.7.8 1.1 1.7 1.1 2.8 0 3.9-2.4 4.7-4.7 5 .3.3.6.8.6 1.7v2.5c0 .3.1.5.7.4 4.2-1.4 7.2-5.3 7.2-9.9C23.1 5.3 18.3.5 12 .5z" fill="#334155"/>
              </svg>
              Code source sur GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}