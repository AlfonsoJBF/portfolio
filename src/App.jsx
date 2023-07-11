import { useState } from 'react'
import LateralNavBar from './components/lateralNavBar'
import MainSectionRender from './components/mainSectionRender'
import logoIMG from './assets/Logo.png'
import './App.css'

function App() {
  
  
  return (
    <>
      <LateralNavBar logo={logoIMG} click={() => setEstado(!estado)}/>
      
      
    </>
  )
}

export default App
