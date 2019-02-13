import React from "react";
import {Button} from 'react-bootstrap';

export default function RemoveButton(props) {
  return (
    <Button  variant="danger"onClick={() => props.removeFromCart(props.cartItem)}>
      Remove
    </Button>
  );
}
