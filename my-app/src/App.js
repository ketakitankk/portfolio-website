import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Experience from "./Components/Experience";
import Achievements from "./Components/Achievements";
import Contact from "./Components/Contact";
import HomePage from "./Components/HomePage";
import NavigationBar from "./Components/NavigationBar";
import Education from './Components/Education';
import TechStackSkills from "./Components/TechStackSkills";
import NotFound from './Components/NotFound';

function App() {
  return (
    
    <div className="App">
      {/* <h1>Hello</h1> */}
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/portfolio-website/" element={<HomePage />}></Route>
          <Route path="/portfolio-website/achievements" element={<Achievements />} />
          <Route path="/portfolio-website/experience" element={<Experience />}></Route>
          <Route path="/portfolio-website/education" element={<Education />}></Route>
          <Route path="/portfolio-website/contactMe" element={<Contact />}></Route>
          <Route path="/portfolio-website/techStack" element={<TechStackSkills />}></Route>
      
          <Route path="*" element={<NotFound/>}></Route>
          </Routes>
      </BrowserRouter>
  
      </div>
  );
}

export default App;
