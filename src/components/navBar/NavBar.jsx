import { useState, useEffect } from 'react'
import LOGO from '../../assets/SVG/logo_JBF.SVG'
import CLOSED_LOGO from '../../assets/SVG/menu-svgrepo-com.svg'
import LateralNavBar from './lateralNavBar'
import ResponsiveNavBar from './responsiveNavBar'
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
    }, []);
  
    return (
      <>
        {width > 700 ? (
         <LateralNavBar promisedFunction={handleButtonClick} logo={LOGO} />
        ) : (
          <ResponsiveNavBar promisedFunction={handleButtonClick} logo={LOGO} closedLogo={CLOSED_LOGO} />
        )}
      </>
    );
  }







