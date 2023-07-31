import WorkCard from './workCard'

import './works.css'

export default function WorksSection(){
    return(
    <section className="works-container">
        <h2>Pagina de Trabajos</h2>

        <div className="timeline-container">

          <WorkCard nombreEmpresa={'ENE -1'} nombreTrabajo={'Mensajero'} fechas={' Enero 2021-Actualidad'}/>

          <WorkCard nombreEmpresa={'FNAC'} nombreTrabajo={'Mozo de almacén' } fechas={'Septiembre 2020- Enero 2021'}/>

    
          <div className="timeline-divider"></div>
        </div>

    

  
    </section>)
}