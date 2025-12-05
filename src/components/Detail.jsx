import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchStoryById } from "../services/storiesApi";

/*
  Detail :
  - utilise useParams pour lire l'id de la route
  - charge la donnée correspondante et gère loading / error
  - propose un bouton "retour" qui utilise useNavigate
*/
export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchStoryById(Number(id));
        if (!data) {
          setError("Histoire introuvable.");
          return;
        }
        setStory(data);
      } catch (err) {
        console.error("Erreur lors du chargement de l'histoire:", err);
        setError("Impossible de charger l'histoire. Réessayez plus tard.");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id]);

  return (
    <section className="container py-4">
      <button className="btn btn-outline-secondary mb-3" onClick={() => navigate(-1)}>
        ← Retour
      </button>

      {loading && (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status" />
          <div className="mt-2">Chargement...</div>
        </div>
      )}

      {error && <div className="alert alert-danger">{error}</div>}

      {!loading && !error && story && (
        <article>
          {/* Bannière / couverture */}
          <div className="mb-4 rounded overflow-hidden shadow-sm">
            <img src={story.coverImage} alt={`${story.name} cover`} className="w-100" style={{ maxHeight: 320, objectFit: "cover" }} />
          </div>

          <div className="d-flex align-items-start gap-3">
            <img
              src={story.avatarImage}
              alt={`${story.name} avatar`}
              className="rounded-circle border"
              style={{ width: 120, height: 120, objectFit: "cover" }}
            />
            <div>
              <h2 className="mb-1">{story.name}</h2>
              <p className="text-muted mb-2">{story.role}</p>
              <p>{story.bio}</p>
            </div>
          </div>

          <hr />

          <h5>Points clés</h5>
          <ul>
            {story.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>

          <p className="text-muted small">Source: synthèse publique pour usage pédagogique.</p>
        </article>
      )}
    </section>
  );
}