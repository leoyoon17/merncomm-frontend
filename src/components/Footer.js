import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';

export default class Footer extends Component {

  render () {
    return (
      <>
      <style>
          {`

          .footer-container {
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 100px;
            background-color: #898A8D;
            text-align: center;
            display: inline-flex;

          }

          .footer-text-container > * {
            color: #F7E10E;
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-size: 15px; 
          }

          #name {
            margin-top: 15px;
            margin-bottom: 0px;
          }

          p {
            margin-top: 0px;
            margin-bottom: 0px;
          }
          

          a:link, a:visited {
            color: #F7E10E;
          }

          a:hover {
            color: #98B5D2;
          }

          `}
      </style>

      <div class="footer-container">
        <Container className="footer-text-container">
          <p id="name"> Jae-yeon Yoon 2021</p>
          
          <p>Check out the Repository for this page <a href="https://github.com/leoyoon17/merncomm-frontend" target="_blank">here</a> </p>
        </Container>
      </div>
      </>
    );
  }
}