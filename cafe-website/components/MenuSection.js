import Image from "next/image";

const menuItems = [
  { name: "カフェラテ", price: "¥500", image: "/cafe-site-menu01.png" },
  { name: "抹茶ラテ", price: "¥550", image: "/cafe-site-menu02.png" },
  { name: "コーヒー", price: "¥400", image: "/cafe-site-menu03.png" },
  { name: "抹茶コーヒー", price: "¥600", image: "/cafe-site-menu04.png" },
];

export default function MenuSection() {
  return (
    <section className="w-full flex flex-col min-h-screen bg-[#fefaf6] items-center px-4 py-8">
      <h2 className="text-3xl font-bold text-[#5c4033] mb-8">Menu</h2>

      <div className="grid grid-cols-2 gap-6 w-full max-w-md sm:max-w-xl">
        {menuItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 mb-4">
              <Image
                src={item.image}
                alt={item.name}
                fill
                priority
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 200px"
                style={{ objectFit: 'cover' }}
                className="rounded"
              />
            </div>
            <h3 className="text-md font-semibold text-[#5c4033] text-center">{item.name}</h3>
            <p className="text-sm text-[#5c4033] text-center">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
