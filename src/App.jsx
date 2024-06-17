import artistsList from "./components/artists";
import ArtistCard from "./components/ArtistCard";

function App() {
  return (
    <>
      <main>
        <ArtistCard artists={artistsList[0]} />
      </main>
    </>
  );
}

export default App;
