import NavBar from "./components/NavBar";
import artistsList from "./components/artists";
import ArtistCard from "./components/ArtistCard";
import Footer from "./components/Footer";
import FilterBar from "./components/FilterBar";
import Panier from "./components/Panier";
import { useState } from "react";

function App() {
  const [panier, setPanier] = useState([]);

  return (
    <>
      <main>
        <NavBar Panier={panier} />
        <FilterBar />
        <div>
          {artistsList.map((artist, index) => (
            <ArtistCard
              key={index}
              artist={artist}
              tools={{ panier, setPanier }}
            />
          ))}
        </div>
        <Panier Panier={panier} />
      </main>
      <Footer />
    </>
  );
}

export default App;
