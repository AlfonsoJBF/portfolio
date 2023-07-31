import { useState } from 'react'
import NavBar from './components/navBar/NavBar.jsx'
import SkillsSection from './components/skillsSection/skills'
import ProjectsSection from './components/projects'
import HomeSection from './components/homeSection/home'
import WorksSection from './components/trabajos/work.jsx'
import ContactSection from './components/contact/contact.jsx'
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
      <NavBar  setCurrentComponent={setCurrentComponent}/>
      <main className='app__main'>{renderComponent()}</main>
      
      
    </div>
  )
}

export default App
