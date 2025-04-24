import { useState } from "react";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import ContactSection from "@/components/ContactSection";
import LocationSection from "@/components/LocationSection";

export default function SplitLayout() {
  const [section, setSection] = useState("hero");

  const renderRightContent = () => {
    switch (section) {
      case "menu":
        return <MenuSection />;
      case "contact":
        return <ContactSection />;
      default:
        return (
          <>
            <div className="min-h-[80vh] flex flex-col justify-center items-center">
              <HeroSection
                onMenu={() => setSection("menu")}
                onContact={() => setSection("contact")}
              />
            </div>
            <div className="min-h-screen flex flex-col justify-center items-center">
              <LocationSection />
            </div>
          </>
        );
    }
  };

  return (
    <section className="flex flex-col md:flex-row h-screen">
      <div className="relative md:w-1/2 w-full h-64 md:h-full hidden md:block">
        <Image
          src="/cafe-site-home.png"
          alt="cafe_interior"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="md:w-1/2 w-full bg-[#fefaf6] text-[#5c4033] flex flex-col p-6 overflow-y-auto">
        {renderRightContent()}
      </div>
    </section>
  );
}
