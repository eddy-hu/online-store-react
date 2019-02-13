import React from 'react';
import { connect } from 'react-redux';
import Cart from '../cart';
import CheckoutForm from './form';
import fetchApi from '../../modules/fetch-api';

function submitOrder(values, cart) {
    const { email, name } = values.order;
    fetchApi('post', 'https://5c631d8186452c00147aad95.mockapi.io/order', {
            name: name,
            email: email,
            order_items_attributes: cart.map(item => ({
                product_id: item.id,
                quantity: item.quantity,

            }))
        }
    ).then(json => {
        if(json.errors){
            alert('something went wrong!')
            return
        }
        document.location.href = `/orders/${json.id}`

    })
}

function Checkout(props){
   const { cart } = props;
    return <div>
        <div>
        <Cart />
        </div>
        <CheckoutForm onSubmit={(values) => submitOrder(values, cart)} />
    </div>

}

function mapStateToProps(state){
    return {
        cart: state.cart,
    }
}

export default connect(mapStateToProps)(Checkout);