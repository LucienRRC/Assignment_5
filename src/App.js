import "./styles.css";
import { useEffect, useState } from "react";

import SearchBar from "./SearchBar";
import CatBreedCard from "./CatBreedCard";

export default function App() {
  const [breeds, setBreeds] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBreeds();
  }, []);

  function fetchBreeds() {
    setLoading(true);
    setErrorMessage("");

    const url = "https://api.thecatapi.com/v1/breeds";
    console.log("Request URL:", url);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("API response:", data);
        setBreeds(data);
      })
      .catch((error) => {
        console.log("Fetch error:", error);
        setErrorMessage("Failed to load cat breeds.");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const filteredBreeds = breeds.filter((breed) => {
    return breed.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="App">
      <h1>Cat Breed Search App</h1>
      <p>Search cat breeds by name.</p>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {loading && <p>Loading...</p>}
      {errorMessage && <p>{errorMessage}</p>}

      <p>Total Results: {filteredBreeds.length}</p>

      <div className="breed-grid">
        {filteredBreeds.map((breed) => (
          <CatBreedCard key={breed.id} breed={breed} />
        ))}
      </div>
    </div>
  );
}
