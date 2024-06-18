export default function Panier({ Panier }) {
  return (
    <>
      <h1>Panier 8</h1>
      <ul>
        {Panier.map((artist) => (
          <li key={artist.artistName}>
            {artist.artistName} - {artist.price}€
          </li>
        ))}
      </ul>
      <p>{Panier.reduce((sum, artist) => sum + artist.price, 0)}€</p>
    </>
  );
}
/*  return (
    <>
      <h1>Panier - composant basket</h1>
      <ul>
        {basket.map((article) => (
          <li key={article.id}>
            {article.model} - {article.price}€
          </li>
        ))}
      </ul>
      <h2>
        Total : {basket.reduce((sum, product) => sum + product.price, 0)}€
      </h2>
    </>
  );
}*/
