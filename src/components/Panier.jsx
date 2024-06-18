export default function Panier({ Panier }) {
  return (
    <>
      <h3>Panier {Panier.reduce((sum, artist) => sum + artist.price, 0)}€</h3>
      <ul>
        {Panier.map((artist) => (
          <li key={artist.artistName}>
            {artist.artistName} - {artist.price}€
          </li>
        ))}
      </ul>
    </>
  );
}
