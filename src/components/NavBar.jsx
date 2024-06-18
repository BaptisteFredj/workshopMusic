import '../styles/NavBar.css';
import pageLogo from "../assets/logo-page.png";

function NavBar() {
    return (
        <>
            <nav className="navBar">
                <div className="logo">
                    <img src={pageLogo} alt="logo" />
                </div>
                <ul className="navList">
                    <li>
                        <a href="">Evenements</a>
                    </li>
                    <li>
                        <a href="">Billetterie</a>
                    </li>
                    <li>
                        <a href="">Panier</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default NavBar;