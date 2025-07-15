import '../styles/Footer.css'

export default function Footer() {
    const currentYear = new Date().getFullYear()
    
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Section Contact rapide */}
                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>📧 comaravel.narayanasamy@gmail.com</p>
                    <p>📱 +33 6 95 19 14 35</p>
                    <p>📍 Ris-Orangis, France</p>
                </div>

                {/* Réseaux sociaux */}
                <div className="footer-section">
                    <h3>Suivez-moi</h3>
                    <div className="social-links">
                        <a href="https://github.com/Noblesse18" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/narayanasamy-comaravel-28b66232a/" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </div>
                </div>

                {/* Navigation rapide */}
                <div className="footer-section">
                    <h3>Navigation</h3>
                    <nav className="footer-nav">
                        <a href="#accueil">Accueil</a>
                        <a href="#about">À propos</a>
                        <a href="#projets">Projets</a>
                        <a href="#contact">Contact</a>
                    </nav>
                </div>

                {/* Informations légales */}
                <div className="footer-section">
                    <h3>Ressources</h3>
                    <div className="footer-links">
                        <a href="/cv.pdf" target="_blank">Télécharger CV</a>
                        <a href="#mentions-legales">Mentions légales</a>
                        <a href="#privacy">Confidentialité</a>
                    </div>
                </div>
            </div>

            {/* Ligne de copyright */}
            <div className="footer-bottom">
                <p>&copy; {currentYear} Comaravel Narayanasamy. Tous droits réservés.</p>
                <p>Développé avec React+vite et Beaucoup de Patience</p>
            </div>
        </footer>
    )
}