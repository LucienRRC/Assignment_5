import { useState } from "react";

export default function CatBreedCard({ breed }) {
  const [selected, setSelected] = useState(false);

  const { name, origin, temperament, life_span, description, weight } = breed;

  return (
    <div
      className={selected ? "breed-card selected-card" : "breed-card"}
      onClick={() => setSelected(!selected)}
    >
      <h3>{name}</h3>
      <p>
        <strong>Origin:</strong> {origin}
      </p>
      <p>
        <strong>Temperament:</strong> {temperament}
      </p>
      <p>
        <strong>Life Span:</strong> {life_span} years
      </p>
      <p>
        <strong>Weight:</strong> {weight.metric} kg
      </p>
      <p>{description}</p>
    </div>
  );
}
