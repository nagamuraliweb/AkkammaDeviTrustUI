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
            pincode: 641022,
            month: "Chithirai",
            paymentType: 'Gpay'
        },
        {
            name: 'Donator',
            mobileno: '9865325896',
            address: "Coimbatore",
            paymentTowards: 'Thirukkalyanam',
            amount: 1500,
            date: '12 feb 2025',
            pincode: 641022,
            month: "Chithirai",
            paymentType: 'Gpay'
        },
        {
            name: 'Donator',
            mobileno: '9865325896',
            address: "Coimbatore",
            paymentTowards: 'Annadhanam',
            amount: 2500,
            date: '12 feb 2025',
            pincode: 641022,
            month: "Chithirai",
            paymentType: 'Gpay'
        },
        {
            name: 'Donator',
            mobileno: '9865325896',
            address: "Coimbatore",
            paymentTowards: 'Pournami Pooja',
            amount: 1000,
            date: '12 feb 2025',
            pincode: 641022,
            month: "Chithirai",
            paymentType: 'Gpay'
        },
        {
            name: 'Donator',
            mobileno: '9865325896',
            address: "Coimbatore",
            paymentTowards: 'Thirukkalyanam',
            amount: 500,
            date: '12 feb 2025',
            pincode: 641022,
            month: "Chithirai",
            paymentType: 'Gpay'
        },
        {
            name: 'Donator',
            mobileno: '9865325896',
            address: "Coimbatore",
            paymentTowards: 'Pournami Pooja',
            amount: 500,
            date: '12 feb 2025',
            pincode: 641022,
            month: "Chithirai",
            paymentType: 'Gpay'
        },
        {
            name: 'Donator',
            mobileno: '9865325896',
            address: "Coimbatore",
            paymentTowards: 'Thirukkalyanam',
            amount: 2000,
            date: '12 feb 2025',
            pincode: 641022,
            month: "Chithirai",
            paymentType: 'Gpay'
        },
        {
            name: 'Donator',
            mobileno: '9865325896',
            address: "Coimbatore",
            paymentTowards: 'Pournami Pooja',
            amount: 500,
            date: '12 feb 2025',
            pincode: 641022,
            month: "Chithirai",
            paymentType: 'Gpay'
        },
        {
            name: 'Donator',
            mobileno: '9865325896',
            address: "Coimbatore",
            paymentTowards: 'Pournami Pooja',
            amount: 500,
            date: '12 feb 2025',
            pincode: 641022,
            month: "Chithirai",
            paymentType: 'Gpay'
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
                    <Col className="donation-list">
                        <h4 className='logo'><img src={logo} /> Galiyar Kula Welfare Trust <br /><span>Sengalipalayam, Coimbatore 641022</span> 
                        <span className='logout'>Logout<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-power" viewBox="0 0 16 16">
                            <path d="M7.5 1v7h1V1z" />
                            <path d="M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812" />
                        </svg></span></h4>
                        <Row>
                            <Col xs={2} md={8} className='pl-0'><input type='text' className='form-control' placeholder='Search with donator Name and Mobile no' /></Col>
                            <Col xs={2} md={1}><Button variant="primary" className='button-style'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                </svg>
                            </Button></Col>
                            <Col xs={2} md={3} className='pr-0'><Button variant="primary" className='button-style' onClick={navigateToAddDonation}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                                </svg> Add Donation
                            </Button></Col>
                        </Row>
                        <Row className='list-header'>
                            <Col xs={2} md={1}>Name</Col>
                            <Col xs={2} md={1}>Mobile no</Col>
                            <Col xs={2} md={2}>Address</Col>
                            <Col xs={2} md={1}>Pincode</Col>
                            <Col xs={2} md={2}>Payment towards</Col>
                            <Col xs={2} md={1}>Month</Col>
                            <Col xs={2} md={1}>Amount</Col>
                            <Col xs={2} md={1}>Payment type</Col>
                            <Col xs={2} md={1}>Date</Col>
                            <Col xs={2} md={1}></Col>
                        </Row>
                        {donatorsList.map((donator, index) => (
                            <Row className='list-content'>
                                <Col xs={2} md={1}>{donator.name}</Col>
                                <Col xs={2} md={1}>{donator.mobileno}</Col>
                                <Col xs={2} md={2}>{donator.address}</Col>
                                <Col xs={2} md={1}>{donator.pincode}</Col>
                                <Col xs={2} md={2}>{donator.paymentTowards}</Col>
                                <Col xs={2} md={1}>{donator.month}</Col>
                                <Col xs={2} md={1}>{donator.amount}</Col>
                                <Col xs={2} md={1}>{donator.paymentType}</Col>
                                <Col xs={2} md={1}>{donator.date}</Col>
                                <Col xs={2} md={1}>
                                    <Button variant="primary" className='update-button' onClick={navigateToAddDonation} title='Update'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                        </svg>
                                    </Button>
                                    <Button variant="primary" className='delete-button' onClick={navigateToAddDonation} title='Delete'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                                        </svg>
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