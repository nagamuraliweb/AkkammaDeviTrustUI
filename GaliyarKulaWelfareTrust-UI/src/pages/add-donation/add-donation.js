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
    const initialFormData = {
        date: "",
        name: "",
        mobileno: "",
        address: "",
        pincode: "",
        paymenttowards: "",
        paymenttowardsothers: "",
        paymenttowardsdate: "",
        month: "",
        amount: "",
        paymenttype: "",
        utrno: ""
    };
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialFormData);
    const [paymentTowardsSelection, setPaymentTowardsSelection] = useState();

    const handleChange = (e) => {
        const values = e.target.name === 'month' ? Array.from(e.target.selectedOptions, (option) => option.value).join(',') : e.target.value;
        setFormData({ ...formData, [e.target.name]: values });
        if (e.target.name === 'paymenttowards') {
            handlePaymentTowardsChange(e);
        }
    };

    const handleSave = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/addDonation', {'method': 'POST', 'headers': {'Content-Type': 'application/json'}, 'body': JSON.stringify(formData)});
        const data = await res.json();
        if (data.status === 'Success') {
            navigate('/donation-list');
        }
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
                        <Form className='mt-4' onSubmit={handleSave}>
                            <Row>
                                <Col><Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>DATE</Form.Label>
                                    <Form.Control type="date" placeholder="Enter date" name="date" value={formData.date}
            onChange={handleChange} />
                                </Form.Group></Col>
                                <Col><Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>NAME</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" name="name" value={formData.name}
            onChange={handleChange} />
                                </Form.Group></Col>
                            </Row>
                            <Row>
                                <Col><Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>MOBILE NO</Form.Label>
                                    <Form.Control type="number" placeholder="Enter mobile no" name="mobileno" value={formData.mobileno}
            onChange={handleChange} />
                                </Form.Group></Col>
                                <Col><Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>ADDRESS</Form.Label>
                                    <Form.Control type="text" placeholder="Enter address" name="address" value={formData.address}
            onChange={handleChange} />
                                </Form.Group></Col>
                            </Row>
                            <Row>
                                <Col><Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>PIN CODE</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Pincode" name="pincode" value={formData.pincode}
            onChange={handleChange} />
                                </Form.Group></Col>
                                <Col></Col>
                            </Row>
                            <Row>
                                <Col><Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>PAYMENT TOWARDS</Form.Label>
                                    <Form.Select name="paymenttowards" value={formData.paymenttowards}
            onChange={handleChange}>
                                        <option>Select</option>
                                        {PAYMENTTOWARDSLIST.map(paymentTowardsOption => (
                                            <option value={paymentTowardsOption.option}>{paymentTowardsOption.value}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group></Col>
                                {paymentTowardsSelection?.isDateSelection ?
                                <Col><Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>DATE</Form.Label>
                                    <Form.Control type="date" name="paymenttowardsdate" placeholder="Enter date" onChange={handleChange} />
                                </Form.Group></Col> :
                                paymentTowardsSelection?.isManualSelection ?
                                <Col><Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Enter</Form.Label>
                                    <Form.Control type="text" placeholder="Enter" name="paymenttowardsothers" onChange={handleChange}/>
                                </Form.Group></Col>
                                : <Col>
                                    <Form.Label>MONTH</Form.Label>
                                    <Form.Select multiple={paymentTowardsSelection?.isMultiSelected} name="month"
            onChange={handleChange}>
                                        <option>Select</option>
                                        {MONTHSLIST.map(monthOption => (
                                            <option value={monthOption.option}>{monthOption.value}</option>
                                        ))}
                                    </Form.Select></Col>
                                }
                                <Col><Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>AMOUNT</Form.Label>
                                    <Form.Control name="amount" disabled={paymentTowardsSelection?.defaultAmount} type="text" placeholder="Enter amount" value={paymentTowardsSelection?.defaultAmount ?? formData.amount}
            onChange={handleChange}/>
                                </Form.Group></Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Label>PAYMENT TYPE</Form.Label>
                                    <Form.Select name="paymenttype" value={formData.paymenttype}
            onChange={handleChange}>
                                        <option>Select</option>
                                        {PAYMENTTYPELIST.map(paymentTypeOption => (
                                            <option value={paymentTypeOption.option}>{paymentTypeOption.value}</option>
                                        ))}
                                    </Form.Select>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>UTR NO</Form.Label>
                                        <Form.Control name="utrno" type="text" placeholder="Enter UTR No" value={formData.utrno}
            onChange={handleChange} />
                                    </Form.Group></Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button variant="primary" className='donation-button' type='submit'>
                                        Save
                                    </Button>
                                    <Button variant="primary" className='reset-button' onClick={() => setFormData(initialFormData)}>
                                        Reset
                                    </Button>
                                    <Button variant="primary" className='reset-button' onClick={() => navigate('/donation-list')}>
                                        Back
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default AddDonation;