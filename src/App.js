import React, { Component } from "react";
import Router from "./Router";
import { NavLink, withRouter } from 'react-router-dom';
import cart from "./features/cart";
import { Navbar,Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { connect }  from 'react-redux';

/**
 *  <Navbar bg="primary" variant="dark">
  <Navbar.Brand href="#">STORE NAME</Navbar.Brand>
  <Nav className="mr-auto">
   <Nav.Link to="/">HOME</Nav.Link> 
   <Nav.Link to="/">TOP</Nav.Link> 
   <Nav.Link to="/">BUTTOM</Nav.Link> 
   <Nav.Link to="/">SHOES</Nav.Link> 
   <Nav.Link to="/">BAGS</Nav.Link> 
   <NavLink to="/cart">CART({ cart.reduce((acc, item) => {
            return acc + item.quantity
      }, 0) })</NavLink> 
   <NavLink to="/checkout">CHECK OUT</NavLink> 
  </Nav>
  </Navbar>
 */

const Navigation = ({ cart }) => (
  <Nav variant="pills" defaultActiveKey="/">
 <Nav.Item>
 <Nav.Link href="/">HOME</Nav.Link>
 </Nav.Item>
 <Nav.Item>
    <Nav.Link href={"#"}>TOPS</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href={"#"}>BOTTOMS</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href={"#"}>SHOES</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href={"#"}>BAGS</Nav.Link>
  </Nav.Item>
  <LinkContainer to="/cart">

  <Nav.Item>
  &nbsp;CART({ cart.reduce((acc, item) => {
            return acc + item.quantity
      }, 0) })  
  </Nav.Item>
  </LinkContainer>
  <LinkContainer to="/checkout">
  <Nav.Item>
  &nbsp;	&nbsp; CHECK OUT 
  </Nav.Item>
  </LinkContainer>
 

</Nav>
 
);

class App extends Component {
  render() {
    return (
      <div className='page-container'>
        <Navigation {...this.props }/>
        <Router />
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    cart: state.cart,
  }

}


export default withRouter(connect(mapStateToProps)(App));
