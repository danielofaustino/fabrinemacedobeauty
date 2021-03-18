import React from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import img1 from '../assets/galeria/1.JPG';
import img2 from '../assets/galeria/2.jpg';
import img3 from '../assets/galeria/3.jpg';
import img4 from '../assets/galeria/4.jpeg';

const Styles = styled.div`
  img {
    max-height: 95vh;
  }
`;

export default function NavBar() {
  return (
    <>
      <Styles>
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
      </Styles>
    </>
  );
}
