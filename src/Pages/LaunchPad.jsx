import React, { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const LaunchPad = () => {
  const [launchData, setLaunchData] = useState([]);
  const [singleData, setSingleData] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("https://api.spacexdata.com/v3/launchpads");
      const jsonData = await data.json();
      setLaunchData(jsonData);
    }

    fetchData();
  }, []);

  async function handleClick(siteId, id) {
    await fetch(`https://api.spacexdata.com/v3/launchpads/${siteId}`)
      .then((res) => res.json())
      .then((data) => setSingleData(data));

    setActiveIndex(id);
  }

  // console.log(siteData)
  console.log(singleData);

  // console.log(siteData.length)

  console.log(launchData);

  return (
    <div className="bg-gray-50  text-white pt-10 pb-20 px-12 h-[670px] ">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">Select Any One</h1>
      <div className="w-full h-full flex gap-x-8">
        <div className="w-2/5 flex flex-col justify-between px-12 py-10 rounded-lg shadow-2xl">
          {launchData.map((item) => {
            const name = item ? item.location : null;
            return (
              <div
                key={item.id}
                className="p-3 bg-white shadow-lg rounded-lg hover:bg-blue-100 cursor-pointer"
              >
                <p
                  onClick={() => handleClick(item.site_id, item.id)}
                  className={`text-xl font-semibold text-blue-800`}
                >
                  {item.location.name}
                </p>
              </div>
            );
          })}
        </div>
        <div className="w-3/5 px-12 text-black py-10 rounded-lg shadow-2xl">
          {singleData ? (
            <div>
              <p className="text-3xl font-bold mb-2 text-blue-900 inline-block pr-4 ">
                {singleData.site_name_long}
              </p>
              <p className="mb-3 w-[85%]">
                <strong>Details :</strong>
                {singleData.details}
              </p>
              <div className="mb-10">
                <span className="px-2 py-1 rounded-md text-white font-medium bg-blue-800 ">
                  {singleData.status}
                </span>
              </div>
              <p className="mb-4">
                {singleData ? <strong>Location : </strong> : ""}
                {singleData.location.region}
              </p>
              <p className="mb-4">
                {singleData ? <strong>Vehicle Launched : </strong> : ""}
                {singleData.vehicles_launched}
              </p>
              <p className="mb-4">
                {singleData ? <strong>Attempted Launches : </strong> : ""}
                {singleData.attempted_launches}
              </p>
              <p className="mb-4">
                {singleData ? <strong>Success : </strong> : ""}
                {singleData.successful_launches}
              </p>
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
          ) : (
            <p className="text-center mt-44">Click to see details</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LaunchPad;
