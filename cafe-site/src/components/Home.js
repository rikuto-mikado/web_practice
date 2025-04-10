import "../styles/SplitSection.css";
import "../styles/Home.css";
import cafeImg from "../photo/cafe-site-home.png";

function Home() {
  return (
    <div className="split-section">
      <div className="home-left">
        <img src={cafeImg} alt="Cafe" />
      </div>
      <div className="home-right">
        <h1>Welcome to Classic Café</h1>
        <p>ゆったりとした時間をあなたに。</p>
        <a href="/menu" className="button">メニューを見る</a>
        <a href="/contact" className="button secondary">お問い合わせ</a>
      </div>
    </div>
  );
}

export default Home;
