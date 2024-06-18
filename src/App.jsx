import NavBar from "./components/NavBar";
import artistsList from "./components/artists";
import ArtistCard from "./components/ArtistCard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main>

        <NavBar />

        <div>

          {artistsList.map((artist, index) => (
            <ArtistCard key={index} artist={artist} />
          ))}

        </div>

        <Footer />

      </main>
    </>
  );
}

export default App;
