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
import Loader from '../../components/loader';
import Notification from '../../components/notification';

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
    const [showLoader, setShowLoader] = useState(false);
    const [showSuccessNotification, setShowSuccessNotification] = useState(false);
    const [showFailedNotification, setShowFailedNotification] = useState(false);
    const [notificationContent, setNotificationContent] = useState("");
    const [dateError, setDateError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [mobileNoError, setMobileNoError] = useState(false);
    const [addressError, setAddressError] = useState(false);
    const [pincodeError, setPincodeError] = useState(false);
    const [paymentTowardsError, setPaymentTowardsError] = useState(false);
    const [amountError, setAmountError] = useState(false);
    const [paymentTypeError, setPaymentTypeError] = useState(false);

    const handleChange = (e) => {
        const values = e.target.name === 'month' ? Array.from(e.target.selectedOptions, (option) => option.value).join(',') : e.target.value;
        setFormData({ ...formData, [e.target.name]: values });
        if (e.target.name === 'paymenttowards') {
            handlePaymentTowardsChange(e);
        }
        if (e.target.name === 'paymenttype') {
            handlePaymentTypeChange(e);
        }
        if (e.target.name === 'month' || e.target.name === 'paymenttowardsdate') {
            handleMonthChange(e, values);
        }
        handleErrorsWithName(e.target.name);
    };

    const handleErrorsWithName = (fieldName) => {
        console.log(fieldName);
        console.log(formData);
        if (fieldName === "date") {
            if (!formData.date) {
                setDateError(true);
            } else {
                setDateError(false);
            }
        }

        if (fieldName === "name") {
            if (!formData.name) {
                setNameError(true);
            } else {
                setNameError(false);
            }
        }

        if (fieldName === "mobileno") {
            if (!formData.mobileno) {
                setMobileNoError(true);
            } else {
                setMobileNoError(false);
            }
        }

        if (fieldName === "address") {
            if (!formData.address) {
                setAddressError(true);
            } else {
                setAddressError(false);
            }
        }

        if (fieldName === "pincode") {
            if (!formData.pincode) {
                setPincodeError(true);
            } else {
                setPincodeError(false);
            }
        }

        if (fieldName === "amount") {
            if (!formData.amount) {
                setAmountError(true);
            } else {
                setAmountError(false);
            }
        }
    }

    const handleErrors = () => {
        if (!formData.date) {
            setDateError(true);
        } else {
            setDateError(false);
        }

        if (!formData.name) {
            setNameError(true);
        } else {
            setNameError(false);
        }

        if (!formData.mobileno) {
            setMobileNoError(true);
        } else {
            setMobileNoError(false);
        }

        if (!formData.address) {
            setAddressError(true);
        } else {
            setAddressError(false);
        }

        if (!formData.pincode) {
            setPincodeError(true);
        } else {
            setPincodeError(false);
        }

        if (!formData.paymenttowards) {
            setPaymentTowardsError(true);
        } else {
            setPaymentTowardsError(false);
        }

        if (!formData.amount) {
            setAmountError(true);
        } else {
            setAmountError(false);
        }

        if (!formData.paymenttype) {
            setPaymentTypeError(true);
        } else {
            setPaymentTypeError(false);
        }
    }

    const handleSave = async (e) => {
        e.preventDefault();

        handleErrors();

        if (formData.date && formData.name && formData.mobileno &&
            formData.address && formData.pincode && formData.paymenttowards && formData.amount &&
            formData.paymenttype) {
            setShowLoader(true);

            const res = await fetch('/api/addDonation', { 'method': 'POST', 'headers': { 'Content-Type': 'application/json' }, 'body': JSON.stringify(formData) });
            const data = await res.json();
            if (data.status === 'Success') {
                setNotificationContent(data.message);
                setShowSuccessNotification(true);
                setTimeout(() => {
                    setShowSuccessNotification(false);
                }, 5000);
                navigate('/donation-list');
            } else {
                setNotificationContent(data.message);
                setShowFailedNotification(true);
                setTimeout(() => {
                    setShowFailedNotification(false);
                }, 5000);
            }
            setShowLoader(false);
        }
    }

    const handlePaymentTowardsChange = (event) => {
        const selectedOption = PAYMENTTOWARDSLIST.filter(e => e.option === event.target.value);
        setFormData({ ...formData, amount : '', month: '', paymenttowardsdate: '', paymenttowards: selectedOption[0].option  });
        setPaymentTowardsSelection(selectedOption[0]);
        if (event.target.value) {
            setPaymentTowardsError(false);
        } else {
            setPaymentTowardsError(true);
        }
    };

    const handleMonthChange = (event, values) => {
        const selectedMonth = values.split(',').length;
        let amount = '';

        if ((paymentTowardsSelection?.defaultAmount && selectedMonth === 0) || paymentTowardsSelection?.isDateSelection) {
            amount = paymentTowardsSelection?.defaultAmount;
        } else if (paymentTowardsSelection?.defaultAmount && selectedMonth > 0) {
            amount = paymentTowardsSelection?.defaultAmount * selectedMonth;
        }

        if (event.target.name === 'paymenttowardsdate') {
            setFormData({ ...formData, amount : amount, paymenttowardsdate: event.target.value });
        }

        if (event.target.name === 'month') {
            setFormData({ ...formData, amount : amount, month: values });
        }
    };

    const handlePaymentTypeChange = (event) => {
        if (event.target.value) {
            setPaymentTypeError(false);
        } else {
            setPaymentTypeError(true);
        }
    };

    const resetDonation = () => {
        setFormData(initialFormData);
        setDateError(false);
        setNameError(false);
        setMobileNoError(false);
        setAddressError(false);
        setPincodeError(false);
        setPaymentTowardsError(false);
        setAmountError(false);
        setPaymentTypeError(false);
    };

    return (
        <>
            <Container fluid>
                <Row>
                    <Col className="add-donation">
                        <Header />
                        <Form className='mt-4' onSubmit={handleSave}>
                            <Row>
                                <Col><Form.Group className="mb-3">
                                    <Form.Label>DATE</Form.Label>
                                    <Form.Control type="date" placeholder="Enter date" name="date" value={formData.date}
                                        onChange={handleChange} autoComplete='off' />
                                    {dateError ? <span className="field-error">Please enter date</span> : <></>}
                                </Form.Group></Col>
                                <Col><Form.Group className="mb-3">
                                    <Form.Label>NAME</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" name="name" value={formData.name}
                                        onChange={handleChange} autoComplete='off' />
                                    {nameError ? <span className="field-error">Please enter name</span> : <></>}
                                </Form.Group></Col>
                            </Row>
                            <Row>
                                <Col><Form.Group className="mb-3">
                                    <Form.Label>MOBILE NO</Form.Label>
                                    <Form.Control type="test" placeholder="Enter mobile no" name="mobileno" value={formData.mobileno}
                                        onChange={handleChange} autoComplete='off' minLength={10} maxLength={10} />
                                    {mobileNoError ? <span className="field-error">Please enter mobile no</span> : <></>}
                                </Form.Group></Col>
                                <Col><Form.Group className="mb-3">
                                    <Form.Label>ADDRESS</Form.Label>
                                    <Form.Control type="text" placeholder="Enter address" name="address" value={formData.address}
                                        onChange={handleChange} autoComplete='off' />
                                    {addressError ? <span className="field-error">Please enter address</span> : <></>}
                                </Form.Group></Col>
                            </Row>
                            <Row>
                                <Col><Form.Group className="mb-3">
                                    <Form.Label>PIN CODE</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Pincode" name="pincode" value={formData.pincode}
                                        onChange={handleChange} autoComplete='off' />
                                    {pincodeError ? <span className="field-error">Please enter pin code</span> : <></>}
                                </Form.Group></Col>
                                <Col></Col>
                            </Row>
                            <Row>
                                <Col><Form.Group className="mb-3">
                                    <Form.Label>PAYMENT TOWARDS</Form.Label>
                                    <Form.Select name="paymenttowards" value={formData.paymenttowards}
                                        onChange={handleChange} autoComplete='off'>
                                        <option>Select</option>
                                        {PAYMENTTOWARDSLIST.map(paymentTowardsOption => (
                                            <option value={paymentTowardsOption.option}>{paymentTowardsOption.value}</option>
                                        ))}
                                    </Form.Select>
                                    {paymentTowardsError ? <span className="field-error">Please select payment towards</span> : <></>}
                                </Form.Group></Col>
                                {paymentTowardsSelection?.isDateSelection ?
                                    <Col><Form.Group className="mb-3">
                                        <Form.Label>DATE</Form.Label>
                                        <Form.Control type="date" name="paymenttowardsdate" placeholder="Enter date" onChange={handleChange} autoComplete='off' />
                                    </Form.Group></Col> :
                                    paymentTowardsSelection?.isManualSelection ?
                                        <Col><Form.Group className="mb-3">
                                            <Form.Label>Enter</Form.Label>
                                            <Form.Control type="text" placeholder="Enter" name="paymenttowardsothers" onChange={handleChange} autoComplete='off' value={formData.paymenttowardsothers} />
                                        </Form.Group></Col>
                                        : <Col>
                                            <Form.Label>MONTH</Form.Label>
                                            <Form.Select multiple={paymentTowardsSelection?.isMultiSelected} name="month"
                                                onChange={handleChange} autoComplete='off' value={paymentTowardsSelection?.isMultiSelected ? formData.month.split(',') : formData.month}>
                                                <option>Select</option>
                                                {MONTHSLIST.map(monthOption => (
                                                    <option value={monthOption.option}>{monthOption.value}</option>
                                                ))}
                                            </Form.Select></Col>
                                }
                                <Col><Form.Group className="mb-3">
                                    <Form.Label>AMOUNT</Form.Label>
                                    <Form.Control name="amount" disabled={paymentTowardsSelection?.defaultAmount} type="text" placeholder="Enter amount" value={formData.amount}
                                        onChange={handleChange} autoComplete='off' />
                                    {amountError ? <span className="field-error">Please enter amount</span> : <></>}
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
                                    {paymentTypeError ? <span className="field-error">Please select payment type</span> : <></>}
                                </Col>
                                <Col>
                                    {formData.paymenttype && formData.paymenttype !== "Cash" ? <Form.Group className="mb-3">
                                        <Form.Label>UTR NO</Form.Label>
                                        <Form.Control name="utrno" type="text" placeholder="Enter UTR No" value={formData.utrno}
                                            onChange={handleChange} />
                                    </Form.Group> : <></>}</Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button variant="primary" className='donation-button' type='submit'>
                                        Save
                                    </Button>
                                    <Button variant="primary" className='reset-button' onClick={() => resetDonation()}>
                                        Reset
                                    </Button>
                                    <Button variant="primary" className='back-button' onClick={() => navigate('/donation-list')}>
                                        Back
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
            {showLoader ? <Loader /> : <></>}
            {showSuccessNotification ? <Notification content={notificationContent} variant="success" /> : <></>}
            {showFailedNotification ? <Notification content={notificationContent} variant="danger" /> : <></>}
        </>
    );
}

export default AddDonation;