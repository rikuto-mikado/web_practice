import { useState, useEffect } from "react";

const images = [
  "/cafe-site-home.png",
  "/cafe-site-home02.png",
  "/cafe-site-contact.png",
];

export default function HeroSection({ onMenu, onContact }) {
  const [bgIndex, setBgIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isMobile]);

  return (
  
  
  <div className="w-screen min-h-screen md:min-h-0 flex flex-col justify-center items-center text-center px-0 md:px-6 py-10
  bg-cover bg-center md:bg-none text-white md:text-[#5c4033] overflow-hidden transition-all duration-1000"
  style={isMobile ? { backgroundImage: `url(${images[bgIndex]})` } : {}}>


      <div className="md:bg-transparent p-6 rounded-md">
        <h1 className="text-5xl font-extrabold mb-6 tracking-wide">
          Welcome to<br />Classic Café
        </h1>
        <p className="text-xl md:text-lg mb-10">ゆったりとした時間をあなたに。</p>
        <div className="flex flex-col md:flex-row gap-4">
        <button className="bg-white text-[#5c4033] px-6 py-2 rounded border border-[#5c4033] hover:bg-[#5c4033] hover:text-white
        md:bg-[#5c4033] md:text-white md:border-none md:hover:opacity-90"
        onClick={onMenu}>
          メニューを見る
        </button>
        <button className="bg-white text-[#5c4033] px-6 py-2 rounded border border-[#5c4033] hover:bg-[#5c4033] hover:text-white
        md:bg-[#5c4033] md:text-white md:border-none md:hover:opacity-90"
        onClick={onContact}>
          お問い合わせ
        </button>
        </div>
      </div>
    </div>
  );
}
