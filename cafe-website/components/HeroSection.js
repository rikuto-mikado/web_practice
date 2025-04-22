import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row h-screen">
      <div className="relative md:w-1/2 w-full h-64 md:h-full">
        <Image
          src="/cafe-site-home.png"
          alt="cafe_interior"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="md:w-1/2 w-full flex flex-col justify-center items-center bg-[#fefaf6] text-[#5c4033] px-6 py-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to Classic Café</h1>
        <p className="text-lg text-center mb-6">ゆったりとした時間をあなたに。</p>
        <div className="space-y-4">
          <button className="bg-[#5c4033] text-white px-6 py-2 rounded hover:opacity-90">
            メニューを見る
          </button>
          <button className="bg-[#5c4033] text-white px-6 py-2 rounded hover:opacity-90">
            お問い合わせ
          </button>
        </div>
      </div>
    </section>
  );
}

  