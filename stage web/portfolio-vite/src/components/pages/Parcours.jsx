import "../styles/Parcours.css";

// Timeline.jsx
export default function Timeline() {
  return (
    <section>
      <div class="parcours">
        <div class="row">
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 class="resume-title">Formation</h3>
            <div class="resume-item">
              <h4>BTS SIO (Services Informatiques aux Organisations)</h4>
              <h5>2024 - 2026</h5>
              <p>
                <em>CFA ITIS, Évry-Courcouronnes</em>
              </p>
            </div>
            <div class="resume-item">
              <h4>Licence Physique-Chimie</h4>
              <h5>2018 - 2020</h5>
              <p>
                <em>Université Évry Paris-Saclay, Évry-Courcouronnes</em>
              </p>
            </div>
            <div class="resume-item">
              <h4>Baccalauréat Scientifique</h4>
              <h5>2018 - 2019</h5>
              <p>
                <em>Lycée Polyvalent du Parc des Loges</em>
              </p>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 class="resume-title">Expériences</h3>
            <div class="resume-item">
              <h4>Projets personnels en informatique</h4>
              <h5>2020 - 2024</h5>
              <ul>
                <li>
                  Installation et configuration de modèles IA (image, vidéo,
                  audio) sur Linux
                </li>
                <li>Support GPU AMD via ROCm et ZLUDA</li>
                <li>Création de machines virtuelles (Rocky Linux, Ubuntu)</li>
                <li>
                  Utilisation d’Anaconda, JupyterLab, Pandas, Scikit Learn pour
                  le machine learning
                </li>
                <li>Déploiement automatisé via Ansible</li>
                <li>
                  Surveillance de serveurs avec Grafana, Prometheus,
                  Node/Windows Exporter
                </li>
                <li>
                  Bases en Azure DevOps et pipelines avec agents auto-hébergés
                </li>
              </ul>
            </div>
            <div class="resume-item">
              <h4>Projets académiques</h4>
              <ul>
                <li>Création de sites web, jeu Space Invader (Processing)</li>
                <li>
                  Programmation Arduino (accordeur de guitare automatique)
                </li>
                <li>Apprentissages en Java, Python, C</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
