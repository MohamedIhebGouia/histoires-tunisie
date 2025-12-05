async function handleAddStory(formData, file) {
  try {
    setSaving(true);
    const newId = await addStory(formData, file);
    // feedback utilisateur
    setSuccess("Profil ajouté avec succès.");
    navigate(`/story/${newId}`);
  } catch (err) {
    console.error(err);
    setError("Impossible d'ajouter le profil pour le moment.");
  } finally {
    setSaving(false);
  }
}