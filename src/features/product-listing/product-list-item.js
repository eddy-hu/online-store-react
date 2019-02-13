import React, { Component } from 'react';
import AddButton from './add-button';
import RemoveButton from './remove-button';
import {Card, Button} from 'react-bootstrap';
export default function ProductListItem(props){

   // const thisItemInCart = props.cart.filter(item => item.id === props.product.id)[0];
   /**
    *     <img 
        height={100}
        title={ props.product.name }
        src={`/products/${props.product.image}`}
        <h3>{ props.product.name }</h3>
        />
    */
    return<div className='product-list-item'>
       <Card style={{ width: '12rem' }}>
       <Card.Img variant="top" width= '250rem' src={`/products/${props.product.image}`} />
       <Card.Body>
        <Card.Title>{ props.product.name }</Card.Title>
        <Card.Text> 
        { props.product.price }</Card.Text>
       
        <div> 
            <AddButton 
            cartItem={props.cartItem} 
            product={props.product}
            addToCart={props.addToCart}
             />
             {
                 props.cartItem 
                 ?  <RemoveButton 
                 cartItem={props.cartItem} 
                 product={props.product}
                 removeFromCart={props.removeFromCart}
                  />
                 : null
             }
          
        </div>
        </Card.Body>
        </Card>
    </div>
}