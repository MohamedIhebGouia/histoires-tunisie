import React from "react";

/*
  Page À propos améliorée :
  - Titre + paragraphe d'introduction
  - Image mise en valeur au centre (section "featured")
  - Galerie de photos (portraits / couvertures) avec légendes
  - Conservation des styles Bootstrap pour la grille
*/

/* Images placeholders : vous pouvez remplacer les URLs par des images locales (public/) */
const FEATURE_IMAGE = "https://www.worldtravelguide.net/wp-content/uploads/2017/03/shu-Tunisia-SidiBouSaid-760300645-1440x823.jpg";
const GALLERY = [
  { id: 1, name: "Boubaker Siala", src: "https://picsum.photos/seed/boubaker-about/600/420" },
  { id: 2, name: "Karim Bguir", src: "https://picsum.photos/seed/karim-about/600/420" },
  { id: 3, name: "Asma Ben Hmida", src: "https://picsum.photos/seed/asma-about/600/420" },
  { id: 4, name: "Ameny Mansouri", src: "https://picsum.photos/seed/ameny-about/600/420" },
  { id: 5, name: "Anis Kallel", src: "https://picsum.photos/seed/anis-about/600/420" }
];

export default function About() {
  return (
    <section className="about-page">
      {/* HERO simple en haut de la page */}
      <div className="about-hero py-5 bg-light">
        <div className="container">
          <h1 className="mb-3">À propos</h1>
          <p className="lead text-muted" style={{ maxWidth: 920 }}>
            Ce projet simple présente des « Histoires de réussite » tunisiennes. L'objectif est pédagogique :
            apprendre React, les hooks, le routage, et la gestion asynchrone des données dans une interface légère
            inspirée d'une SPA. Nous mettons en lumière des parcours inspirants et fournissons des contenus
            accessibles pour la communauté.
          </p>
        </div>
      </div>

      {/* SECTION FEATURED — image large centrée (comme demandé, "au milieu de la page") */}
      <div className="about-feature py-5">
        <div className="container d-flex flex-column align-items-center">
          <div className="featured-card shadow-sm rounded overflow-hidden">
            <img src={FEATURE_IMAGE} alt="Vue illustrant les réussites tunisiennes" className="w-100" />
          </div>

          <div className="mt-4 text-center" style={{ maxWidth: 900 }}>
            <h2 className="mb-2">Célébrer les parcours qui inspirent</h2>
            <p className="text-muted">
              À travers des portraits, des récits et des exemples concrets, nous souhaitons inspirer et rendre
              accessibles des modèles valorisants. Vous pouvez cliquer sur chaque profil pour en savoir plus.
            </p>
          </div>
        </div>
      </div>



      {/* Petite section finale d'appel à l'action */}
      <div className="about-cta py-5">
        <div className="container text-center">
          <h4 className="mb-2">Vous voulez contribuer ?</h4>
          <p className="text-muted mb-3" style={{ maxWidth: 760, margin: "0 auto" }}>
            Si vous connaissez un parcours tunisien inspirant, contactez-nous pour ajouter un nouveau profil.
          </p>
          <a href="mailto:contact@reussites-tunisiennes.tn" className="btn btn-primary btn-lg">
            Nous contacter
          </a>
        </div>
      </div>
    </section>
  );
}