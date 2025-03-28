import './App.css';
import myPhoto from './photo/icon.jpg';
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

      {/* Hero section */}
      <section className="hero">
        <div className="hero-text">
        <h1>Hi, I'm Rikuto Mikado</h1>
        <p>I'm a web developer based in Japan.</p>
        </div>
        <img src={myPhoto} alt="Myphoto" className="icon" />
      </section>

      {/* 以下分割したパーツたち */}
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
