import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";
import akkammadevi from "../../assets/images/akkammadevi.jpg";
import logo from "../../assets/images/logo.jpg";



function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/donation');
    }

    return (
        <>
            <Container fluid>
                <Row>
                    <Col className='p-0'><img src={akkammadevi} width="100%" /></Col>
                    <Col>
                        <h4><img src={logo} className='logo'/> Galiyar Shri Akkamma Devi Thirukoil Trust</h4>
                        <Form className='mt-4'>
                            <h5>Login</h5>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>USERNAME</Form.Label>
                                <Form.Control type="text" placeholder="Enter username" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>PASSWORD</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={handleLogin}>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Login;