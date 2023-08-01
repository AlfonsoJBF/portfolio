export default function WorkCard({nombreTrabajo, nombreEmpresa, fechas, descripcion, funciones}){
    return(
        <article className="timeline-item" >
            <h3>{nombreTrabajo} en {nombreEmpresa} <br></br> Fechas:<span>{fechas}</span></h3>
            <p>{descripcion}</p>
            
           
        </article>
    )
}