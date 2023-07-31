export default function WorkCard({nombreTrabajo, nombreEmpresa, fechas, descripcion, funciones}){
    return(
        <article className="timeline-item" >
            <h3>{nombreTrabajo} en {nombreEmpresa} <br></br> Fechas:<span>{fechas}</span></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora blanditiis modi, enim dolores repellendus quis doloremque accusantium fugit impedit, voluptate eos! Alias fuga illo eum deserunt tempore laudantium nobis quod!</p>
        </article>
    )
}