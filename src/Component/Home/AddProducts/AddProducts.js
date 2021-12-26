import { Button, Container, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddProducts = () => {

    const [addedProduct, setAddedProduct] = useState({});

    // const [addedInfo, setAddedInfo] = useState();

    const handleonBlur= e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newAddedProduct = { ...addedProduct };
        newAddedProduct[field] = value;
        console.log(newAddedProduct)
        setAddedProduct(newAddedProduct);

        e.preventDefault()
    };

    const handleAddedProduct = e =>{
        const product = {
            ...addedProduct
        }
        
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                alert('added successfully')
            }
        })

        e.preventDefault()
    }



    return (
        <Container>
            <h1>Added Products</h1>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <form onSubmit={handleAddedProduct}>
                        <TextField 
                        sx={{width: '75%', m: 1}}
                        id="standard-basic" 
                        label="Product Name" 
                        type="name"
                        name="name"
                        onBlur={handleonBlur}
                        variant="standard" />

                    <TextField 
                        sx={{width: '75%', m: 1}}
                        id="standard-basic" 
                        label="Brand" 
                        type="text"
                        name="brand"
                        onBlur={handleonBlur}
                        variant="standard" />
                    
                    <TextField 
                        sx={{width: '75%', m: 1}}
                        id="standard-basic" 
                        label="Size" 
                        type="text"
                        name="size"
                        onBlur={handleonBlur}
                        variant="standard" />
                    
                    <TextField 
                        sx={{width: '75%', m: 1}}
                        id="standard-basic" 
                        label="Description" 
                        type="text"
                        name="description"
                        onBlur={handleonBlur}
                        variant="standard" />

                    <TextField 
                        sx={{width: '75%', m: 1}}
                        id="standard-basic" 
                        label="Image Url" 
                        type="name"
                        name="image"
                        onBlur={handleonBlur}
                        variant="standard" />

                    <TextField 
                        sx={{width: '75%', m: 1}}
                        id="standard-basic" 
                        label="Price" 
                        type="number"
                        name="price"
                        onBlur={handleonBlur}
                        variant="standard" />
                    <Button sx={{width: '75%', m: 1}} type="submit" variant="contained">Add Product</Button>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AddProducts;