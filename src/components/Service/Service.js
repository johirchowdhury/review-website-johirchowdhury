import React, { useEffect, useState } from 'react';
import { Alert, Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import { addToDb } from '../../utilities/fakedb'
import Cart from '../Cart/Cart';

const Service = () => {
    const [courses, setCourses] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("./course.JSON")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    const handleAddtoProduct = course => {
        const newCart = [...cart, course];
        setCart(newCart);
        addToDb(course.key)
    }
    return (
        <Container>
            <h2 className="text-danger py-4">Our Courses</h2>
            <Alert variant="success">
                <p>
                    <Cart cart={cart}></Cart>
                </p>


            </Alert>
            <Row>
                {
                    courses.map(course => <Course
                        key={course.key}
                        course={course}
                        handleAddtoProduct={handleAddtoProduct}></Course>)
                }
            </Row>
        </Container>
    );
};

export default Service;