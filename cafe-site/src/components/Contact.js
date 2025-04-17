import "../styles/SplitSection.css";
import "../styles/Contact.css";
import contactImg from "../photo/cafe-site-contact.png";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("meoavyvv"); // ← あなたのForm ID！

  if (state.succeeded) {
    return (
      <div className="contact-right">
        <h2>送信完了</h2>
        <p>お問い合わせありがとうございました！</p>
      </div>
    );
  }

  return (
    <div className="split-section">
      <div className="contact-left">
        <img src={contactImg} alt="atmosphere" />
      </div>
      <div className="contact-right">
        <h2>Contact</h2>
        <p>クラシックカフェへようこそ。<br />ご予約やお問い合わせはこちらからどうぞ。</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="メールアドレス"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            name="message"
            placeholder="お問い合わせ内容"
            rows="4"
            required
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
          <button type="submit" disabled={state.submitting}>
            送信
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
