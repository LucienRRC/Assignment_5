export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-box">
      <label htmlFor="breed-search">Search Breed:</label>
      <input
        id="breed-search"
        type="text"
        placeholder="Type a breed name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
