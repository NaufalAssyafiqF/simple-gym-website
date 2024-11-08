import { Dumbbell } from "lucide-react";
import React from "react";

const Popular = () => {
  const exercises = [
    {
      id: 1,
      trainerImg:
        "https://media.istockphoto.com/id/1992830316/photo/group-of-university-students-in-physical-education-class.webp?a=1&b=1&s=612x612&w=0&k=20&c=SyMBaLqk81ZxVNN98zZucdiOe_Z2JaDN4eKI6zD4neg=",
      name: "Warm up",
      duration: 15,
      sets: 3,
      calories: 100,
    },
    {
      id: 2,
      trainerImg:
        "https://media.istockphoto.com/id/1265193456/photo/young-handsome-man-doing-exercises-in-gym-shoulder-workout-with-dumbbell-fitness-health-club.webp?a=1&b=1&s=612x612&w=0&k=20&c=S-o5uFyVQKXyw5qnNEXhHSaEd-kBETd2f2fN8PKhrJE=",
      name: "Shoulder Workout",
      duration: 20,
      sets: 4,
      calories: 150,
    },
    {
      id: 3,
      trainerImg:
        "https://plus.unsplash.com/premium_photo-1683133269843-09a177048cef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8eW9nYXxlbnwwfHwwfHx8MA%3D%3D",
      name: "Yoga Session",
      duration: 55,
      sets: 5,
      calories: 250,
    },
    {
      id: 4,
      trainerImg:
        "https://images.unsplash.com/photo-1434608519344-49d77a699e1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGxlZyUyMHdvcmtvdXR8ZW58MHx8MHx8fDA%3D",
      name: "Leg Workout",
      duration: 18,
      sets: 4,
      calories: 120,
    },
  ];
  return (
    <>
      <div className="w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
        <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
          <Dumbbell className="w-4 h-4 -rotate-45 text-indigo-600" /> Our
          Popular Exercises
        </h6>
        <div className="w-full h-auto flex items-center gap-x-5 gap-y-6 lg:flex-nowrap md:flex-wrap sm:flex-wrap flex-wrap">
          {exercises.map((exercise) => (
            <div
              key={exercise.id}
              className="lg:w-[24%] md:w-[48%] sm:w-[48%] w-full h-auto rounded-lg overflow-hidden hover:shadow hover:shadow-indigo-900/40 ease-out duration-700 cursor pointer"
            >
              <img
                src={exercise.trainerImg}
                alt="exercise img"
                className="w-full lg:h-[30vh] md:h-[33vh] sm:h-[38vh] h-[40vh] object-cover rounded-lg "
              />
              <div className="w-full h-auto py-4 px-3">
                <h1 className="text-lg text-white font-semibold mb-1">
                  {exercise.name}
                </h1>
                <div className="w-full h-auto flex items-center gap-x-2">
                  <p className="text-sm  text-gray-300">
                    {exercise.duration} min
                  </p>
                  <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                  <p className="text-sm  text-gray-300">{exercise.sets} sets</p>
                  <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                  <p className="text-sm  text-gray-300">
                    {}
                    {exercise.calories} calories
                  </p>
                  <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Popular;
