import { useState } from 'react'
import LateralNavBar from './components/lateralNavBar'
import logoIMG from './assets/img/Logo.png'
import SkillsSection from './components/skills'
import ProjectsSection from './components/projects'
import HomeSection from './components/home'
import WorksSection from './components/work'
import ContactSection from './components/contact'
import './App.css'

function App() {
  const [currentComponent, setCurrentComponent] = useState('Home');

  const renderComponent = () => {
    switch (currentComponent) {
      case 'Home':
        return <HomeSection />;
      case 'Skills':
        return <SkillsSection />;
      case 'Projects':
        return <ProjectsSection />
      case 'Works':
        return <WorksSection/>;
      case 'Contact':
        return <ContactSection />;
      default:
        return <HomeSection />;

    }
  }
  
  return (
    <div className='app'>
      <LateralNavBar logo={logoIMG} setCurrentComponent={setCurrentComponent}/>
      <main className='app__main'>{renderComponent()}</main>
      
      
    </div>
  )
}

export default App
