import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import {Link} from "react-router-dom";

function RegisterForm({ onSubmit }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(username, password);
    };

    return (
        <div className="container">
            <h1>Register</h1>

            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit"  style={{ width: "100%", textAlign: "center" }}  className="mt-3">
                    Register
                </Button>
            </Form>
            <p className="mt-3 text-center">
                Have an account? <Link to="/login">Sign In</Link>
            </p>
        </div>
    );
}

export default RegisterForm;