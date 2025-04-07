// Menu.jsx
import "../styles/Menu.css";
import menuImg from "../photo/cafe-site-menu.png";
import coffee1 from "../photo/cafe-site-menu01.png";

const menuItems = [
  { image: coffee1, name: "クラシックブレンド", price: "¥500" }
];

function Menu() {
  return (
    <div className="menu-split">
      <div className="menu-left">
        <img src={menuImg} alt="メニュー画像" />
      </div>
      <div className="menu-right">
        <h2>メニュー</h2>
        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <div className="menu-card" key={index}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
