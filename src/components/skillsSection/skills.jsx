import SkillCard from "./skillCard"
import HTML from '../../assets/SVG/icons8-html-5.svg'
import JavaScript from '../../assets/SVG/icons8-javascript.svg'
import CSS from '../../assets/SVG/icons8-css3.svg'
import REACT from '../../assets/SVG/react.svg'
import './skills.css'

export default function SkillsSection(){
    return(
    <section className="skills-container">
        <h2>Habilidades y tecnologias</h2>

        <article>
            <h3>Habilidades Actuales</h3>
            <div className="cards-container">
            <SkillCard img={HTML} skill='HTML5' progress='100' bgColor='orange'/>
            <SkillCard img={CSS} skill='CSS3' progress='75' bgColor='blue'/>
            <SkillCard img={JavaScript} skill='JavaScript' progress='50' bgColor='yellow'/>
            <SkillCard img={REACT} skill='REACT' progress='10' bgColor='cyan'/>
            </div>
        </article>

        <div className="info">
        <article>
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

        <article> 
            <h3>Road to FullStack</h3>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quidem ex voluptatum esse dignissimos maxime cupiditate, quisquam unde qui ducimus magni molestiae suscipit veniam? Magni perferendis officiis laboriosam id fugit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptate necessitatibus nam sequi obcaecati voluptates sed quasi, facilis ipsam, facere voluptatibus quos illum fugit eveniet, vero quisquam odio error. Incidunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi id consequatur mollitia ratione ipsam officia dolorem impedit voluptatum odit dolores laudantium incidunt provident cum minus, illo eos, possimus maxime culpa.
            </p>
        </article>

        </div>

    </section>)
}