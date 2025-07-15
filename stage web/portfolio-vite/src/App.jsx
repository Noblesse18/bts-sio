import './index.css'
import NavBar from './components/pages/NavBar' // Correction du chemin
import Profile from './components/pages/Profile'
/*import Parcours from './components/pages/Parcours'
import Projects from './components/pages/Projects'*/
import Contact from './components/pages/Contact'
import Footer from './components/pages/Footer'
import About from './components/pages/About'
import Skill from './components/pages/Skill'
import Veille from './components/pages/Veille'


function App() {
  return (
    
    <div>
    
      <NavBar/> 
      <br/>
      <Profile/>
      <About/>
      <br/>
      <Skill/>
      <br/>
      <Veille/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default App