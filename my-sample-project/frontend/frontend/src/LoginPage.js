import React, { useState } from 'react';
import axios from 'axios';
import './LoginPage.css';
// import {useNavigate} from "react-router-dom"; // Import the CSS file

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/login', { username, password });
            console.log(response.data); // Handle success, such as redirecting to dashboard
            // navigate('./Lib_MainPage');
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    return (
        <div className="container">
            <div className="form-container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="label">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="input"
                        />
                    </div>
                    <div className="form-group">
                        <label className="label">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input"
                        />
                    </div>
                    <button type="submit" className="button">Login</button>
                </form>
            </div>
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default LoginPage;
