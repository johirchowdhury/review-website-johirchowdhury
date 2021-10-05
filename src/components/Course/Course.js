import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Course = (props) => {
    const { name, category, price, enroll, image } = props.course;
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
                    <Button onClick={() => props.handleAddtoProduct(props.course)} className="btn-regular">Add to Cart</Button>
                </Card.Body>
            </Card>
        </Col>


    );
};

export default Course;