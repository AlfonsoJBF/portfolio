import SocialLinks from "./social"
import  "./contact.css"

export default function ContactSection(){
    return(
    <section className="contact">
        
        <form action="" method="post" className="gradient-border">

            <h3>Enviame tu idea</h3>

            <label htmlFor="name">Nombre:</label>
            <input type="text" name="name" placeholder="Introduce tu nombre" required />
            <label htmlFor="apellidos">Apellidos:</label>
            <input type="text" name="apellidos" placeholder="Introduce tus apellidos" required />
            <label htmlFor="email">Correo electrónico:</label>
            <input type="text" name="email" placeholder="Introduce tu correo" required />
            <label htmlFor="company">Nombre de la empresa:</label>
            <input type="text" name="company" placeholder="Opcional" />

            <label htmlFor="message">Resumen del proyecto:</label>
            <textarea name="message"  rows="10" placeholder="Máx 300ch..."></textarea> 

            <input type="submit" />
        </form>

        <SocialLinks />
    </section>)
}