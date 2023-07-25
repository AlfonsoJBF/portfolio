import SkillCard from "./skillCard"
import HTML from '../../assets/SVG/icons8-html-5.svg'
import JavaScript from '../../assets/SVG/icons8-javascript.svg'
import CSS from '../../assets/SVG/icons8-css3.svg'
import REACT from '../../assets/SVG/react.svg'
import './skills.css'

export default function SkillsSection(){
    return(
    <section className="skills-container">
        <h1>Pagina de Skills</h1>

        <div className="cards-container">
            <h2>Habilidades Actuales</h2>
            <div>
            <SkillCard img={HTML} skill='HTML5' progress='100' bgColor='orange'/>
            <SkillCard img={CSS} skill='CSS3' progress='75' bgColor='blue'/>
            <SkillCard img={JavaScript} skill='JavaScript' progress='50' bgColor='yellow'/>
            <SkillCard img={REACT} skill='REACT' progress='10' bgColor='cyan'/>
            </div>
        </div>

        <article> 
            <h2>Road to FullStack</h2>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quidem ex voluptatum esse dignissimos maxime cupiditate, quisquam unde qui ducimus magni molestiae suscipit veniam? Magni perferendis officiis laboriosam id fugit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptate necessitatibus nam sequi obcaecati voluptates sed quasi, facilis ipsam, facere voluptatibus quos illum fugit eveniet, vero quisquam odio error. Incidunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi id consequatur mollitia ratione ipsam officia dolorem impedit voluptatum odit dolores laudantium incidunt provident cum minus, illo eos, possimus maxime culpa.
            </p>
        </article>

    </section>)
}