import { Dumbbell } from "lucide-react";
import React, { useState } from "react";
import Label from "../../components/Label/Label";
import Input from "../../components/Form/Input";
import SecondaryBtn from "../../components/Button/SecondaryBtn";

const BMI = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    setBmi(bmi);
  }

  return (
    <>
      <div className="w-full h-auto flex items-center lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
        <div className="w-full h-auto flex items-center justify-center flex-col">
          <h6 className="lg:text-lg md:text-lg sm:text-base text-base font-medium text-gray-200 flex items-center gap-x-2 bg-black/20 rounded-t-md px-4 py-2">
            <Dumbbell className="w-4 h-4 -rotate-45 text-indigo-600" />{" "}
            Calculate Your BMI
          </h6>
          <div className="w-full h-auto flex items-end justify-center bg-black/20 rounded-md lg:gap-5 md:gap-5 sm:gap-3 gap-2 py-10 lg:px-0 md:px-0 sm:px-2 px-4 flex-wrap">
            <div className="lg:w-[25%] md:w-[40%] sm:w-[50%] w-full h-auto p-2">
              <Label htmlfor="weight" children={"Weight (Kg)"} />
              <Input
                id="weight"
                name="weight"
                placeholder="Enter Your Weight"
                type="text"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className="lg:w-[25%] md:w-[40%] sm:w-[50%] w-full h-auto p-2">
              <Label htmlfor="height" children={"height (cm)"} />
              <Input
                id="height"
                name="height"
                placeholder="Enter Your height"
                type="text"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div className="lg:w-[20%] md:w-[35%] sm:w-[50%] w-full h-auto p-2">
              <SecondaryBtn
                type="submit"
                className="w-full h-11 justify-center"
                children={"Calculate BMI"}
                onClick={calculateBMI}
              />
            </div>
          </div>
          {/* display BMI */}
          {bmi !== null && (
            <div className="bg-black/80 rounded-b-md px-6 py-2.5 ">
                <p className="text-indigo-600">
                    Your BMI:- <span className="font-bold">{bmi}</span>
                </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BMI;
