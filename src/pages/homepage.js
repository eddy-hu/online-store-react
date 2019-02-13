import React, { Component } from 'react';
import ProductListing from '../features/product-listing';
import data from '../data/product.json';

export default function HomePage(props) {

    return <div>
        <ProductListing products={data.products} />
        </div>
}