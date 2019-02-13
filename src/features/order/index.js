import React from 'react';
import fetchApi from '../../modules/fetch-api';

class Order extends React.Component{
    state={
        order: null
    }

    componentDidMount(){
        fetchApi("get", `http://5c631d8186452c00147aad95.mockapi.io/order/${this.props.id}`)
            .then(json => {
                this.setState({
                    order: json
                })
            })
    }

    renderOrder(){
        const { name, email, order_items_attributes } = this.state.order;
        return <div>
            <h3>
                Order info
            </h3>
            <div>Name: { name }</div>
            <div>Email: { email }</div>
            <h4>Items: </h4>
            <ul>
                {
                    order_items_attributes &&  order_items_attributes.map(item => {
                        console.log(item);
                        const { product_id, quantity } = item
                        return <li>
                            Product ID: {product_id}<br/>
                            Quantity ID: {quantity}<br/>
                        </li>
                    })
                }
            </ul>

        </div>
    }
    render(){

        const { order } = this.state;
       // console.log(order);
        return <div>
            {
              
                order ? this.renderOrder() : "Loading....."
            }
        </div>
    }
}

export default Order;