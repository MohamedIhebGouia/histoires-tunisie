import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchStories } from "../services/storiesApi";

/*
  Catalog (Accueil) amélioré :
  - Grand hero
  - Section "Mission" au centre avec texte à gauche et stats à droite
  - Bande CTA bleue avec bouton centré
  - Ensuite la grille des profils (id="profiles")
*/
export default function Catalog() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchStories();
        setStories(data);
      } catch (err) {
        console.error("Erreur lors du chargement des histoires:", err);
        setError("Impossible de charger les histoires. Réessayez plus tard.");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const heroImage = "https://globalgrasshopper.com/wp-content/uploads/2014/02/Sousse-1-1536x1014.jpg";

  return (
    <>
      {/* HERO — plus grand et aéré */}
      <section
        className="hero hero-large d-flex align-items-center"
        style={{ backgroundImage: `url(${heroImage})` }}
        role="banner"
        aria-label="Bannière Histoires de Réussite"
      >
        <div className="hero-overlay" />
        <div className="container hero-content text-center text-white">
          <h1 className="display-1 fw-bold hero-title" style={{ color:"white" }}>Histoires de Réussite Tunisiennes</h1>
          <p className="lead hero-lead mx-auto" style={{ maxWidth: 960 }}>
            Célébrons l'excellence tunisienne à travers les parcours exceptionnels de personnalités qui
            inspirent et façonnent l'avenir.
          </p>

          <div className="d-flex justify-content-center gap-3 mt-4">
            <a href="#profiles" className="btn btn-primary btn-lg px-4">
              Découvrir les profils →
            </a>
            <Link to="/about" className="btn btn-outline-light btn-lg px-4">
              Notre mission
            </Link>
          </div>

          <div className="hero-arrow mt-5" aria-hidden>
            <a href="#mission" className="arrow-down">
              ↓
            </a>
          </div>
        </div>
      </section>

      {/* MISSION SECTION — milieu de la page, ressemble à la photo n°2 */}
      <section id="mission" className="mission-section py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* LEFT: texte et bouton */}
            <div className="col-lg-7 mb-4 mb-lg-0">
              <h2 className="mission-title mb-3">Célébrer l'Excellence Tunisienne</h2>
              <p className="text-muted fs-5" style={{ lineHeight: 1.8 }}>
                Notre mission est de mettre en lumière les parcours exceptionnels de Tunisiens qui, par
                leur talent, leur travail et leur détermination, ont atteint les sommets de leur domaine.
                Ces histoires de réussite ne sont pas seulement des sources d'inspiration, mais aussi des preuves
                vivantes du potentiel immense que recèle la Tunisie.
              </p>

              <p className="text-muted fs-5" style={{ lineHeight: 1.8 }}>
                À travers cette plateforme, nous souhaitons créer un pont entre les générations, permettant
                aux jeunes Tunisiens de s'identifier à des modèles de réussite tangibles et accessibles.
              </p>

              <Link to="/about" className="btn btn-primary mt-3">
                En savoir plus →
              </Link>
            </div>

            {/* RIGHT: statistiques dans des boîtes */}
            <div className="col-lg-5">
              <div className="stats-grid">
                <div className="stat-box">
                  <div className="stat-number">5+</div>
                  <div className="stat-label">PERSONNALITÉS</div>
                </div>

                <div className="stat-box">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">ANNÉES D'EXPÉRIENCE</div>
                </div>

                <div className="stat-box">
                  <div className="stat-number">1000+</div>
                  <div className="stat-label">VIES INSPIRÉES</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND — bande pleine, centré */}
      <section className="cta-band text-center text-white py-5">
        <div className="container">
          <h3 className="mb-2">Inspirez-vous de leur parcours</h3>
          <p className="mb-4 text-light" style={{ maxWidth: 720, margin: "0 auto" }}>
            Découvrez comment ces personnalités remarquables ont transformé leurs rêves en réalité.
          </p>
          <a href="#profiles" className="btn btn-white-outline btn-lg">
            Explorer les profils
          </a>
        </div>
      </section>

      {/* PROFILES (grid), ancre id="profiles" */}
      <section id="profiles" className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h2 className="mb-0">Histoires remarquables</h2>
            <small className="text-muted">Parcourez les profils et découvrez leur parcours</small>
          </div>
        </div>

        {loading && (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status" />
            <div className="mt-2">Chargement...</div>
          </div>
        )}

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="row">
            {stories.map((s) => (
              <div key={s.id} className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <img src={s.coverImage} className="card-img-top" alt={`${s.name} cover`} />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{s.name}</h5>
                    <p className="card-subtitle text-muted mb-2">{s.role}</p>
                    <p className="card-text">{s.excerpt}</p>

                    <div className="mt-auto d-flex justify-content-between align-items-center">
                      <Link to={`/story/${s.id}`} className="btn btn-primary btn-sm">
                        Voir les détails
                      </Link>
                      <img
                        src={s.avatarImage}
                        alt={`${s.name} avatar`}
                        className="rounded-circle"
                        style={{ width: 48, height: 48, objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}