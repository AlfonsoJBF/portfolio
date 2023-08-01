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

        <article className='home__presentation'>
            <h3>Sobre mi:</h3>
            <p>Mi nombre es Alfonso José Bustos Fraguio, un desarrollador web Junior en proceso de aprendizaje con una buena base en FrontEnd que empieza a estudiar sobre las tecnologías de servidor. <br></br><br></br>

            Empecé a interesarme por la programación desde pequeño, enfocandome al principio en aprender creando videojuegos, lo que me ayudó a comprender las lógicas de la programación y a saber enfrentarme a los problemas. Sin embargo, hace poco tiempo que decidi introducirme en el mundo del desarrollo web, por lo que me emociona todo lo que me queda por conocer. <br></br> <br></br>

            Si estas interesado en que participe en tu proyecto o bien desarrolle tu página web, no dudes en contactarme, haré de tu producto algo muy personal.</p>
        </article>

        


       
    </section>)
}