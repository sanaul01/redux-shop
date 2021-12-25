import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const {user, isLoding} = useAuth();
    if(isLoding) {return <CircularProgress></CircularProgress>}
    
    return user.email ? children : <Navigate to="/login" replace state={{from: location}} />;
};

export default PrivateRoute;