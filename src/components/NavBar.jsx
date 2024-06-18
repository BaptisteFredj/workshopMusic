import "../styles/NavBar.css";

function NavBar({ Panier }) {
  return (
    <>
      <nav className="navBar">
        <div className="logo">
          <img
            src="https://static.vecteezy.com/ti/vecteur-libre/p1/10618648-musique-de-logo-illustration-de-notes-de-musique-vectoriel.jpg"
            alt="logo"
          />
        </div>
        <ul className="navLinks">
          <li>
            <a href="">Evenements</a>
          </li>
          <li>
            <a href="">Billetterie</a>
          </li>
          <li>
            <a href="">
              🧺 : {Panier.reduce((sum, artist) => sum + artist.price, 0)}€
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
