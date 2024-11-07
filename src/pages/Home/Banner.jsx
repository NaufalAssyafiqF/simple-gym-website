import React from "react";
import PrimaryBtn from "../../components/Button/PrimaryBtn";

const Banner = () => {
  return (
    <>
      <div
        className="w-full h-[55vh] flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 relative z-10"
        style={{
          backgroundImage: `url("https://media.istockphoto.com/id/1758416916/photo/excercise-equipment-in-a-modern-gym.webp?a=1&b=1&s=612x612&w=0&k=20&c=t-zG8fH-XRiOjNlB68xhDHb45p6DI5qtEUEL8M4nrNI=")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full h-full bg-black/40 absolute top-0 left-0 -z-10"></div>
        <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-4xl font-bold text-gray-200 uppercase mb-4 text-center">No <span className="text-indigo-600">Pain</span>, No{" "} <span className="text-indigo-600">Gain</span></h1>
        <p className="text-lg text-gray-300 font-medium mb-8 text-center capitalize">Ignite your fitness journey with premium solutions</p>
        <PrimaryBtn children={"Become a Member"} className="px-10 py-3 uppercase rounded-full"/>
      </div>
    </>
  );
};

export default Banner;
