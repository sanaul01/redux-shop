import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectProduct } from '../../../redux/actions/produceActions';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const ProductDetails = () => {
    const product = useSelector((state) => state.product);
    const {name, price, verssion, image, description} = product;
    const {productId} = useParams()
    const dispatch = useDispatch()
    console.log(product)

    const fetchProductDetail = async () =>{
        const response = await axios.get(`https://arcane-dawn-96246.herokuapp.com/products/${productId}`)
        .catch((error) =>{
            console.log(error);
        });

        dispatch(selectProduct(response.data))
    };

    useEffect(()=>{
        if(productId && product !== ""){
            fetchProductDetail()
        }
    } , [productId])




    return (
        <div className='ui grid container'>
            {Object.keys(product).length === 0 ?(
                <div>...loading</div>
            ): (
                <div className='mt-5'>
                    <div className='ui two column stackable center aligned grid'>
                        <div className='ui vertical divider'>Add</div>
                        <div className='middle aligned row'>
                            <div className='column lp'>
                                <img className='ui fluid image' src={image} alt="" />
                            </div>
                            <div className='column rp'>
                                <h1>{name}</h1>
                                <h2>
                                    <a className='ui teal tag lable' style={{ textDecorationLine: 'none'}}>TK {price}</a>
                                </h2>
                                <h3 className='ui brown header'>{verssion}</h3>
                                <p>{description}</p>
                                <div className='ui vertical animated button' tabIndex="0">
                                    <div className='hidden content'>
                                        <i className='shop icon'></i>
                                    </div>
                                    <div className='visible content'>Add to cart</div>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
            )}
        
        </div>
    );
};

export default ProductDetails;