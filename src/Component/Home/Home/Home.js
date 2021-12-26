import React from 'react';
import Footer from '../../Footer/Footer';
import Banner from '../Banner/Banner';
import ProductListing from '../ProductListing/ProductListing';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductListing></ProductListing>
            <Footer></Footer>
        </div>
    );
};

export default Home;