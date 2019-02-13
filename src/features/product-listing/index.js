import React, { Component } from 'react';
import ProductListItem from './product-list-item';
import { connect } from 'react-redux';
import fetchApi from '../../modules/fetch-api';

class ProductListing extends Component{

    componentDidMount(){
        const { loadProducts } = this.props
        fetchApi('get', 'http://5c631d8186452c00147aad95.mockapi.io/product')
            .then((json => {
                loadProducts(json)
            }))
    }

    render(){
    const { addToCart, removeFromCart, products, cart } = this.props
    return <div className='product-listing'>
      { products.map( product => 
      <ProductListItem 
        product ={product}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        cartItem={cart.filter( cartItem => cartItem.id === product.id)[0]}
        //cart={cartItemsWithQuantities(props.cart)}
      /> ) 
    } 
    </div>
    }
}

function mapStateToProps(state){
    return{
        cart: state.cart,
        products: state.products,
    }
}

function mapDispatchToProps(dispatch){
    return{
    loadProducts: (products) => {
        dispatch({ type: 'LOAD', payload: products})
    },
    addToCart: (item) => {
        dispatch({ type: 'ADD', payload: item })
    },
    removeFromCart: (item) =>{
        dispatch({ type: 'REMOVE', payload: item})
    }
}

}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);