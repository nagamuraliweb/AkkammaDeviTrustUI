import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import './add-donation.css';
import { PAYMENTTOWARDSLIST, PAYMENTTYPELIST, MONTHSLIST } from '../../constants/add-donation.contants';

function AddDonation() {
    const navigate = useNavigate();
    //const [paymentsTowardsList, setPaymentsTowardsList] = useState([]);
    //const [paymentsTowardsList, setPaymentsTowardsList] = useState([]);

    const handleSave = () => {
        navigate('/donation-list');
    }

    return (
        <>
            <Container fluid>
                <Row>
                    <Col className="add-donation">
                        <h4 className='logo'><img src={logo} /> Galiyar Shri Akkamma Devi Thirukoil Trust <br /><span>Sengalipalayam, Coimbatore 641022</span>
                            <span className='logout'>Logout<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-power" viewBox="0 0 16 16">
                                <path d="M7.5 1v7h1V1z" />
                                <path d="M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812" />
                            </svg></span></h4>
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
                                <Col></Col>
                            </Row>
                            <Row>
                                <Col><Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>PAYMENT TOWARDS</Form.Label>
                                    <Form.Select>
                                        <option>Select</option>
                                        {PAYMENTTOWARDSLIST.map(paymentTowardsOption => (
                                            <option value={paymentTowardsOption.option}>{paymentTowardsOption.value}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group></Col>
                                <Col>
                                    <Form.Label>MONTH</Form.Label>
                                    <Form.Select>
                                        <option>Select</option>
                                        {MONTHSLIST.map(monthOption => (
                                            <option value={monthOption.option}>{monthOption.value}</option>
                                        ))}
                                    </Form.Select></Col>
                                <Col><Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>AMOUNT</Form.Label>
                                    <Form.Control type="text" placeholder="Enter amount" />
                                </Form.Group></Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Label>PAYMENT TYPE</Form.Label>
                                    <Form.Select>
                                        <option>Select</option>
                                        {PAYMENTTYPELIST.map(paymentTypeOption => (
                                            <option value={paymentTypeOption.option}>{paymentTypeOption.value}</option>
                                        ))}
                                    </Form.Select>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>UTR NO</Form.Label>
                                        <Form.Control type="text" placeholder="Enter amount" />
                                    </Form.Group></Col>
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

export default AddDonation;