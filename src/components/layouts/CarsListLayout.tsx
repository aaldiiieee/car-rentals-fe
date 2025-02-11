import React from "react";
import HeroSection from "../container/HeroSection";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { useSearchParams } from "react-router";

const CarsListLayout = ({ children }: { children: React.ReactNode }) => {
  const [searchParams] = useSearchParams();

  const driverType = searchParams.get("driverType");
  const totalPassengers = searchParams.get("totalPassengers");

  const withContent = driverType === null && totalPassengers === null;

  return (
    <React.Fragment>
      <div className="bg-[#F1F3FF]">
        <Header />
        <HeroSection withContent={withContent} form="filter" />
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
