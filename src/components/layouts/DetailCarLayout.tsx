import React from "react";
import HeroSection from "../container/HeroSection";
import Header from "../partials/Header";
import Footer from "../partials/Footer";

const DetailCarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <div className="bg-[#F1F3FF]">
        <Header />
        <HeroSection form="register" />
      </div>
      <div className="container mt-20">{children}</div>
      <Footer />
    </React.Fragment>
  );
};

export default DetailCarLayout;
