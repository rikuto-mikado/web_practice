import '../styles/header.css';

function Header() {
  return (
    <header id="navbar" className="navbar">
      <nav className="nav">
        <div className="site-title">Self Introduction</div>
        <ul className="nav-menu">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
