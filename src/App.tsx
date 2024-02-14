import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Categories } from "./pages/Categories";
import { Genre } from "./pages/Genre";
import { Country } from "./pages/Country";
import { GenresOfCountry } from "./pages/GenresOfCountry";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route
            path="/categories/country/all/genres/:genre"
            element={<Genre />}
          />
          <Route
            path="/categories/country/:country/genres/all"
            element={<Country />}
          />
          <Route
            path="/categories/country/:country/genres/:genre"
            element={<GenresOfCountry />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
