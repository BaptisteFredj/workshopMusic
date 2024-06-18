import '../styles/ArtistCard.css';

function ArtistCard({ artist }) {
  return (
    <>
      <section>
        <figure>
          <img src={artist.imgSrc} alt={artist.artistName} />
          <figcaption>
            <div className="card-content">
              <h2>{artist.artistName}</h2>
              <p>{artist.date}</p>
              <p>{artist.dayTime === "jour" ? "☀️" : "🌛"}</p>
              <button>
                <p>{artist.price} €</p>
              </button>
            </div>
          </figcaption>
        </figure>
      </section>
    </>
  );
}

export default ArtistCard;
