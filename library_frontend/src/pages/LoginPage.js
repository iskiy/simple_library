import React, { useEffect, useContext} from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import LoginForm  from '../components/LoginForm'
import Cookies from 'js-cookie';
import AuthContext from "../context/AuthContext";

function LoginPage() {
    const navigate = useNavigate();
    const { auth, login } = useContext(AuthContext);
    async function Login(username, password){
        fetch('http://localhost:8888/auth/login', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({username, password}),
            }).then(response => {
            if (response.ok) {
                login(Cookies.get('role'));
            }
        }).catch(error => alert(error));
    }

    useEffect(() => {
        if (auth.isAuthenticated) {
            navigate('/');
        }
    }, [auth, navigate]);

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
            <Row>
                <Col md={12}>
                    <LoginForm onSubmit={Login}/>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginPage;