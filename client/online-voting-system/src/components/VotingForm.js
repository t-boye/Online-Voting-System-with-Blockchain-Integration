import React, { useState } from 'react';
import axios from 'axios';

const VotingForm = () => {
    const [candidateAddress, setCandidateAddress] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/votes/castVote', { 
                voterAddress: 'YOUR_VOTER_ADDRESS', // Replace with actual voter address
                candidateAddress 
            });
            console.log(response.data);
            // Handle successful vote casting
            alert('Vote cast successfully!'); 
        } catch (error) {
            console.error(error);
            alert('Error casting vote.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Cast Your Vote</h1>
            <form onSubmit={handleSubmit} className="w-96">
                <div className="mb-4">
                    <label htmlFor="candidateAddress" className="block text-sm font-medium text-gray-700">
                        Candidate Address
                    </label>
                    <input 
                        type="text" 
                        id="candidateAddress" 
                        value={candidateAddress} 
                        onChange={(e) => setCandidateAddress(e.target.value)} 
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
                        required 
                    />
                </div>
                <button 
                    type="submit" 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Vote
                </button>
            </form>
        </div>
    );
};

export default VotingForm;