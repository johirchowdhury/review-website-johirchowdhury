import React from 'react';
import { Image } from 'react-bootstrap';
import img from '../../image/561-5616833_image-not-found-png-not-found-404-png.png'
const NotFound = () => {
    return (
        <div>
            <Image className="img-fluid" src={img}></Image>
        </div>
    );
};

export default NotFound;