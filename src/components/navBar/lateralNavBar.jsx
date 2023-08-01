import NavBarButton from "./navBarButton"

export default function LateralNavBar({promisedFunction, logo}){

    const buttons = ['Habilidades', 'CV', 'Proyectos', 'Contacto']
    return(
      <nav className="lateralNavBar">
              
                <img src={logo} alt="" onClick={() => promisedFunction('Home')} />

                {buttons.map((button, index) => ( <NavBarButton  text= {button} funcionality={promisedFunction} key={index}/> ))}
    
              
            </nav>
    )
  }