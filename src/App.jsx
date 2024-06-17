
import NavBar from "./components/NavBar";
import artistsList from "./components/artists";
import ArtistCard from "./components/ArtistCard";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <main>
        <NavBar />
        <ArtistCard artists={artistsList[0]} />
        <Footer />
      </main>
    </>
  );

}

export default App;
