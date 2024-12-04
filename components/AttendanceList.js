import React, { useState, useEffect } from 'react';
import './AttendanceList.css'; // Import CSS file

function AttendanceList() {
    const [recognitionData, setRecognitionData] = useState([]);
    const [loginData, setLoginData] = useState([]);

    useEffect(() => {
        const fetchAttendanceData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/attendance');
                if (response.ok) {
                    const data = await response.json();
                    setRecognitionData(data.recognition_data || []); // Set recognition data
                    setLoginData(data.login_data || []); // Set login data
                } else {
                    console.error('Failed to fetch attendance data');
                }
            } catch (error) {
                console.error('Error fetching attendance data', error);
            }
        };

        fetchAttendanceData();
    }, []);

    return (
        <div className="attendance-list">
            <h2>Attendance List</h2>

            <div className="table-container">
                <h3>Recognition Counts</h3>
                {recognitionData.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Recognition Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recognitionData.map((student) => (
                                <tr key={student._id}>
                                    <td>{student.username}</td>
                                    <td>{student.recognition_count}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No recognition data available</p>
                )}
            </div>

            <div className="table-container">
                <h3>Login Times</h3>
                {loginData.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Login Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loginData.map((login, index) => (
                                <tr key={`${login._id}-${index}`}>
                                    <td>{login.username}</td>
                                    <td>{new Date(login.login_time).toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No login data available</p>
                )}
            </div>
        </div>
    );
}

export default AttendanceList;
