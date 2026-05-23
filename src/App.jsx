import { Route, Routes } from 'react-router-dom';
import Hero from './pages/Hero';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';

function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F3EDE5', overflowX: 'clip' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}

export default App;
