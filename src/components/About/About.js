import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import img from '../../image/missionvission.png'
const About = () => {
    return (
        <div className="my-5">
            <Container>
                <Row>
                    <Col md={6}>
                        <Image className="img-fluid" src={img}></Image>
                    </Col>
                    <Col md={6}>
                        <h2>About GoEdu.com</h2>
                        <p>We want to contribute to national economy through Developing Technically Skilled Human Resources Creating Entrepreneurs Ensuring competency among every successful student Serving the Industries through Developing Human Resources with required skill. We want to contribute to national economy through Developing Technically Skilled Human Resources Creating Entrepreneurs Ensuring competency among every successful student Serving the Industries through Developing Human Resources with required skills. </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;