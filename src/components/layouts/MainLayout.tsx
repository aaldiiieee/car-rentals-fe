import HeroSection from "../container/HeroSection";
import Header from "../partials/Header";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="bg-[#F1F3FF]">
        <Header />
        <HeroSection withContent />
      </div>
      <div className="container">
        {children}
      </div>
    </>
  );
};
