import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const LandingPad = () => {

  const [landingData, setLandingData] = useState([]);
  const [singleData, setSingleData] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("https://api.spacexdata.com/v3/landpads");
      const jsonData = await data.json();
      setLandingData(jsonData);
    }

    fetchData();
  }, []);

  async function handleClick(id) {
    await fetch(`https://api.spacexdata.com/v3/landpads/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleData(data));

    setActiveIndex(id);
  }

  console.log(singleData);

  console.log(activeIndex)  

  console.log(landingData);


  return (
    <div className="bg-gray-50  text-white pt-10 pb-20 px-12 h-[670px] ">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">
          Select Any One
        </h1>
    <div className="w-full h-full flex gap-x-8">
      <div className="w-2/5 flex flex-col justify-between px-12 py-10 rounded-lg shadow-2xl overflow-y-scroll scrollbar-hide">
        {landingData.map((item) => {
          const name = item ? item.location : null;
          return (
            <div key={item.id} className="p-3 bg-white shadow-lg rounded-lg hover:bg-blue-100 cursor-pointer" >
              <p  
                onClick={() => handleClick(item.id)}
                className={`text-xl font-semibold text-blue-800`}
              >
                {item.location.name}
              </p>
            </div>
          );
        })}
      </div>
      <div className="w-3/5 px-12 py-10 text-black rounded-lg shadow-2xl overflow-y-scroll scrollbar-hide">
        {
          singleData ? (
              <div  >
                  <p className="text-3xl font-bold mb-2  text-blue-900 inline-block pr-4 ">{singleData.location.name}</p>
                  <br/>
                  <p className="text-base font-bold mb-2 text-blue-800 inline-block  pr-4 ">{singleData.full_name}</p>
                  <p className="mb-3  w-[95%]"><strong>Description : </strong>{singleData.details}</p>
                  <div className="mb-10"><span className="px-2 py-1 rounded-md bg-blue-800 text-white font-medium " >{singleData.status}</span></div>
                  <p className="mb-4">{singleData ? <strong>Location : </strong>: ''}{singleData.location.region}</p>
                  <p className="mb-4">{singleData ? <strong>Landing Type : </strong>: ''}{singleData.landing_type}</p>
                  <p className="mb-4">{singleData ? <strong>Attempted Launches : </strong>: ''}{singleData.attempted_landings}</p>
                  <p className="mb-4">{singleData ? <strong>Success : </strong>: ''}{singleData.successful_landings}</p>
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

          ) : <p className="text-center mt-44">Click to see details</p>
        }
      </div>
    </div>
  </div>
  )
}

export default LandingPad