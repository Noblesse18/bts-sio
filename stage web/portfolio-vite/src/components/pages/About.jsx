// components/pages/About.jsx
import '../styles/About.css'
import imgabout from '../images/img-about.jpeg'
export default function About() {
  return (
    <section id="about">
      <div className="about-image">
        <img src={imgabout} className='img-about'/>
      </div>  
      <div className='presentation'>
        <h2>À Propos de moi</h2>
        <br/>
        <p>Étudiant en BTS SIO SISR passionné par l’administration système, le
          DevOps et l’intelligence artificielle. Je recherche une alternance
          pour approfondir mes compétences techniques et contribuer à des
          projets concrets.</p>
      </div>
    </section>
  )
}