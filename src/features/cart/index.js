import React, { Component } from 'react';
import { connect } from 'react-redux'


export const cartItemsWithQuantity = (cartItems) => {
    return cartItems.reduce((acc,item) => {
        const filteredItem =  acc.filter(item2 => item2.id === item.id) [0]
        filteredItem !== undefined ? filteredItem.quantity++ : acc.push({...item, quantity: 1,})
        return acc
    }, []) 
}

cartItems = [
    {
        id: 1,

    },
    {
        id: 1,
    },
    {
        id: 2,
    }
]

acc = [{
    id: 1,
    quantity: 1,
}]
