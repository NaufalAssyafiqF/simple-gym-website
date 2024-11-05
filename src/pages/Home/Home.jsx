import React from "react";
import Hero from "./Hero";
import About from "./About";

const Home = () => {
  return (
    <>
      <div className="w-full h-auto overflow-hidden">
        <Hero />
        <About />
      </div>
    </>
  );
};

export default Home;
