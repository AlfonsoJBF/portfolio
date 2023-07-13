import SkillCard from "./skillCard"
import HTML from '../assets/SVG/icons8-html-5.svg'
import JavaScript from '../assets/SVG/icons8-javascript.svg'
import CSS from '../assets/SVG/icons8-css3.svg'
import REACT from '../assets/SVG/react.svg'

export default function SkillsSection(){
    return(
    <section className="skills-container">
        <h1>Pagina de Skills</h1>
        <div className="cards-container">
            <SkillCard img={HTML} skill='HTML5' progress='100' bgColor='orange'/>
            <SkillCard img={CSS} skill='CSS3' progress='75' bgColor='blue'/>
            <SkillCard img={JavaScript} skill='JavaScript' progress='50' bgColor='yellow'/>
            <SkillCard img={REACT} skill='REACT' progress='10' bgColor='cyan'/>
        </div>

    </section>)
}