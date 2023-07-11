export default function LateralNavBar(params){
    const {logo, click} = params
    return(
        <>
        <nav className="lateralNavBar">
            <img src={logo} alt="" />

            <button className="lateralNavBar__button" onClick={click}>Trabajos</button>
            <button className="lateralNavBar__button" onClick={click}>Skills</button>
            <button className="lateralNavBar__button" onClick={click}>Proyectos</button>
            <button className="lateralNavBar__button" onClick={click}>Contacto</button>
        </nav>
        </>
    )
}