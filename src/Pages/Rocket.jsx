import React from "react";
import { useState, useEffect } from "react";

const Rocket = () => {
  const [rocketData, setRocketData] = useState([]);
  const [singleData, setSingleData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("https://api.spacexdata.com/v3/rockets/");
      const jsonData = await data.json();
      setRocketData(jsonData);
    }

    fetchData();
  }, []);

  async function handleRocketClick(rocketId) {
    await fetch(`https://api.spacexdata.com/v3/rockets/${rocketId}`)
      .then((res) => res.json())
      .then((data) => setSingleData(data));
  }

  console.log(rocketData);
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">
          Select a Rocket
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {rocketData.map((rocket) => (
            <div
              key={rocket.id}
              className="p-4 bg-white shadow-lg rounded-lg hover:bg-blue-100 cursor-pointer"
              onClick={() => handleRocketClick(rocket.rocket_id)}
            >
              <h2 className="text-xl font-semibold text-blue-800">
                {rocket.rocket_name}
              </h2>
            </div>
          ))}
        </div>
      </div>
      {
        singleData && (
          <div className="container mx-auto bg-white p-6 rounded-lg shadow-lg">
        
          <img
                src={singleData?.flickr_images[0]}
                alt={singleData?.rocket_name}
                className="w-full mb-4"
              />
          <h1 className="text-3xl font-bold text-blue-900 mb-6">
            {singleData?.rocket_name}
          </h1>
          <p className="text-xl text-gray-700 mb-4">{singleData?.description}</p>
  
          {/* Rocket Info */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">
              Basic Information
            </h2>
            <p>
              <strong>Active:</strong> {singleData?.active ? "Yes" : "No"}
            </p>
            <p>
              <strong>Country:</strong> {singleData?.country}
            </p>
            <p>
              <strong>Company:</strong> {singleData?.company}
            </p>
            <p>
              <strong>First Flight:</strong> {singleData?.first_flight}
            </p>
            <p>
              <strong>Success Rate:</strong> {singleData?.success_rate_pct}%
            </p>
            <p>
              <strong>Cost per Launch:</strong> $
              {singleData?.cost_per_launch.toLocaleString()}
            </p>
          </div>
  
          {/* Dimensions and Mass */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">
              Dimensions & Mass
            </h2>
            <p>
              <strong>Height:</strong> {singleData?.height?.meters} meters (
              {singleData?.height?.feet} feet)
            </p>
            <p>
              <strong>Diameter:</strong> {singleData?.diameter?.meters} meters (
              {singleData?.diameter?.feet} feet)
            </p>
            <p>
              <strong>Mass:</strong> {singleData?.mass?.kg} kg (
              {singleData?.mass?.lb} lb)
            </p>
          </div>
  
          {/* Stages and Boosters */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">
              Stages & Boosters
            </h2>
            <p>
              <strong>Stages:</strong> {singleData?.stages}
            </p>
            <p>
              <strong>Boosters:</strong> {singleData?.boosters}
            </p>
          </div>
  
          {/* First Stage Info */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">
              First Stage
            </h2>
            <p>
              <strong>Reusable:</strong>{" "}
              {singleData?.first_stage?.reusable ? "Yes" : "No"}
            </p>
            <p>
              <strong>Engines:</strong> {singleData?.first_stage?.engines}
            </p>
            <p>
              <strong>Fuel Amount:</strong>{" "}
              {singleData?.first_stage?.fuel_amount_tons} tons
            </p>
            <p>
              <strong>Burn Time:</strong> {singleData?.first_stage?.burn_time_sec}{" "}
              seconds
            </p>
            <p>
              <strong>Thrust (Sea Level):</strong>{" "}
              {singleData?.first_stage?.thrust_sea_level.kN} kN (
              {singleData?.first_stage?.thrust_sea_level?.lbf} lbf)
            </p>
            <p>
              <strong>Thrust (Vacuum):</strong>{" "}
              {singleData?.first_stage?.thrust_vacuum?.kN} kN (
              {singleData?.first_stage?.thrust_vacuum?.lbf} lbf)
            </p>
          </div>
  
          {/* Second Stage Info */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">
              Second Stage
            </h2>
            <p>
              <strong>Engines:</strong> {singleData?.second_stage?.engines}
            </p>
            <p>
              <strong>Fuel Amount:</strong>{" "}
              {singleData?.second_stage?.fuel_amount_tons} tons
            </p>
            <p>
              <strong>Burn Time:</strong>{" "}
              {singleData?.second_stage?.burn_time_sec} seconds
            </p>
            <p>
              <strong>Thrust:</strong> {singleData?.second_stage?.thrust?.kN} kN (
              {singleData?.second_stage?.thrust?.lbf} lbf)
            </p>
            <p>
              <strong>Payload:</strong>{" "}
              {singleData?.second_stage?.payloads?.option_1}
            </p>
          </div>
  
          {/* Engine Info */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">Engine</h2>
            <p>
              <strong>Engine Type:</strong> {singleData?.engines?.type}
            </p>
            <p>
              <strong>Thrust (Sea Level):</strong>{" "}
              {singleData?.engines?.thrust_sea_level?.kN} kN (
              {singleData?.engines?.thrust_sea_level?.lbf} lbf)
            </p>
            <p>
              <strong>Thrust (Vacuum):</strong>{" "}
              {singleData?.engines?.thrust_vacuum?.kN} kN (
              {singleData?.engines?.thrust_vacuum?.lbf} lbf)
            </p>
            <p>
              <strong>Propellant 1:</strong> {singleData?.engines?.propellant_1}
            </p>
            <p>
              <strong>Propellant 2:</strong> {singleData?.engines?.propellant_2}
            </p>
          </div>
  
          {/* Landing Legs */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">
              Landing Legs
            </h2>
            <p>
              <strong>Number of Landing Legs:</strong>{" "}
              {singleData?.landing_legs?.number}
            </p>
          </div>
  
          {/* Wikipedia Link */}
          <div className="mb-8">
            <a
              href={singleData?.wikipedia}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Learn more on Wikipedia
            </a>
          </div>
        </div>
        )
      }
      
    </div>
  );
};

export default Rocket;
