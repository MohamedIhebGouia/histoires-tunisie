import React, { useEffect, useState, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const navRef = useRef(null); // référence vers la balise <nav> pour cibler les éléments

  useEffect(() => {
    // Ajoute un listener pour basculer la classe scrolled après un certain scroll
    function onScroll() {
      const shouldBeScrolled = window.scrollY > 60; // seuil en px
      setScrolled(shouldBeScrolled);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    // vérifier l'état initial (utile si on refresh non en haut)
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Applique la couleur noire spécifiquement aux éléments demandés.
    // On utilise setProperty avec 'important' pour s'assurer d'outrepasser
    // tout style CSS global utilisant !important.
    const navNode = navRef.current;
    if (!navNode) return;

    // 1) Brand text ("Réussites Tunisiennes")
    const brandEl = navNode.querySelector(".brand-text");
    if (brandEl) {
      brandEl.style.setProperty("color", "#000000", "important");
    }

    // 2) Liens de navigation (Accueil, À propos)
    const navLinks = navNode.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      // Ne change que le texte (couleur)
      link.style.setProperty("color", "#000000", "important");
    });

    // Remarque : si vous ajoutez d'autres éléments dans la navbar que vous
    // ne voulez pas en noir, ajustez la sélection ci‑dessous.
  }, []); // exécute une fois au montage

  // Calculer classes : si on est sur la home et pas scrolled -> transparent,
  // sinon header solide (background blanc)
  const headerClass = isHome && !scrolled ? "header-transparent" : "header-solid";

  // fermer le navbar collapse lors du clic sur un lien
  function handleNavLinkClick() {
    setExpanded(false);
    // forcer la collapse bootstrap si besoin (le toggler natif gère).
    // Ici on gère juste l'état pour l'icône du toggler si on veut.
  }

  return (
    <header className={`site-header ${headerClass} ${scrolled ? "is-scrolled" : ""}`}>
      <nav ref={navRef} className="navbar container navbar-expand-lg align-items-center">
        <NavLink to="/" className="navbar-brand d-flex align-items-center" onClick={handleNavLinkClick}>
          {/* Petit logo SVG pour garder tout dans un fichier */}
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="me-2">
            <path d="M12 2l2.7 5.5L20 9l-4 3.8L17.5 20 12 16.8 6.5 20 8 12.8 4 9l5.3-1.5L12 2z" fill="#1060A8" />
          </svg>
          <span className="brand-text">Réussites Tunisiennes</span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          aria-expanded={expanded}
          aria-label="Ouvrir le menu"
          onClick={() => setExpanded((v) => !v)}
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item">
              <NavLink to="/" end className="nav-link" onClick={handleNavLinkClick}>
                Accueil
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" className="nav-link" onClick={handleNavLinkClick}>
                À propos
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}