import '../styles/Profile.css'

import image1 from '../images/img-solo.jpeg'
export default function Profile(){
    return(
        <section id="navbar-section">
        <div className="profile-hero">
            <img 
                src={image1} 
                alt="Photo de profil"
                className="profile-image"
            />
            <div className="profile-text">
                <h1>Comaravel Narayanasamy</h1>
                <p>Développeur Web Full Stack</p>
                <p>Passionné par le développement</p>
            </div>
        </div>
        </section>
    )
}