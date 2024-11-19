import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Mission = () => {

  const [missionData, setMissionData] = useState([]);
  const [singleData, setSingleData] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("https://api.spacexdata.com/v3/missions");
      const jsonData = await data.json();
      setMissionData(jsonData);
    }

    fetchData();
  }, []);

  async function handleClick(missionId) {
    await fetch(`https://api.spacexdata.com/v3/missions/${missionId}`)
      .then((res) => res.json())
      .then((data) => setSingleData(data));

    setActiveIndex(missionId);
  }

  console.log(singleData);

  console.log(activeIndex)

  console.log(missionData);


  return (
    <div className="bg-gray-50  text-white pt-10 pb-20 px-12 h-[670px] ">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">
          Select a Mission
        </h1>
      <div className="w-full h-full flex gap-x-8">
        <div className="w-2/5 flex flex-col justify-between gap-3 px-12 py-4 rounded-lg shadow-2xl overflow-y-scroll scrollbar-hide">
        {
            missionData.map((item)=>{
              return(
                <div key={item.mission_id} className="p-3 bg-white shadow-lg rounded-lg hover:bg-blue-100 cursor-pointer">
                  <p onClick={()=>handleClick(item.mission_id)} className={`text-xl font-semibold text-blue-800`}>{item.mission_name}</p>
                </div>
              )
            })
        }
        </div>
        <div className="w-3/5 px-12 py-10 text-black  rounded-lg shadow-2xl  overflow-y-scroll scrollbar-hide">
            {
              singleData ? (
                <div >
                  <h1 className="text-3xl font-bold text-blue-900 mb-1">{singleData.mission_name}</h1>
                  <p className="text-sm font-bold text-blue-900 mb-6">{singleData.mission_id}</p>
                <div>
                  <p className=""><strong className="mb-1">Payloads : </strong>
                  {
                    singleData && singleData.payload_ids.map((item)=>{


                      return(
                            <h1 className="inline-block mr-6" >{item}</h1>
                      )
                    })
                  }
                  </p>
                  </div>
                  <br/>
                  <div>
                    <strong className="mb-1">Manufacturers : </strong>
                  {
                    singleData && singleData.manufacturers.map((item)=>{


                      return(
                            <h1 className="inline-block mr-6 mb-5" >{item}</h1>
                      )
                    })
                  }
                  </div>
                  <strong>Description : </strong>{singleData.description}
                </div>
              ) : <p className="text-center mt-44">Click to see details</p>
            }
        </div>
      </div>
    </div>
  );
};

export default Mission;
