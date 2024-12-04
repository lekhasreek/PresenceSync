import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css'; // You can style it as per your need

function MainPage() {
    const navigate = useNavigate();

    const handleRegister = () => {
        navigate('/register');
    };

    const handleLogin = () => {
        navigate('/login');
    };

    const handleAttendanceList = () => {
        navigate('/attendance');
    };

    return (
        <div className="main-page">
            <h1>Welcome to PresenceSync</h1>
            <button onClick={handleRegister}>Register</button>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleAttendanceList}>Attendance List</button>
        </div>
    );
}

export default MainPage;
