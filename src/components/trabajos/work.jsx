import WorkCard from './workCard'

import './works.css'

export default function WorksSection(){
 
    return(
    <section className="works-container">
        <h2>Pagina de Trabajos</h2>

        <div className="timeline-container">

          <WorkCard nombreEmpresa={'ENE -1'} nombreTrabajo={'Mensajero'} fechas={' Enero 2021-Actualidad'} descripcion={'Recogida, transporte y entrega de diversos tipos de paqueteria con gran velocidad. Desde mudanzas hasta trámites notariales, incluyendo envíos personales y envíos de larga distancia.'} />

          <WorkCard nombreEmpresa={'FNAC'} nombreTrabajo={'Mozo de almacén' } fechas={'Septiembre 2020- Enero 2021'} descripcion={'Trabajo en el almacén realizando la preparación de pedidos. Organización de los envíos a particulares y de los envíos a tiendas.'}/>

    
          <div className="timeline-divider"></div>
        </div>

    

  
    </section>)
}