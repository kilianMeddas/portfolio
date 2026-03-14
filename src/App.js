import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./i18n"

import MenuBar from './components/Menubar';
import About from './components/About';
import Formations from "./components/Formations"
import Skills from "./components/Skills";
import Experiences from "./components/Experiences"
import Credits from './components/Credits';
import Contact from "./components/Contact"

const App = () => {
  return (
    <Router basename="/portfolio">
      <MenuBar />
      <Routes>
        <Route path="/" element={<About />} />
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