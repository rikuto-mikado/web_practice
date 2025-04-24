export default function HeroSection({ onMenu, onContact }) {
  return (
    <div className="relative w-full min-h-screen md:min-h-0 flex flex-col justify-center items-center text-center px-6 py-10
    bg-[url('/cafe-site-home.png')] bg-cover bg-center
    md:bg-none text-white md:text-[#5c4033]">
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
