import './App.css';
import Hero from './components/hero.js';
import About from './components/about.js';
import Skills from './components/skills.js';
import Projects from './components/projects.js';
import Contacts from './components/contacts.js';


function App() {
  return (
    <div className="App">
      <header className="navbar">
        {/* navとかLogoあればここに残す */}
      </header>

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contacts />

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Rikuto Mikado</p>
      </footer>
    </div>
  );
}

export default App;
