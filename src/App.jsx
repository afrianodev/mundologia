import { React, useState } from 'react'
import './App.css'
import Home from './components/Home.jsx'
import Practice from './components/Practice.jsx';
import Play from './components/Play.jsx';
import WorldMap from './components/WorldMap.jsx';

function App() {
  const[currentSection, setCurrentSection] = useState('play');
  const [mapType, setMapType] = useState('world');

  function showSection(section, map='world') {
    setMapType(map);
    setCurrentSection(section)
  }

  return (
    <div className='main'>
        <h1 className='w-[300px] bg-white select-none font-bold rounded-xl shadow-lg hover:underline cursor-pointer text-2xl mt-8 mb-5'>Mundología</h1>
      {currentSection === 'home' && <Home handleNext={showSection} />}
      {currentSection === 'practice' && <Practice handleNext={showSection} />}
      {currentSection === 'play' && <Play handleNext={showSection} />}
      {currentSection === 'world-map' && <WorldMap handleNext={showSection} mapType={mapType} />}
      
    </div>
  )
}



export default App
