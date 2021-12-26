import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const AllproductComponent = () => {

    const products = useSelector((state)=>state.allProducts.products);
    const renderList = products?.slice(0, 8).map((product) => {
        const {_id, name, verssion, price, image} = product;
        return(
            <div className='four wide column mt-5' key = {_id}>
                <Link style={{ textDecorationLine: 'none'}} to={`/product/${_id}`}>
                <div className='ui link cards'>
                    <div className='card'>
                        <div className='image'>
                            <img style={{height:220}} src={image} alt="" />
                        </div>
                        <div className='content'>
                        <div className='header'>{name}</div>
                        <div className=' price'>TK {price}</div>
                        <div className='meta header'><h3>{verssion}</h3></div>
                        </div>
                    </div>
                </div>
                </Link>
            </div>
        )
    });
    return (
        <>{renderList}</>
    )
};

export default AllproductComponent;