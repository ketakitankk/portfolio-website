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
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/experience" element={<Experience />}></Route>
          <Route path="/education" element={<Education />}></Route>
          <Route path="/contactMe" element={<Contact />}></Route>
          <Route path="/techStack" element={<TechStackSkills />}></Route>
      
          <Route path="*" element={<NotFound/>}></Route>
          </Routes>
      </BrowserRouter>
  
      </div>
  );
}

export default App;
