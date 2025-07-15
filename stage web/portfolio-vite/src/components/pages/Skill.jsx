import '../styles/Skill.css'

import HTML from '../images/icon/skill-icon/html.png'
import CSS from '../images/icon/skill-icon/css.png'
import JS from '../images/icon/skill-icon/java-script.png'
import JAVA from '../images/icon/skill-icon/java.png'
import LINUX from '../images/icon/skill-icon/linux.png'
import REACT from '../images/icon/skill-icon/react.png'



export default function Skill(){

    return (

        <section className='skill-main'>
            <h2>Mes Competences</h2>
            <div className='skill-presentation'>
                <div className='skill-block'>
                    <h3>Html :</h3>
                    <div className='skill-icon'>
                        <img src={HTML} alt='HTML'/>
                    </div>  
                </div>

                <div className='skill-block'>
                    <h3>Css :</h3>
                    <div className='skill-icon'>
                        <img src={CSS} alt="CSS"/>
                    </div>  
                </div>
                <div className='skill-block'>
                    <h3>Java-Script :</h3>
                    <div className='skill-icon'>
                        <img src={JS} alt="JS"/>
                    </div>  
                </div>
                <div className='skill-block'>
                    <h3>Java :</h3>
                    <div className='skill-icon'>
                        <img src={JAVA} alt='JAVA'/>
                    </div>  
                </div>
                <div className='skill-block'>
                    <h3>Linux :</h3>
                    <div className='skill-icon'>
                        <img src={LINUX} alt='LINUX'/>
                    </div>  
                </div>
                <div className='skill-block'>
                    <h3>React :</h3>
                    <div className='skill-icon'>
                        <img src={REACT} alt='REACT'/>
                    </div>  
                </div>
                
            </div>
            

        </section>


    )
}

