import { Dumbbell } from "lucide-react";
import React from "react";
import SecondaryBtn from "../../components/Button/SecondaryBtn";

const About = () => {
  return (
    <>
      <div className="w-full h-auto flex items-center justify-between gap-7 lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 flex-wrap-reverse">
        <div className="lg:w-[38%] md:w-full sm:w-full w-full h-auto relative overflow-hidden rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1584466977773-e625c37cdd50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM2fHx8ZW58MHx8fHx8"
            alt="about img1"
            className="w-full lg:h-[70vh] md:h-[68vh] sm:h-[60vh] h-[55vh] object-cover"
          />
        </div>
        <div className="lg:w-[50%] md:w-full sm:w-full w-full h-auto lg:text-start md:text-start sm:text-start text-center ">
          <h6 className="text-lg font-medium text-gray-200 flex items-center lg:justify-start md:justify-start sm:justify-center justify-center gap-x-2 mb-3">
            <Dumbbell className="w-4 h-4 -rotate-45 text-indigo-600" /> About Us
          </h6>
          <h1 className="lg:text-3xl md:text-3xl sm:text-2xl text-xl font-semibold text-gray-200 mb-4 leading-normal lg:pe-5 md:pe-4 sm:pe-1 pe-0">
            Effortless strength, Timely gains: Building better bodies, Faster
          </h1>
          <p className="lg:text-base md:text-base sm:text-sm text-sm text-gray-500 font-medium mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            iure repellendus neque at temporibus commodi, quis alias sint
            molestias provident illum fugit optio, rerum quam nemo dolor amet
            odio porro sapiente maiores. Tenetur unde tempore officiis et, cum
            labore ullam dolore assumenda, voluptates, placeat tempora dolorum
            saepe. Aspernatur, corporis autem alias praesentium, quas, hic error
            quaerat necessitatibus officia asperiores est.
          </p>
          <SecondaryBtn className="lg:w-auto md:w-auto sm:w-full w-full px-7 py-2 text-base font-medium uppercase justify-center">Become a member</SecondaryBtn>
        </div>
      </div>
    </>
  );
};

export default About;
