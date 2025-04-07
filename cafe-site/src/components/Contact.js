import "../styles/Contact.css";
import contactImg from "../photo/cafe-site-contact.png";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <img src={contactImg} alt="店の外観" />
      </div>
      <div className="contact-right">
        <h2>Contact</h2>
        <p>クラシックカフェへようこそ。<br />ご予約やお問い合わせはこちらからどうぞ。</p>
        <form>
          <input type="text" placeholder="お名前" required />
          <input type="email" placeholder="メールアドレス" required />
          <textarea placeholder="お問い合わせ内容" rows="4" required></textarea>
          <button type="submit">送信</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
