import React, { useState } from 'react';
import axios from 'axios';

const CandidateRegistration = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/candidates/register', { name, address });
            console.log(response.data);
            // Handle successful registration
            alert('Candidate registered successfully!'); 
        } catch (error) {
            console.error(error);
            alert('Error registering candidate.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Candidate Registration</h1>
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
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                        Address (Blockchain)
                    </label>
                    <input 
                        type="text" 
                        id="address" 
                        value={address} 
                        onChange={(e) => setAddress(e.target.value)} 
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
                        required 
                    />
                </div>
                <button 
                    type="submit" 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default CandidateRegistration;