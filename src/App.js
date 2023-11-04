import React, { useState } from 'react';
import ZipCodeForm from './components/ZipCodeForm';
import LocationInfo from './components/LocationInfo';

function App() {
  const [locationInfo, setLocationInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchLocation = async (postalCode) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.zippopotam.us/in/${postalCode}`);
      if (response.ok) {
        const data = await response.json();
        setLocationInfo(data);
        console.log(data)
      } else {
        throw new Error('API call failed');
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setLocationInfo(null);
    setError(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Zip Code Information App</h1>
      <ZipCodeForm onFetchLocation={handleFetchLocation} loading={loading} />
      {error && <div className="text-red-500 my-4">{error.message}</div>}
      <LocationInfo locationInfo={locationInfo} onClear={handleClear} />
    </div>
  );
}

export default App;
