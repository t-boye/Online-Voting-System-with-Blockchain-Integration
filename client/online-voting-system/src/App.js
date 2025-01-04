import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VoterRegistration from './components/VoterRegistration';
import CandidateRegistration from './components/CandidateRegistration';
import VotingForm from './components/VotingForm';
import Results from './components/Results';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<VoterRegistration />} />
                <Route path="/candidate" element={<CandidateRegistration />} />
                <Route path="/vote" element={<VotingForm />} />
                <Route path="/results" element={<Results />} />
            </Routes>
        </Router>
    );
}

export default App;