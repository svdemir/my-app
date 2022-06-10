import React from 'react';
import { Navigate } from 'react-router-dom';
import { getToken } from './Common';

const PrivateRoute = ({ children }) => {
    if (!getToken()) {
        return <Navigate to="/login" replace />;
    }
    return children;
};


export default PrivateRoute;