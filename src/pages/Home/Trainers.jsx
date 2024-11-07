import { Dumbbell } from "lucide-react";
import React from "react";
import TertiaryLink from "../../components/LinkBtn/TertiaryLink";
import SecondaryLink from "../../components/LinkBtn/SecondaryLink";

const Trainers = () => {
  const trainers = [
    {
      id: 1,
      trainerImg:
        "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2022/07/ApolloCrews_07122022PM_4001_profile--b8d2a2b039636a09c9cdb87a3491c4ec.png",
      name: "Apollo Crews",
      role: "Body Building Coach",
    },
    {
      id: 2,
      trainerImg:
        "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2022/02/Big_E_Profile--ac839d080afcadad4764eb2a660246c9.png",
      name: "Dr. Big E",
      role: "Gym Trainer",
    },
    {
      id: 3,
      trainerImg:
        "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2023/12/Kelly_Kincaid_PROFILE--ec59190fbff378f512b90794fb2112e2.png",
      name: "Mrs. Kelly Kincaid",
      role: "Prof. fitness coach",
    },
    {
      id: 4,
      trainerImg:
        "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2022/09/Kevin_OWens_PROFILE--05fe489008b716e22e4d0abeba8b4939.png",
      name: "Kevin Owens",
      role: "Prof. wrestling coach",
    },
  ];
  return (
    <>
      <div className="w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
        <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
          <Dumbbell className="w-4 h-4 -rotate-45 text-indigo-600" /> Our Expert
          Trainers
        </h6>
        <div className="w-full h-auto flex items-center justify-center lg:gap-x-8 md:gap-x-6 sm:gap-x-4 gap-x-3 lg:gap-y-8 md:gap-y-6 sm:gap-y-4 gap-y-3 flex-wrap mb-10">
          {trainers.map((trainer) => (
            <div
              className="lg:w-[23%] md:w-[48%] sm:w-[48%] w-full lg:h-[50vh] md:h-[53vh] sm:h-[58vh] h-[60vh] rounded-xl overflow-hidden relative hover:-translate-y-2 ease-out duration-500 cursor-pointer"
              key={trainer.id}
            >
              <img
                src={trainer.trainerImg}
                className="w-full h-full object-cover"
              />
              <div className="w-full h-auto bg-gray-900/70 absolute bottom-0 left-0 py-4 px-2 flex items-center justify-center flex-col">
                <h1 className="text-xl text-white font-semibold">
                  {trainer.name}
                </h1>
                <p className="text-sm text-gray-300">{trainer.role}</p>
              </div>
            </div>
          ))}
        </div>
        <SecondaryLink link={"#"} children={"View All Trainers"} />
      </div>
    </>
  );
};

export default Trainers;
