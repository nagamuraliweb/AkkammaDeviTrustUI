import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";
import akkammadevi from "../../assets/images/akkammadevi.jpg";
import logo from "../../assets/images/logo.jpg";
import './add-donation.css';

function Login() {
    const navigate = useNavigate();

    const handleSave = () => {
        navigate('/donation-list');
    }

    return (
        <>
            <Container fluid>
                <Row>
                    <Col className="add-donation">
                        <h4 className='logo'><img src={logo} /> Galiyar Shri Akkamma Devi Thirukoil Trust <br /><span>Sengalipalayam, Coimbatore 641022</span></h4>
                        <Form className='mt-4'>
                            <h5>Add Donation</h5>
                            <h6>Mode of payment: </h6>
                            <ul>
                                <li>Cash per receipt limited to Rs. 10000</li>
                                <li>Cheque - Bank name, Cheque no, date</li>
                                <li>Gpay, PhonePe, NEFT, RTGS, UTR No</li>
                            </ul>
                            <Row>
                                <Col><Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>DATE</Form.Label>
                                    <Form.Control type="date" placeholder="Enter date" />
                                </Form.Group></Col>
                                <Col><Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>NAME</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" />
                                </Form.Group></Col>
                            </Row>
                            <Row>
                                <Col><Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>MOBILE NO</Form.Label>
                                    <Form.Control type="number" placeholder="Enter mobile no" />
                                </Form.Group></Col>
                                <Col><Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>ADDRESS</Form.Label>
                                    <Form.Control type="text" placeholder="Enter address" />
                                </Form.Group></Col>
                            </Row>
                            <Row>
                                <Col><Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>PIN CODE</Form.Label>
                                    <Form.Control type="number" placeholder="Enter mobile no" />
                                </Form.Group></Col>
                                <Col><Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>PAYMENT TOWARDS</Form.Label>
                                    <Row className='payment-detail'>
                                        <label>
                                            <input type="checkbox" /> <span>Pournami Pooja (Chithirai/Panguni)</span>
                                        </label>
                                    </Row>
                                    <Row className='payment-detail'>
                                        <label>
                                            <input type="checkbox" /> <span>Thirukkalyanam (Srinivasa Thirukalyanam/Renuka Thirukalyanam)</span>
                                        </label>
                                    </Row>
                                    <Row className='payment-detail'>
                                        <label>
                                            <input type="checkbox" /> <span>Annadhanam (Chithirai/Panguni)</span>
                                        </label>
                                    </Row>
                                </Form.Group></Col>
                            </Row>
                            <Row>
                                <Col><Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>AMOUNT</Form.Label>
                                    <Form.Control type="text" placeholder="Enter amount" />
                                </Form.Group></Col>
                                <Col>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button variant="primary" className='donation-button' onClick={handleSave}>
                                        Save
                                    </Button>
                                    <Button variant="primary" className='reset-button'>
                                        Reset
                                    </Button></Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Login;