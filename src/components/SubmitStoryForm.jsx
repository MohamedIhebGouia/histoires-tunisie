import React, { useState } from "react";
import { submitSuggestion } from "../services/storiesApi";

/*
  Formulaire Bootstrap simple pour proposer une "success story".
  Utilise async/await + try/catch. Remplace submitSuggestion
  par une version Firestore plus tard si besoin.
*/
export default function SubmitStoryForm() {
  const [form, setForm] = useState({
    suggestedName: "",
    role: "",
    message: "",
    proposerName: "",
    email: "",
    youtube: "",
    imageUrl: ""
  });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  function validate() {
    if (!form.suggestedName.trim()) return "Veuillez indiquer le nom de la personne.";
    if (!form.email.includes("@")) return "Veuillez fournir une adresse e‑mail valide.";
    if (!form.message.trim()) return "Expliquez en quelques mots pourquoi ajouter cette histoire.";
    return null;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");
    const err = validate();
    if (err) {
      setErrorMsg(err);
      return;
    }
    try {
      setLoading(true);
      await submitSuggestion({
        suggestedName: form.suggestedName.trim(),
        role: form.role.trim(),
        message: form.message.trim(),
        proposerName: form.proposerName.trim(),
        email: form.email.trim(),
        youtube: form.youtube.trim(),
        imageUrl: form.imageUrl.trim(),
        createdAt: new Date().toISOString()
      });
      setSuccessMsg("Merci — votre suggestion a bien été envoyée.");
      setForm({
        suggestedName: "",
        role: "",
        message: "",
        proposerName: "",
        email: "",
        youtube: "",
        imageUrl: ""
      });
    } catch (err) {
      console.error(err);
      setErrorMsg("Une erreur s'est produite lors de l'envoi. Réessayez plus tard.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="mt-4 mb-4">
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Proposez une success story</h5>
          <p className="text-muted small">
            Vous connaissez une personne tunisienne dont le parcours mérite d'être partagé ? Proposez-la ici.
          </p>

          {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
          {successMsg && <div className="alert alert-success">{successMsg}</div>}

          <form onSubmit={handleSubmit} noValidate>
            <div className="row g-2">
              <div className="col-md-6">
                <label className="form-label">Nom de la personne proposée *</label>
                <input
                  name="suggestedName"
                  className="form-control"
                  value={form.suggestedName}
                  onChange={handleChange}
                  placeholder="Ex : Boubaker Siala"
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Rôle / titre (court)</label>
                <input
                  name="role"
                  className="form-control"
                  value={form.role}
                  onChange={handleChange}
                  placeholder="Ex : Entrepreneur / Investisseur"
                />
              </div>

              <div className="col-12">
                <label className="form-label">Pourquoi proposer ce profil ? *</label>
                <textarea
                  name="message"
                  className="form-control"
                  rows="3"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Expliquez en quelques lignes..."
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Votre nom (optionnel)</label>
                <input name="proposerName" className="form-control" value={form.proposerName} onChange={handleChange} />
              </div>

              <div className="col-md-6">
                <label className="form-label">Votre e‑mail *</label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Url YouTube (optionnel)</label>
                <input name="youtube" className="form-control" value={form.youtube} onChange={handleChange} />
              </div>

              <div className="col-md-6">
                <label className="form-label">Url d'image (optionnel)</label>
                <input name="imageUrl" className="form-control" value={form.imageUrl} onChange={handleChange} />
              </div>
            </div>

            <div className="mt-3 d-flex justify-content-end">
              <button
                className="btn btn-outline-secondary me-2"
                type="reset"
                onClick={() =>
                  setForm({
                    suggestedName: "",
                    role: "",
                    message: "",
                    proposerName: "",
                    email: "",
                    youtube: "",
                    imageUrl: ""
                  })
                }
              >
                Effacer
              </button>

              <button className="btn btn-primary" type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" />
                    Envoi...
                  </>
                ) : (
                  "Envoyer la suggestion"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
} 