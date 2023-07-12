import SkillCard from "./skillCard"
import HTML from '../assets/SVG/icons8-html-5.svg'
import JavaScript from '../assets/SVG/icons8-javascript.svg'
import CSS from '../assets/SVG/icons8-css3.svg'

export default function SkillsSection(){
    return(
    <section>
        <h1>Pagina de Skills</h1>
        <div className="cards-container">
            <SkillCard img={HTML} skill='HTML5' progress='80'/>
            <SkillCard img={CSS} skill='CSS3' progress='80'/>
            <SkillCard img={JavaScript} skill='JavaScript' progress='80'/>
            <SkillCard img={HTML} skill='HTML5' progress='80'/>
        </div>

    </section>)
}