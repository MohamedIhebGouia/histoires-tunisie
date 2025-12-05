import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchStoryById } from "../services/storiesApi";

function getYouTubeEmbedUrl(url) {
  if (!url || typeof url !== "string") return null;

  // Patterns courants :
  // - https://www.youtube.com/watch?v=VIDEO_ID
  // - https://youtu.be/VIDEO_ID
  // - https://www.youtube.com/embed/VIDEO_ID
  try {
    const u = new URL(url);
    const host = u.hostname.toLowerCase();

    // youtu.be short link
    if (host === "youtu.be") {
      const id = u.pathname.slice(1);
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }

    // youtube.com
    if (host === "www.youtube.com" || host === "youtube.com" || host.endsWith(".youtube.com")) {
      // /watch?v=ID
      if (u.searchParams.has("v")) {
        const id = u.searchParams.get("v");
        return id ? `https://www.youtube.com/embed/${id}` : null;
      }
      // /embed/ID or other path
      const pathParts = u.pathname.split("/").filter(Boolean);
      const embedIndex = pathParts.indexOf("embed");
      if (embedIndex !== -1 && pathParts.length > embedIndex + 1) {
        const id = pathParts[embedIndex + 1];
        return id ? `https://www.youtube.com/embed/${id}` : null;
      }
    }

    return null;
  } catch (err) {
    // si ce n'est pas une URL valide
    return null;
  }
}

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
        // Si vos ids sont numériques dans storiesApi, gardez Number(id).
        // Si vous migrez vers Firestore (ids string), enlevez Number()
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

  // Générer l'URL embed si story.youtube existe
  const embedUrl = story && story.youtube ? getYouTubeEmbedUrl(story.youtube) : null;

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
            <img
              src={story.coverImage}
              alt={`${story.name} cover`}
              className="w-100"
              style={{ maxHeight: 360, objectFit: "cover" }}
            />
          </div>

          <div className="d-flex align-items-start gap-3 mb-3">
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

          {/* Si vidéo YouTube valide : embed responsive */}
          {embedUrl && (
            <>
              <hr />
              <h5>Podcast / Vidéo</h5>
              <div className="ratio ratio-16x9 mb-3">
                <iframe
                  src={embedUrl}
                  title={`${story.name} - Podcast`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              {/* Lien direct vers la vidéo si l'embed ne fonctionne pas */}
              <p className="small text-muted">
                <a href={story.youtube} target="_blank" rel="noreferrer">
                  Ouvrir sur YouTube
                </a>
              </p>
            </>
          )}

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