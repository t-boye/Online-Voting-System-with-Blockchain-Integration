import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Results = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const response = await axios.get('/api/votes'); 
                setResults(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchResults(); 
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Election Results</h1>
            <div className="w-96">
                {/* Display results (e.g., in a table or list) */}
                <ul className="list-disc">
                    {results.map((result, index) => (
                        <li key={index}>
                            Voter: {result.voterAddress}, Candidate: {result.candidateAddress}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Results;