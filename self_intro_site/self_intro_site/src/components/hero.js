import '../styles/hero.css';
import myPhoto from '../photo/icon.jpg'; // ← ← フォルダ構成に合わせてパス修正！

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Hi, I'm Rikuto Mikado</h1>
        <p>I'm a web developer based in Japan.</p>
      </div>
      <img src={myPhoto} alt="MyPhoto" className="icon" />
    </section>
  );
}

export default Hero;

