import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Service = () => {
    const [course, setCourse] = useState([]);
    useEffect(() => {
        fetch("./course.JSON")
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])

    return (
        <Container>
            <h2 className="text-danger py-4">Our Courses</h2>
            <Row>
                {
                    course.map(course => <Course key={course.key} course={course}></Course>)
                }
            </Row>
        </Container>
    );
};

export default Service;