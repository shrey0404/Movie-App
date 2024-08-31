import React, { useState } from "react";
import SearchBar from "./components/SearchBar";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <header>
        <h1>Movie Search App</h1>
      </header>
      <main>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        {/* Movie results will go here */}
      </main>
    </div>
  );
}

export default App;
