import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import PrimaryBtn from "../../components/Button/PrimaryBtn";

const Hero = () => {
  const swiperData = [
    {
      id: 1,
      bgImg:
        "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
      slogan: "Keep your body",
      title: "Burning",
      desc: "Get ready to burn off some serious fat with our high quality products.",
    },
    {
      id: 2,
      bgImg:
        "https://plus.unsplash.com/premium_photo-1664109999775-3f1f3f212ad8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
      slogan: "Just Believe In",
      title: "Yourself",
      desc: "We are here to help you achieve your goals.",
    },
    {
      id: 3,
      bgImg:
        "https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=1682&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slogan: "Grow Your Body",
      title: "Strength",
      desc: "Make your body stronger with our high quality products.",
    },
  ];

  return (
    <>
      <div className="w-full h-auto">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper w-full h-auto"
        >
          {swiperData.map((data) => (
            <SwiperSlide
              key={data.id}
              className="w-full h-[70vh] relative bg-indigo-600"
              style={{
                backgroundImage: `url("${data.bgImg}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="w-full h-full bg-black/80 absolute top-0 left-0 -z-10"></div>
              <div className="w-full h-full flex items-center justify-center flex-col z-16 lg:px-24 md:px-16 sm:px-6 px-4">
                <h5 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-indigo-400 font-semibold mb-2 uppercase">
                  {data.slogan}
                </h5>
                <h1 className="lg:text-7xl md:text-6xl sm:text-5xl text-4xl text-gray-200 font-bold uppercase">
                  {data.title}
                </h1>
                <p className="lg:text-xl md:text-lg sm:text-base text-base text-gray-300 font-medium">
                  {data.desc}
                </p>
                <PrimaryBtn className="lg:w-[15%] md:w-[35%] sm:w-[75%] w-[80%] h-14 mt-5 text-xl font-semibold rounded-full">
                  Get Started
                </PrimaryBtn>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* banner type card */}
        <div className="w-full h-auto flex items-center lg:justify-between md:justify-between sm:justify-center justify-center lg:gap-7 md:gap-7 sm:gap-5 gap-5 lg:px-24 md:px-16 sm:px-6 px-6 mt-6 flex-wrap">
            <div className="flex items-center justify-center flex-col lg:w-fit md:w-[48%] sm:w-[48%] w-full lg:py-6 md:py-7 sm:py-8 py-9 px-10 bg-black/10 hover:bg-black/30 rounded-md ease-out duration-300 cursor-pointer">
                <h5 className="text-4xl text-indigo-400 font-semibold mb-2 uppercase">1200+</h5>
                <p className="text-lg text-gray-600 font-medium">Members</p>
            </div>
            <div className="flex items-center justify-center flex-col lg:w-fit md:w-[48%] sm:w-[48%] w-full lg:py-6 md:py-7 sm:py-8 py-9 px-10 bg-black/10 hover:bg-black/30 rounded-md ease-out duration-300 cursor-pointer">
                <h5 className="text-4xl text-indigo-400 font-semibold mb-2 uppercase">120+</h5>
                <p className="text-lg text-gray-600 font-medium">Expert Trainers</p>
            </div>
            <div className="flex items-center justify-center flex-col lg:w-fit md:w-[48%] sm:w-[48%] w-full lg:py-6 md:py-7 sm:py-8 py-9 px-10 bg-black/10 hover:bg-black/30 rounded-md ease-out duration-300 cursor-pointer">
                <h5 className="text-4xl text-indigo-400 font-semibold mb-2 uppercase">13+</h5>
                <p className="text-lg text-gray-600 font-medium">Years of Experience</p>
            </div>
            <div className="flex items-center justify-center flex-col lg:w-fit md:w-[48%] sm:w-[48%] w-full lg:py-6 md:py-7 sm:py-8 py-9 px-10 bg-black/10 hover:bg-black/30 rounded-md ease-out duration-300 cursor-pointer">
                <h5 className="text-4xl text-indigo-400 font-semibold mb-2 uppercase">368+</h5>
                <p className="text-lg text-gray-600 font-medium">GYMs</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
