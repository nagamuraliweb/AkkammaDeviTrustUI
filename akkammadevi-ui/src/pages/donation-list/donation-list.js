import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import './donation-list.css';

function DonationList() {
    const donatorsList = [
        {
            name: 'Donator',
            mobileno: '9865325896',
            address: "Coimbatore",
            paymentTowards: 'Pournami Pooja',
            amount: 500,
            date: '12 feb 2025',
            time: '10 AM'
        },
        {
            name: 'Donator',
            mobileno: '9865325896',
            address: "Coimbatore",
            paymentTowards: 'Thirukkalyanam',
            amount: 1500,
            date: '12 feb 2025',
            time: '10 AM'
        },
        {
            name: 'Donator',
            mobileno: '9865325896',
            address: "Coimbatore",
            paymentTowards: 'Annadhanam',
            amount: 2500,
            date: '12 feb 2025',
            time: '10 AM'
        },
        {
            name: 'Donator',
            mobileno: '9865325896',
            address: "Coimbatore",
            paymentTowards: 'Pournami Pooja',
            amount: 1000,
            date: '12 feb 2025',
            time: '10 AM'
        },
        {
            name: 'Donator',
            mobileno: '9865325896',
            address: "Coimbatore",
            paymentTowards: 'Thirukkalyanam',
            amount: 500,
            date: '12 feb 2025',
            time: '10 AM'
        },
        {
            name: 'Donator',
            mobileno: '9865325896',
            address: "Coimbatore",
            paymentTowards: 'Pournami Pooja',
            amount: 500,
            date: '12 feb 2025',
            time: '10 AM'
        },
        {
            name: 'Donator',
            mobileno: '9865325896',
            address: "Coimbatore",
            paymentTowards: 'Thirukkalyanam',
            amount: 2000,
            date: '12 feb 2025',
            time: '10 AM'
        },
        {
            name: 'Donator',
            mobileno: '9865325896',
            address: "Coimbatore",
            paymentTowards: 'Pournami Pooja',
            amount: 500,
            date: '12 feb 2025',
            time: '10 AM'
        },
        {
            name: 'Donator',
            mobileno: '9865325896',
            address: "Coimbatore",
            paymentTowards: 'Pournami Pooja',
            amount: 500,
            date: '12 feb 2025',
            time: '10 AM'
        }
    ];
    const navigate = useNavigate();

    const navigateToAddDonation = () => {
        navigate('/add-donation');
    }

    return (
        <>
            <Container fluid>
                <Row>
                    <Col className='p-0 login-bg' xs={1} md={3}></Col>
                    <Col className="donation-list" xs={1} md={9}>
                        <h4 className='logo'><img src={logo} /> Galiyar Shri Akkamma Devi Thirukoil Trust</h4>
                        <h5>Donator's List</h5>
                        <Row>
                            <Col xs={2} md={8} className='pl-0'><input type='text' className='form-control' placeholder='Search with donator Name and Mobile no' /></Col>
                            <Col xs={2} md={1}><Button variant="primary" className='button-style'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                </svg>
                            </Button></Col>
                            <Col xs={2} md={3} className='pr-0'><Button variant="primary" className='button-style' onClick={navigateToAddDonation}>
                                Add Donation
                            </Button></Col>
                        </Row>
                        <Row className='list-header'>
                            <Col xs={2} md={1}>Name</Col>
                            <Col xs={2} md={1}>Mobile no</Col>
                            <Col xs={2} md={2}>Address</Col>
                            <Col xs={2} md={2}>Payment towards</Col>
                            <Col xs={2} md={1}>Amount</Col>
                            <Col xs={2} md={2}>Date</Col>
                            <Col xs={2} md={1}>Time</Col>
                            <Col xs={2} md={2}></Col>
                        </Row>
                        {donatorsList.map((donator, index) => (
                            <Row className='list-content'>
                                <Col xs={2} md={1}>{donator.name}</Col>
                                <Col xs={2} md={1}>{donator.mobileno}</Col>
                                <Col xs={2} md={2}>{donator.address}</Col>
                                <Col xs={2} md={2}>{donator.paymentTowards}</Col>
                                <Col xs={2} md={1}>{donator.amount}</Col>
                                <Col xs={2} md={2}>{donator.date}</Col>
                                <Col xs={2} md={1}>{donator.time}</Col>
                                <Col xs={2} md={2}>
                                    <Button variant="primary" className='update-button' onClick={navigateToAddDonation}>
                                        Update
                                    </Button>
                                    <Button variant="primary" className='delete-button' onClick={navigateToAddDonation}>
                                        Delete
                                    </Button>
                                </Col>
                            </Row>
                        ))}

                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default DonationList;