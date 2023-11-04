import React from 'react';

const LocationInfo = ({ locationInfo, onClear }) => {
  if (!locationInfo) {
    return null;
  }

  

  return (
    <div className="mt-4 p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold">Location Information</h2>
      <p>
        Country: {`${locationInfo["country"]} - ${locationInfo["country abbreviation"]}`}
        <br />
      </p>
 
      <div>
        <h3>Places : </h3>
        {
            locationInfo.places.map((place, index) => {
                return(
                    <div key={index} className='my-2 p-2 rounded-lg bg-slate-100'>
                        <h4>Name : {place["place name"]}</h4>
                        <p>State : {place["state"]} - {place["state abbreviation"]}</p>
                    </div>
                )
            })
        }
      </div>
      <button
        onClick={onClear}
        className="mt-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg"
      >
        Clear
      </button>
    </div>
  );
}

export default LocationInfo;
