import artistsList from "./components/artists";
import ArtistCard from "./components/ArtistCard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main>
        <ArtistCard artists={artistsList[0]} />
        <Footer />
      </main>
    </>
  );
}

export default App;
