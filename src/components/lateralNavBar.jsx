

export default function LateralNavBar(params){
    const {logo, setCurrentComponent} = params

    const handleButtonClick = (component) =>{
       setCurrentComponent(component)
    }
    return(
        <>
        <nav className="lateralNavBar">
            <img src={logo} alt="" onClick={() => {handleButtonClick('Home')}} />

            <button className="lateralNavBar__button" onClick={() => {handleButtonClick('Skills')}}>Skills</button>
            <button className="lateralNavBar__button" onClick={() => {handleButtonClick('Works')}}>Trabajos</button>
            <button className="lateralNavBar__button" onClick={() => {handleButtonClick('Projects')}}>Proyectos</button>
            <button className="lateralNavBar__button" onClick={() => {handleButtonClick('Contact')}}>Contacto</button>
        </nav>
        </>
    )
}