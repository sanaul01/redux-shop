import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../../redux/actions/produceActions';
import AllproductComponent from '../AddProducts/AllproductComponent';

const Allproducts = () => {
    const products = useSelector((state)=>state);
    const dispatch = useDispatch();

    const fetchProducts = async () =>{
        const response = await axios 
        .get("https://arcane-dawn-96246.herokuapp.com/products")
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
        <div className='ui grid container'>
            <AllproductComponent></AllproductComponent>
        </div>
    );
};

export default Allproducts;