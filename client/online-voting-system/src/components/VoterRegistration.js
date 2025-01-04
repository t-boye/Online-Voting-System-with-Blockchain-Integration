import React, { useState } from 'react';
import axios from 'axios';

const VoterRegistration = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/voters/register', { name, address });
            console.log(response.data);
            // ... (Handle successful registration)
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* ... (Input fields for name and address) */}
            <button type="submit">Register</button>
        </form>
    );
};

export default VoterRegistration;