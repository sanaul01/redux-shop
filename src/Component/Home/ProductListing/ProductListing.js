import React from 'react';
import {useDispatch, useSelector } from 'react-redux';
import ProductComponent from '../ProductComponent/ProductComponent';
import { useEffect } from 'react';
import axios from 'axios';
import { setProducts } from '../../../redux/actions/produceActions';

const ProductListing = () => {

    const products = useSelector((state)=>state);
    const dispatch = useDispatch();

    const fetchProducts = async () =>{
        const response = await axios 
        .get("http://localhost:5000/products")
        .catch((error)=>{
            console.log("err", error)
        });
        dispatch(setProducts(response.data))
    };

    useEffect(()=>{
        fetchProducts();
    } ,[])
    console.log("products: ",products)

    return (
        <div className='ui grid container mb-5'>
            <ProductComponent></ProductComponent>
        </div>
    );
};

export default ProductListing;