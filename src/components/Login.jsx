import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Logging in with:", { username, password });
        // Add your login logic here (e.g., API call)
    };

    return (
        <div className="login-container" style={{ maxWidth: '400px', margin: 'auto' }}>
            <h2>Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-2">
                    Login 
                </Button>
            </Form>
            <div className="mt-2 text-center">
                <Link to="/forgot-password" style={{ cursor: 'pointer', color: 'green' }}>
                    Forgot Password?
                </Link>
            </div>
            <div className="mt-2 text-center">
                Don't have an account? 
                <Link to="/signup" style={{ cursor: 'pointer', color: 'green', marginLeft: '5px' }}>
                    Sign Up
                </Link>
            </div>
        </div>
    );
};

export default Login;
