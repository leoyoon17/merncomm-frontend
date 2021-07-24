import React, { Component } from 'react';
import './App.css';

// Bootstrap Components
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import MainCarousel from './components/MainCarousel';
import ItemCards from './components/ItemCards';
import Footer from './components/Footer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "",
      test: "this is a test",
    };
  }

  async callAPI() {
    // fetch("http://localhost:8080/catalog/test")
    //   .then(res => res.json())
    //   .then(res => console.log(res))
    //   .then(res => this.setState({apiResponse: res.message}))
    //   .then(console.log(this.state.apiResponse.message))
    //   .catch(err => err);

    let response = await fetch("http://localhost:8080/catalog/test");
    
    if (!response.ok) {
      throw new Error(`HTTP Error! status: ${response.status}`);
    }

    let myResponse = await response.json();
    this.setState(() => ({
      apiResponse: myResponse.message,
    }));
    console.log(`The message is ${this.state.apiResponse}`);
  }



  async callGetProducts() {
    let response = await fetch("http://localhost:8080/catalog/products");

    if (!response.ok) {
      throw new Error(`HTTP Error! status: ${response.status}`);
    }

    console.log(response);
    let productList = await response.json();

    this.setState(() => ({
      apiResponse: productList,
    }));

    console.log(`The Products are: ${JSON.stringify(this.state.apiResponse)}`);
  }

  componentDidMount() {
    // this.callAPI();
    // this.callGetProducts();
  }


  render() {
    return (
        <>
          <style type="text/css">
            {`
              .container {
                // max-width: 1140px;
                width: 941px;
              }
              .navbar-main {
                background-color: #939599;
                box-shadow: 0px 0px 8px 2px #98B5D2;
                width: 100%;
                padding-top: 0.5px;
                padding-bottom: 0.5px;
              }

              .navbar-brand {
                color: #F7E10E;
                font-size: 30px;
                font-family: "Segoe UI", Arial, sans-serif;
                font-weight: bold;
                font-style: italic;
              }

              .navbar-brand:hover {
                color: #98B5D2;
              }

              .nav-link {
                float: left;
                color: #F7E10E;
              }

              .nav-link:hover {
                color: #98B5D2;
              }

              
            `}
          </style>

          <Navbar variant="main" sticky="Top">
            <Container>
              <Navbar.Brand variant="test" href="#home">MERNComm</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse className="justify-content-end">
                <Nav className="justify-content-end">
                  <Nav.Link href="">SIGN UP</Nav.Link>
                  <Nav.Link href="">CART</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              
            </Container>
          </Navbar>

          <MainCarousel />
          <ItemCards />
          <Footer />
        </>
    );
  }
}
