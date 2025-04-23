export default function HeroContent({ onMenu, onContact }) {
  return (
    <div className="flex flex-col justify-center items-center px-6 py-10">
      <h1 className="text-6xl font-extrabold mb-6 tracking-wide">Welcome to Classic Café</h1>
      <p className="text-xl md:text-2xl text-gray-700 mb-10">ゆったりとした時間をあなたに。</p>
      <div className="flex gap-4">
        <button
          className="bg-[#5c4033] text-white px-6 py-2 rounded hover:opacity-90"
          onClick={onMenu}>
          メニューを見る
        </button>
        <button
          className="bg-[#5c4033] text-white px-6 py-2 rounded hover:opacity-90"
          onClick={onContact}>
          お問い合わせ
        </button>
      </div>
    </div>
  );
}
