import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../image/Introduction-to-Renewable-Energy-Technologies-1536x864.png';
import slider2 from '../../image/Responsive-Web-Design-1-1536x864.png';
import slider3 from '../../image/Setting-and-Achieving-Focus-Goals-and-Targets-Course-Image-GoEdu-1536x864.jpg';


const Slider = () => {
    return (
        <div className="mb-4">
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider2}
                        alt="Second slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider3}
                        alt="Third slide"
                    />


                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;