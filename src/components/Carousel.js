import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../assets/galeria/1.JPG';
import img2 from '../assets/galeria/2.jpg';
import img3 from '../assets/galeria/3.jpg';
import img4 from '../assets/galeria/4.jpeg';

export default function NavBar() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img4} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
}
