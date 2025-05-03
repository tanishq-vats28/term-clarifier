import React from "react";

const DefinitionCard = ({ data }) => {
  const { term, def, synonyms } = data;

  const highlightedDefinition = def.split(" ").map((word, i) => {
    const cleanWord = word.replace(/[.,!?]/g, "").toLowerCase();
    return synonyms.includes(cleanWord) ? (
      <span key={i} className="synonym">
        {word}{" "}
      </span>
    ) : (
      <span key={i}>{word} </span>
    );
  });

  return (
    <div className="card">
      <h3>{term}</h3>
      <p>{highlightedDefinition}</p>
      {synonyms.length > 0 && (
        <p>
          <strong>Synonyms:</strong> {synonyms.join(", ")}
        </p>
      )}
    </div>
  );
};

export default DefinitionCard;
