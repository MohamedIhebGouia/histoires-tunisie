// import { fetchStories } from "../services/storiesApi.firebase";
useEffect(() => {
  async function load() {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchStories(); // now from Firestore
      setStories(data);
    } catch (err) {
      setError("Impossible de charger les histoires.");
    } finally {
      setLoading(false);
    }
  }
  load();
}, []);