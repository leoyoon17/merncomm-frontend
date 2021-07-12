import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

export default class MainCarousel extends Component {

    render () {
      return (
        <>
        <style>
          {`
          .container {
            max-width: 1140px;
          }
          
          .carousel {
            margin-top: 20px;
            max-height: 300px;
            overflow: hidden;
            position: relative;
          }
          
          .carousel img {
            margin-top: -36%; // center tall image with alot of white space
          }
          
          .carousel-indicators li {
            background-color: #939599;
            // border-radius: 50%;
            // height: 10px;
            // width: 10px;
          }
          
          `}
        </style>

        <Container>      
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100 h-25 crop"
                  src="../img/twsbi-mechanical-0.5mm.png"
                  alt="Twsbi Mechanical 0.5"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../img/twsbi-mechanical-0.7mm.png"
                  alt="Twsbi Mechanical 0.5"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              
            </Carousel>
        </Container>
        </>
      );
    }
}