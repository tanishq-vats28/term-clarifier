import React, { useState } from "react";
import DefinitionCard from "./components/DefinitionCard.jsx";
import Loader from "./components/Loader.jsx";

const App = () => {
  const [term, setTerm] = useState("");
  const [definition, setDefinition] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchDefinition = async () => {
    if (!term.trim()) return;

    setLoading(true);
    setError("");
    setDefinition(null);

    try {
      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${term}`
      );
      if (!res.ok) throw new Error("Term not found");
      const data = await res.json();
      const firstMeaning = data[0]?.meanings[0];
      const def = firstMeaning?.definitions[0]?.definition;
      const synonyms = firstMeaning?.definitions[0]?.synonyms || [];

      setDefinition({ term, def, synonyms });
    } catch (err) {
      setError(
        err.message === "Term not found"
          ? "Term not found!"
          : "Network error. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1>Term Clarifier</h1>
      <input
        type="text"
        placeholder="Type a term (e.g. photosynthesis)..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button onClick={fetchDefinition}>Submit</button>

      {loading && <Loader />}
      {error && <p className="error">{error}</p>}
      {definition && <DefinitionCard data={definition} />}
    </div>
  );
};

export default App;
