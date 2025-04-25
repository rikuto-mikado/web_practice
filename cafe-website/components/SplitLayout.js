import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import ContactSection from "@/components/ContactSection";
import LocationSection from "@/components/LocationSection";

const images = [
  "/cafe-site-home.png",
  "/cafe-site-home02.png",
  "/cafe-site-contact.png",
];

export default function SplitLayout() {
  const router = useRouter();
  const [section, setSection] = useState("hero");
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const view = router.query.view;
    if (view === "menu" || view === "contact") {
      setSection(view);
    } else {
      setSection("hero");
    }
  }, [router.query.view]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSectionChange = (target) => {
    setSection(target);
    router.push(`/?view=${target}`, undefined, { shallow: true });
  };

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
                onMenu={() => handleSectionChange("menu")}
                onContact={() => handleSectionChange("contact")}
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
    <section className="flex flex-col md:flex-row h-screen overflow-x-hidden">
      <div className="relative md:w-1/2 w-full h-64 md:h-full hidden md:block">
        <img
          src={images[bgIndex]}
          alt="cafe_interior"
          className="w-full h-full object-cover transition-opacity duration-1000"
        />
      </div>
      <div className="md:w-1/2 w-full bg-[#fefaf6] text-[#5c4033] flex flex-col p-6 overflow-y-auto">
        {renderRightContent()}
      </div>
    </section>
  );
}
