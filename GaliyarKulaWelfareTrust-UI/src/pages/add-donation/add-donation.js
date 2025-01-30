import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";
import './add-donation.css';
import { PAYMENTTOWARDSLIST, PAYMENTTYPELIST, MONTHSLIST } from '../../constants/add-donation.contants';
import Header from '../../components/header';

function AddDonation() {
    const navigate = useNavigate();
    const [paymentTowardsSelection, setPaymentTowardsSelection] = useState();
    //const [paymentsTowardsList, setPaymentsTowardsList] = useState([]);
    //const [paymentsTowardsList, setPaymentsTowardsList] = useState([]);

    const handleSave = () => {
        navigate('/donation-list');
    }

    const handlePaymentTowardsChange = (event) => {
        const selectedOption = PAYMENTTOWARDSLIST.filter(e => e.option === event.target.value);
        setPaymentTowardsSelection(selectedOption[0]);
    };

    return (
        <>
            <Container fluid>
                <Row>
                    <Col className="add-donation">
                        <Header />
                        <Form className='mt-4'>
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
                                    <Form.Select onChange={handlePaymentTowardsChange}>
                                        <option>Select</option>
                                        {PAYMENTTOWARDSLIST.map(paymentTowardsOption => (
                                            <option value={paymentTowardsOption.option}>{paymentTowardsOption.value}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group></Col>
                                {paymentTowardsSelection?.isDateSelection ?
                                <Col><Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>DATE</Form.Label>
                                    <Form.Control type="date" placeholder="Enter date" />
                                </Form.Group></Col> :
                                paymentTowardsSelection?.isManualSelection ?
                                <Col><Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Enter</Form.Label>
                                    <Form.Control type="text" placeholder="Enter" />
                                </Form.Group></Col>
                                : <Col>
                                    <Form.Label>MONTH</Form.Label>
                                    <Form.Select multiple={paymentTowardsSelection?.isMultiSelected}>
                                        <option>Select</option>
                                        {MONTHSLIST.map(monthOption => (
                                            <option value={monthOption.option}>{monthOption.value}</option>
                                        ))}
                                    </Form.Select></Col>
                                }
                                <Col><Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>AMOUNT</Form.Label>
                                    <Form.Control disabled={paymentTowardsSelection?.defaultAmount} type="text" placeholder="Enter amount" value={paymentTowardsSelection?.defaultAmount ?? ''} />
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
                                        <Form.Control type="text" placeholder="Enter no" />
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