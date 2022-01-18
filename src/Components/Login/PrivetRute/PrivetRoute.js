import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const PrivetRoute = ({ children, ...rest }) => {
    let location = useLocation()
    const { user } = useFirebase()
    if (user.email) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} />
};

export default PrivetRoute;