import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '../../../redux/actions/produceActions';
import UsersComponent from './UsersComponent';

const Users = () => {
    const users = useSelector((state)=>state);
    const dispatch = useDispatch();

    const fetchProducts = async () =>{
        const response = await axios 
        .get("https://sleepy-chamber-69050.herokuapp.com/users")
        .catch((error)=>{
            console.log("err", error)
        });
        dispatch(setUsers(response.data))
    };

    useEffect(()=>{
        fetchProducts();
    } ,[])
    console.log("users: ",users)

    return (
        <div className='ui grid container'>
            <UsersComponent></UsersComponent>
        </div>
    );
};

export default Users;