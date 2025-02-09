import React from "react";
import HeroSection from "../container/HeroSection";
import Header from "../partials/Header";
import Footer from "../partials/Footer";

const CarsListLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <div className="bg-[#F1F3FF]">
        <Header />
        <HeroSection withContent withSearch />
      </div>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-16 md:pb-0 pb-10 gap-6">
          {children}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default CarsListLayout;
