import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import ProductListing from '../ProductListing/ProductListing';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <ProductListing></ProductListing>
        </div>
    );
};

export default Home;