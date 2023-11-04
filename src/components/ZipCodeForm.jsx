import React, { useState } from 'react';

const ZipCodeForm = ({ onFetchLocation, loading }) => {
  const [postalCode, setPostalCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFetchLocation(postalCode);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow-md">
      <input
        type="text"
        placeholder="Enter postal code"
        className="p-2 rounded-lg border border-gray-300"
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
        disabled={loading}
      />
      <button
        type="submit"
        className="mt-2 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg"
        disabled={loading}
      >
        {loading ? 'Fetching...' : 'Fetch Location'}
      </button>
    </form>
  );
}

export default ZipCodeForm;
