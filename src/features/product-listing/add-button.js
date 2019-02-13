import React from "react";
import {Button} from 'react-bootstrap';


export default function AddButton(props) {
  return (
    <Button variant="primary" onClick={() => props.addToCart(props.product)}>
      Add to cart 
    </Button>
  );
}
