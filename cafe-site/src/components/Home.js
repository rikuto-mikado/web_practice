import "../styles/SplitSection.css";
import cafeImg from "../photo/cafe-site-home.png";

function Home() {
  return (
    <div className="split-section">
      <div className="left">
        <img src={cafeImg} alt="Cafe" />
      </div>
      <div className="right">
        <h1>Welcome to Classic Café</h1>
        <p>ゆったりとした時間をあなたに。</p>
        <a href="/menu" className="button">メニューを見る</a>
      </div>
    </div>
  );
}

export default Home;
