import SkillCard from "./skillCard"
import HTML from '../../assets/SVG/icons8-html-5.svg'
import JavaScript from '../../assets/SVG/icons8-javascript.svg'
import CSS from '../../assets/SVG/icons8-css3.svg'
import REACT from '../../assets/SVG/react.svg'
import NODE from '../../assets/SVG/nodejs.svg'
import FIGMA from '../../assets/SVG/figma.svg'
import GIT from '../../assets/SVG/git.svg'
import VSC from '../../assets/SVG/visual-studio-code.svg'
import './skills.css'

export default function SkillsSection(){
    return(
    <section className="skills-container">
        <h2>Habilidades y tecnologias</h2>

        <div className="info">
        <article className="softSkills__container">
            <h3>Soft Skills</h3>

            <div>
                <ul className="softSkills">
                    <li>Comunicación efectiva</li>
                    <li>Trabajo en equipo</li>
                    <li>Resolución de problemas</li>
                    <li>Adaptabilidad</li>
                    <li>Curiosidad y sed de aprendizaje</li>
                    <li>Atención al detalle</li>
                    <li>Empatía y habilidades interpersonales</li>
                </ul>
            </div>
        </article>

        <article className="roadTo"> 
            <h3>Road to FullStack</h3>

            <p>
                Ahora que tengo una buena base en cuanto al desarrollo FrontEnd es la hora de introducirme en lo referente a las tecnologías de servidor, sin descuidar seguir formandome en la parte del cliente. <br></br> Mi objetivo actual es aprender todo lo posible de NodeJS y bases de datos relacionales SQL, ademas ce completar mis conocimientos de JavaScript puro, React y comenzar con Typescript. Para esto estudiare de forma independiente, además estudiaré en Campus 42 de Telefónica a la par que realizare projectos por mi cuenta. Pero a largo plazo estoy interesado en pasar a formar parte de un equipo donde pueda exprimir al máximo mis capacidades y aprender de personas con gran experiencia en el sector.
            </p>
        </article>

        </div>
        <article>
            <h3>Habilidades Actuales</h3>
            <div className="cards-container">
            <SkillCard img={HTML} skill='HTML5' progress='100' bgColor='orange'/>
            <SkillCard img={CSS} skill='CSS3' progress='75' bgColor='blue'/>
            <SkillCard img={JavaScript} skill='JavaScript' progress='50' bgColor='yellow'/>
            <SkillCard img={REACT} skill='REACT' progress='20' bgColor='cyan'/>
            <SkillCard img={NODE} skill='NodeJS' progress='10' bgColor='lime'/>
            <SkillCard img={FIGMA} skill='Figma' progress='80' bgColor='pink'/>
            <SkillCard img={GIT} skill='GIT' progress='30' bgColor='orange'/>
            <SkillCard img={VSC} skill='Visual Studio Code' progress='100' bgColor='blue'/>
            </div>
        </article>


    </section>)
}