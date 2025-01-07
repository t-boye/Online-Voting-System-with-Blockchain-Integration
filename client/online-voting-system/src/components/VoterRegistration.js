import React, { useState } from 'react';
import axios from 'axios';

const VoterRegistration = () => {
  const [name, setName] = useState('');
  const [indexNumber, setIndexNumber] = useState(''); // Use indexNumber instead of address
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null); // Store error message

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true
    setError(null); // Clear any previous errors

    try {
      const response = await axios.post('/api/voters/register', { name, indexNumber });
      console.log(response.data);
      alert('Voter registered successfully!');
      setName(''); // Clear form after successful registration
      setIndexNumber('');
    } catch (error) {
      console.error(error);
      setError('Error registering voter. Please try again.'); // Set specific error message
    } finally {
      setIsLoading(false); // Set loading state to false regardless of success or error
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Voter Registration</h1>
      <form onSubmit={handleSubmit} className="w-96">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="indexNumber" className="block text-sm font-medium text-gray-700">
            Unique Index Number
          </label>
          <input
            type="text"
            id="indexNumber"
            value={indexNumber}
            onChange={(e) => setIndexNumber(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={isLoading} // Disable button while loading
        >
          {isLoading ? 'Registering...' : 'Register'}
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default VoterRegistration;