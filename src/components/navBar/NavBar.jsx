import { useState, useEffect } from 'react'
import LOGO from '../../assets/SVG/logo_JBF.SVG'
import CLOSED_LOGO from '../../assets/SVG/menu-svgrepo-com.svg'
import './navBar.css'



export default function NavBar({ setCurrentComponent }) {
    const [width, setWidth] = useState(window.innerWidth);
  
    const handleButtonClick = (component) => {
      setCurrentComponent(component);
    };
  
    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      // Clean up the event listener on component unmount
    //   return () => {
    //     window.removeEventListener('resize', handleResize);
    //   };
    }, []);
  
    return (
      <>
        {width > 700 ? (
         <LateralNavBar promisedFunction={handleButtonClick} />
        ) : (
          <ResponsiveNavBar promisedFunction={handleButtonClick} />
        )}
      </>
    );
  }


function ResponsiveNavBar({promisedFunction}){
    const [width, setWidth] = useState(0)
    const [toggled, setToggled] = useState(false)

    const handleToggle = ( ) => {
      setToggled(!toggled)
    }
    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };
    
      window.addEventListener('resize', handleResize);
    
      // Clean up the event listener on component unmount
    //   return () => {
    //     window.removeEventListener('resize', handleResize);
    //   };
    }, []);

    return(
      <>{
        width > 500 ?  <div className='stickyNavBar'>

        <img src={LOGO} alt="" onClick={() => promisedFunction('Home')} className='logo--small'/>

        

        <div className='stickyNavBar__buttons'>
            <button className="NavBar__button" onClick={() => promisedFunction('Skills')}>
              Skills
            </button>
            <button className="NavBar__button" onClick={() => promisedFunction('Works')}>
              Trabajos
            </button>
            <button className="NavBar__button" onClick={() => promisedFunction('Projects')}>
              Proyectos
            </button>
            <button className="NavBar__button" onClick={() => promisedFunction('Contact')}>
              Contacto
            </button>
        </div>


      </div> : 

        <div className='stickyNavBar'>

          <img src={CLOSED_LOGO} onClick={handleToggle}></img> 
          <img src={LOGO} alt="" onClick={() => promisedFunction('Home')} className='logo--small' />

          <div className={toggled ? 'stickyNavBar__buttons toggled' : 'stickyNavBar__buttons' } >
          <button className="NavBar__button" onClick={() => promisedFunction('Skills')}>
              Skills
            </button>
            <button className="NavBar__button" onClick={() => promisedFunction('Works')}>
              Trabajos
            </button>
            <button className="NavBar__button" onClick={() => promisedFunction('Projects')}>
              Proyectos
            </button>
            <button className="NavBar__button" onClick={() => promisedFunction('Contact')}>
              Contacto
            </button>

          </div>

        </div>

      
      }
      </>
      
     
    )

}

function LateralNavBar({promisedFunction}){
  return(
    <nav className="lateralNavBar">
            <div className="lateralNavBar__buttonsContainer">
              <img src={LOGO} alt="" onClick={() => promisedFunction('Home')} />
  
              <button className="NavBar__button" onClick={() => promisedFunction('Skills')}>
                Skills
              </button>
              <button className="NavBar__button" onClick={() => promisedFunction('Works')}>
                Trabajos
              </button>
              <button className="NavBar__button" onClick={() => promisedFunction('Projects')}>
                Proyectos
              </button>
              <button className="NavBar__button" onClick={() => promisedFunction('Contact')}>
                Contacto
              </button>
            </div>
          </nav>
  )
}


