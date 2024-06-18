import "../styles/Panier.css";
export default function Panier({ Panier }) {
  return (
    <>
      <section className="panier-content">
        <h3>Votre panier</h3>
        <ul>
          {Panier.map((artist) => (
            <li key={artist.artistName}>
              {artist.artistName} - {artist.price}€
            </li>
          ))}
          <li>
            Montant total de votre panier :{" "}
            {Panier.reduce((sum, artist) => sum + artist.price, 0)}€
          </li>
        </ul>
      </section>
    </>
  );
}
