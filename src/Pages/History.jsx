import React, { useEffect, useState } from 'react'

const History = () => {

  const[history,setHistory] = useState([])

  useEffect(()=>{
    async function fetchData() {
      const data = await fetch("https://api.spacexdata.com/v3/history");
      const jsonData = await data.json();
      setHistory(jsonData);
    }
    fetchData()
  },[])

  const formatDate = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleString();
  };

  console.log(history)

  return (
    <div className="bg-gray-50 py-10 px-10 min-h-screen overflow-scroll scrollbar-hide">
     
        <div className="grid grid-cols-3 gap-6">
          {history.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-lg shadow-lg space-y-4"
            >
              {/* Title */}
              <h2 className="text-2xl font-semibold text-blue-900">{item.title}</h2>

              {/* Flight Number */}
              <p className="text-lg text-gray-700">
                <span className="font-medium">Flight Number:</span> {item.flight_number ? item.flight_number : "Not Mentioned"}
              </p>

              {/* Event Date */}
              <p className="text-lg text-gray-700">
                <span className="font-medium">Event Date:</span> {formatDate(item.event_date_unix)}
              </p>

              {/* Mission Details */}
              <p className="text-base text-gray-800">
                <span className="font-medium">Details:</span> {item.details || 'No details available'}
              </p>

              {/* Links */}
              <div className="space-x-4">
                {item.links.article && (
                  <a
                    href={item.links.article}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Read Article
                  </a>
                )}
                {item.links.wikipedia && (
                  <a
                    href={item.links.wikipedia}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Wikipedia
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      
    </div>
  )
}

export default History