import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Favorites from "./components/Favorites";
import { FavoritesProvider } from "./components/FavoritesContext"; // Importamos el proveedor de contexto

const App = () => {
  return (
    <div>
      <Navbar />

      <FavoritesProvider>
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/favoritos" element={<Favorites />} />
        </Routes>
      </FavoritesProvider>
      
    </div>
  );
};

export default App;
