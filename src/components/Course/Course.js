import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Course = (props) => {
    const { name, category, price, enroll, image } = props.course;
    console.log(props.course);
    return (



        <Col md={4}>
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <small>Category: <Link className="text-primary" href="#">{category}</Link> </small>
                        <p>Course Enroll: {enroll} Students</p>
                        <b>Price: {price}</b>
                    </Card.Text>
                    <Button variant="primary">Course Details</Button>
                </Card.Body>
            </Card>
        </Col>


    );
};

export default Course;