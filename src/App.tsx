import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./Pages/AboutMe";
import Home from "./Pages/Home";
import Education from "./Pages/Education";
import WorkExperience from "./Pages/WorkExperience";
import Projects from "./Pages/Projects";
import Repositorys from "./Pages/Repositorys";
import DigitalSkills from "./Pages/DigitalSkills";
import DownloadCV from "./Pages/DownloadCV";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/WorkExperience" element={<WorkExperience />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Repositorys" element={<Repositorys />} />
        <Route path="/DigitalSkills" element={<DigitalSkills />} />
        <Route path="/DownloadCV" element={<DownloadCV />} />
      </Routes>
    </Router>
  );
}

export default App;
