import React, { useEffect, useContext} from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import RegisterForm  from '../components/RegisterForm'
import Cookies from 'js-cookie';
import AuthContext from "../context/AuthContext";

function RegisterPage() {
    const navigate = useNavigate();

    const { auth, login } = useContext(AuthContext);

    async function Register(username, password){
        fetch('http://localhost:8888/auth/register', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, password}),
        }).then(response => {
            if (response.ok) {
                login(Cookies.get('role'));
            } else {
                response.json().then(data => {
                    alert(data.message);
                }).catch(error => alert(error));
            }
        }).catch(error => alert(error));
    }

    useEffect(() => {
        if (auth.isAuthenticated) {
            navigate('/');
        }
    }, [navigate]);

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
            <Row>
                <Col md={12}>
                    <RegisterForm onSubmit={Register}/>
                </Col>
            </Row>
        </Container>
    );
}

export default RegisterPage;