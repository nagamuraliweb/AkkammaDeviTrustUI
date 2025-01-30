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
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleUsername = (name) => {
        setUsername(name);
        if (name) {
            setUsernameError(false);
        } else {
            setUsernameError(true);
        }
    }

    const handlePassword = (pwd) => {
        setPassword(pwd);
        if (pwd) {
            setPasswordError(false);
        } else {
            setPasswordError(true);
        }
    }

    const handleLogin = async () => {
        if (!username) {
            setUsernameError(true);
        }
        if (!password) {
            setPasswordError(true);
        }

        if (username && password) {
            const res = await fetch('/api/login', { 'method': 'POST', 'headers': { 'Content-Type': 'application/json' }, 'body': JSON.stringify({ username, password }) });
            const data = await res.json();
            if (data.status === 'Success') {
                localStorage.setItem('logged_user', 'true');
                navigate('/donation-list');
            }
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
                                <Form.Control type="text" placeholder="Enter username" name="username" onChange={(e) => handleUsername(e.target.value)} />
                                {usernameError ? <span className="field-error">Please enter username</span> : <></>}
                            </Form.Group >

                            <Form.Group className="mb-4" controlId="formBasicPassword">
                                <Form.Label>PASSWORD</Form.Label>
                                <Form.Control type="password" placeholder="Enter password" name="password" onChange={(e) => handlePassword(e.target.value)} />
                                {passwordError ? <span className="field-error">Please enter password</span> : <></>}
                            </Form.Group >
                            <Button variant="primary" className='button-style' onClick={handleLogin}>
                                Sign in
                            </Button>
                        </Form >
                    </Col >
                </Row >
            </Container >
        </>
    );
}

export default Login;