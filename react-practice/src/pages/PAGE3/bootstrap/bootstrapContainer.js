import React from 'react';
import { Card, Container, Row, Col } from 'reactstrap';


// ========== IMPORTED FORMS ==========
import TextForm from './forms/textForm';
import EmailForm from './forms/emailForm';




function BootstrapContainer(props) {
    // ========== STATE ==========



    // ========== FUNCTIONS ==========



    // ========== COMPONENTS ==========
    return (
        <>

            <img className='forms-img yup' src='https://repository-images.githubusercontent.com/52071471/f1227d00-96bf-11e9-859f-3c713604f9d6' alt='yup logo' />

            <Container>
                <Row>
                    {/* ======== Counter ======== */}
                    <Col sm="6" md="4" xl="4">
                        <Card>
                            <TextForm setDisplayForm={props.setDisplayForm} />
                        </Card>
                    </Col>
                    {/* ======== Counter ======== */}
                    <Col sm="6" md="4" xl="4">
                        <Card>
                            <EmailForm setDisplayForm={props.setDisplayForm} />
                        </Card>
                    </Col>
                    {/* ======== Counter ======== */}
                    <Col sm="6" md="4" xl="4">
                        <Card>
                            <TextForm setDisplayForm={props.setDisplayForm} />
                        </Card>
                    </Col>
                    {/* ======== Counter ======== */}
                    <Col sm="6" md="4" xl="4">
                        <Card>
                            <TextForm setDisplayForm={props.setDisplayForm} />
                        </Card>
                    </Col>
                    {/* ======== Counter ======== */}
                    <Col sm="6" md="4" xl="4">
                        <Card>
                            <TextForm setDisplayForm={props.setDisplayForm} />
                        </Card>
                    </Col>
                    {/* ======== Counter ======== */}
                    <Col sm="6" md="4" xl="4">
                        <Card>
                            <TextForm setDisplayForm={props.setDisplayForm} />
                        </Card>
                    </Col>
                    {/* ======== Counter ======== */}
                    <Col sm="6" md="4" xl="4">
                        <Card>
                            <TextForm setDisplayForm={props.setDisplayForm} />
                        </Card>
                    </Col>
                    {/* ======== Counter ======== */}
                    <Col sm="6" md="4" xl="4">
                        <Card>
                            <TextForm setDisplayForm={props.setDisplayForm} />
                        </Card>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default BootstrapContainer;