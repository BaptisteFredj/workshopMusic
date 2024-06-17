function ArtistCard({ artists }) {
  return (
    <>
      <section>
        <figure>
          <img src={artists.imgSrc} alt={artists.artistName} />
          <figcaption>
            <div className="card-content">
              <h2>{artists.artistName}</h2>
              <p>{artists.date}</p>
              <p>{artists.dayTime === "jour" ? "☀️" : "🌛"}</p>
              <button>
                <p>{artists.price} €</p>
              </button>
            </div>
          </figcaption>
        </figure>
      </section>
    </>
  );
}

export default ArtistCard;
