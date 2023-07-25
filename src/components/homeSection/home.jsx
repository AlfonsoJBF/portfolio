import WrittenLetters from './wrttngLetters'
import Logo_JBF from "../../assets/SVG/logo_JBF.svg"
import './home.css'

export default function HomeSection(){

   

    return(
    <section className="home">
        <header>
        <img src={Logo_JBF} alt="" />
        <WrittenLetters /> 
        </header>

        <div className='home__presentation gradient-border'>
            <h3>Sobre mi:</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nihil provident error, tenetur ipsam itaque distinctio? In, hic voluptate inventore iusto totam quia saepe omnis eius, aperiam voluptatum placeat illum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestias in facere tempora corrupti, culpa enim ratione! Nemo non sint commodi voluptatem, inventore quae excepturi neque? Ullam animi aliquid quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ipsa magnam ullam explicabo libero aspernatur? Libero vero quos voluptas quidem fugit, adipisci eos architecto necessitatibus unde provident, culpa quibusdam aliquid!</p>

        </div>

        


       
    </section>)
}