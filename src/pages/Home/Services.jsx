import { Dumbbell } from "lucide-react";
import TertiaryLink from "../../components/LinkBtn/TertiaryLink";
import { Link } from "react-router-dom";
import { GrYoga } from "react-icons/gr";
import { CgGym } from "react-icons/cg";
import { FaPersonRunning } from "react-icons/fa6";
import { GiBoxingGlove, GiGymBag } from "react-icons/gi";

const Services = () => {
  const services = [
    {
      id: 1,
      serviceImg:
        "https://media.istockphoto.com/id/625739874/photo/heavy-weight-exercise.webp?a=1&b=1&s=612x612&w=0&k=20&c=14miRkUbV41unFHikxTBBQbRuG9_7xt4svShwMCIaY0=",
      icon: <CgGym className="w-8 h-8 text-white" />,
      title: "Fitness",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "#services",
    },
    {
      id: 2,
      serviceImg:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHlvZ2ElMjBneW18ZW58MHx8MHx8fDA%3D",
      icon: <GrYoga className="w-8 h-8 text-white" />,
      title: "Yoga",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "#services",
    },
    {
      id: 3,
      serviceImg:
        "https://media.istockphoto.com/id/1059616710/photo/young-woman-exercising-on-treadmill.webp?a=1&b=1&s=612x612&w=0&k=20&c=r_Z_caGuZ78jzr-LGVJSE5gT6TVSxFdXrbnpo-WfOwQ=",
      icon: <GiGymBag className="w-8 h-8 text-white" />,
      title: "Gym",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "#services",
    },
    {
      id: 4,
      serviceImg:
        "https://images.unsplash.com/photo-1549995546-87cb41aa98a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFlcm9iaWN8ZW58MHx8MHx8fDA%3D",
      icon: <GrYoga className="w-8 h-8 text-white" />,
      title: "Aerobics",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "#services",
    },
    {
      id: 5,
      serviceImg:
        "https://media.istockphoto.com/id/1098287510/photo/getting-in-some-extra-practise.webp?a=1&b=1&s=612x612&w=0&k=20&c=AwWS9DdkR0uDx59XjMJxgaxG1wFdt0DPeuz-KcaUIbQ=",
      icon: <GiBoxingGlove className="w-8 h-8 text-white" />,
      title: "Boxing",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "#services",
    },

    {
      id: 6,
      serviceImg:
        "https://media.istockphoto.com/id/472151154/photo/excited-dance-class.webp?a=1&b=1&s=612x612&w=0&k=20&c=XmeJhK4mD2oeeF-Vgykyu9lTAp9U2JRkER20agdDB30=",
      icon: <GrYoga className="w-8 h-8 text-white" />,
      title: "Zumba",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "#services",
    },
  ];

  return (
    <>
      <div className="w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
        <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
          <Dumbbell className="w-4 h-4 -rotate-45 text-indigo-600" /> Our
          Services
        </h6>
        <div className="w-full h-auto flex items-center justify-center gap-x-4 gap-y-5 flex-wrap mb-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="lg:w-[24%] md:w-[48%] sm:w-[48%] w-full lg:h-[50vh] md:h-[53vh] sm:h-[58vh] h-[60vh] rounded-xl bg-black relative overflow-hidden cursor-pointer z-10 hover:-translate-y-2 ease-out duration-500 "
              style={{
                backgroundImage: `url("${service.serviceImg}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="w-full h-full bg-black/50 absolute top-0 left-0 -z-10"></div>
              <div className="w-full h-full flex items-center flex-col justify-center text-white p-4 z-50">
                <div className="w-14 h-14 rounded-full bg-indigo-600/20 border-4 border-indigo-600/80 flex items-center justify-center mb-5">
                  {service.icon}
                </div>
                <h1 className="text-xl text-gray-100 font-semibold text-center mb-4">
                  {service.title}
                </h1>
                <p className="text-base text-gray-400 font-normal text-center mb-4">
                  {service.desc}
                </p>
                <TertiaryLink link="#services">Read More </TertiaryLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
