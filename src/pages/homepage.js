import React, { Component } from 'react';
import ProductListing from '../features/product-listing';
import data from '../data/product.json';

export default function HomePage(props) {

    return <div>
        <h2>Home Page</h2>
        <ProductListing products={data.products} />
        </div>
}