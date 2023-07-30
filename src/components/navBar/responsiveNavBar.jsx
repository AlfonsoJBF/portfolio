import { useState, useEffect } from "react"
import NavBarButton from "./navBarButton"

export default function ResponsiveNavBar({promisedFunction, logo, closedLogo}){
    const [width, setWidth] = useState(window.innerWidth)
    const [toggled, setToggled] = useState(false)
    const buttons = ['Skills', 'Works', 'Projects', 'Contact']

    const handleToggle = ( ) => {
      setToggled(!toggled)
    }
    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };
    
      window.addEventListener('resize', handleResize);

      
    
    }, []);

    return(
      <>{
        width > 500 ?  <div className='stickyNavBar'>

        <img src={logo} alt="" onClick={() => promisedFunction('Home')} className='logo--small'/>

        

        <div className='stickyNavBar__buttons'>
          {buttons.map((button, index) => ( <NavBarButton  text= {button} funcionality={promisedFunction} key={index}/> ))}
        </div>


      </div> : 

        <div className='stickyNavBar'>

          <img src={closedLogo} onClick={handleToggle}></img> 
          <img src={logo} alt="" onClick={() => promisedFunction('Home')} className='logo--small' />

          <div className={toggled ? 'stickyNavBar__buttons toggled' : 'stickyNavBar__buttons' } >
            {buttons.map((button, index) => ( <NavBarButton  text= {button} funcionality={promisedFunction} key={index}/> ))}
          </div>

        </div>

      
      }
      </>
      
     
    )

}