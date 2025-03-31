import './App.css';
import Header from './components/header.js'
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

      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contacts />
      </div>
  );
}

export default App;
