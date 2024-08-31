import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import { ThemeContext, ThemeProvider } from "././context/ThemeContext";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Router>
      <div className={`App ${theme}`}>
        <header>
          <button className="theme-toggle-button" onClick={toggleTheme}>
            {theme === "light" ? (
              <>
                <i className="icon fas fa-moon"></i>
              </>
            ) : (
              <>
                <i className="icon fas fa-sun"></i>
              </>
            )}
          </button>
          <h1>Movie Search App</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/movie/:id" element={<MovieDetailsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
