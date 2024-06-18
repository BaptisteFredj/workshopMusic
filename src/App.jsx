import NavBar from "./components/NavBar";
import artistsList from "./components/artists";
import ArtistCard from "./components/ArtistCard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main>
        <NavBar />
        {artistsList.map((artist, index) => (
          <ArtistCard key={index} artist={artist} />
        ))}

        <Footer />
      </main>
    </>
  );
}

export default App;
