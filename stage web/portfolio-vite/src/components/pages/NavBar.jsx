import '../styles/NavBar.css'


export default function Navbar() {
    return (
        <section id="navbar-section">
        <nav className="navmain">
            <ul className="navlist">
                <li><a href="#Home">Acceuil</a></li>
                <li><a href="#About">A Propos de moi</a></li>
                <li><a href="#Parcours">Parcous</a></li>
                <li><a href="#Projet">Projet</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="">CV</a></li>
            </ul>
        </nav>
        </section>
    )
}