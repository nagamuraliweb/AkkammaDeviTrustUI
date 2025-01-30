import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import './login.css';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        const res = await fetch('/api/login', {'method': 'POST', 'headers': {'Content-Type': 'application/json'}, 'body': JSON.stringify({username, password})});
        const data = await res.json();
        if (data.status === 'Success') {
            localStorage.setItem('logged_user', 'true');
            navigate('/donation-list');
        }
    }

    return (
        <>
            <Container fluid>
                <Row>
                    <Col className="login-form">
                        <h4 className='logo'><img alt="app_logo" src={logo} /> Galiyar Kula Welfare Trust <br /><span>Sengalipalayam, Coimbatore 641022</span></h4>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>USERNAME</Form.Label>
                                <Form.Control value={username} type="text" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>PASSWORD</Form.Label>
                                <Form.Control value={password} type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                            </Form.Group>
                            <Button disabled={username === '' || password === ''} variant="primary" className='button-style' onClick={handleLogin}>
                                Sign in
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Login;