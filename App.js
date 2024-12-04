import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Greeting from './components/Greeting';
import Register from './components/Register';
import MainPage from './components/MainPage';
import AttendanceList from './components/AttendanceList'; // import the new component

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/greeting" element={<Greeting />} />
                <Route path="/register" element={<Register />} />
                <Route path="/attendance" element={<AttendanceList />} /> {/* add route for attendance */}
            </Routes>
        </Router>
    );
}

export default App;
