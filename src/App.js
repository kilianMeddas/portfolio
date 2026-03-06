import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuBar from './Menubar';
import About from './About';
import Formations from "./Formations"
import Skills from "./Skills";
import Experiences from "./Experiences"
import Credits from './Credits';
import Contact from "./Contact"

const App = () => {
  return (
    <Router>
      <MenuBar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/formations" element={<Formations/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/experiences" element={<Experiences/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      
      <Credits />
    </Router>
  );
};

export default App;