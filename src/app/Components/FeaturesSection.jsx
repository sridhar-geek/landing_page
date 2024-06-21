import React from "react";
import Image from "next/image";

const FeaturesSection = () => {
  // Features data
  const featuresData = [
    {
      id: 1,
      img: "/Features/Floating pool.png",
      title: "Floating Pools",
    },
    {
      id: 2,
      img: "/Features/Rooms.png",
      title: "Spacious Cabins Like Rooms",
    },
    {
      id: 3,
      img: "/Features/Sea facing.png",
      title: "Sea Facing Swimming Pools",
    },
    {
      id: 4,
      img: "/Features/Gym.png",
      title: "Gymnasium & Fitness",
    },
  ];

  return (
    <article className="text-center  text-primary-dark my-10">
      {/* Heading */}
      <h2 className="text-3xl font-light">
        HARBOUR <br /> LIGHTS
      </h2>
      <span className="text-sm">
        de GRISOGONO <br />
        <span className="text-[9px]">GENEVE</span>
      </span>
      <h1 className="text-3xl mt-6 mb-2 font-medium ">FEATURES & AMENITIES</h1>
      <p className="text-black mx-16 text-lg md:text-xl">
        Habour Lights beautifully honours martime voyages embracing an apulent
        seafront lifestyle. Its martime-inspired amenities provide an unmatched
        seaside experience, offering a life of tranquility and bliss
      </p>
      {/* Cards */}
      <div className="margin grid grid-cols-2 md:grid-cols-4 gap-8 md:flex-row justify-between items-center my-7">
        {/* Single Card */}
        {featuresData.map((features) => (
          <div
            key={features.id}
            className="shadow-lg rounded-xl gap-5 min-w-36 max-w-48 py-2 shadow-gray-400 flex justify-center flex-col items-center"
          >
            <Image src={features.img} alt="floating" width={150} height={100} />
            <h5 className="font-medium text-xl">{features.title}</h5>
          </div>
        ))}
      </div>
      <p className="text-black text-end text-sm">
        * T&Cs apply | **Based on similar branded projects in the last 2 years.{" "}
        <a href="" className="underline">
          Source 1
        </a>{" "}
        |{" "}
        <a href="" className="underline">
          Source 2
        </a>
      </p>
    </article>
  );
};

export default FeaturesSection;
