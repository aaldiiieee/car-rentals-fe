import React from "react";
import HeroSection from "../container/HeroSection";
import Header from "../partials/Header";
import Footer from "../partials/Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <div className="bg-[#F1F3FF]">
        <Header />
        <HeroSection withContent />
      </div>
      <div className="container">{children}</div>
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;