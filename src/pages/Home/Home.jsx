import React from "react";
import Hero from "./Hero";
import About from "./About";
import BMI from "./BMI";
import Services from "./Services";
import Banner from "./Banner";

const Home = () => {
  return (
    <>
      <div className="w-full h-auto overflow-hidden">
        <Hero />
        <About />
        <BMI />
        <Services />
        <Banner />
      </div>
    </>
  );
};

export default Home;
