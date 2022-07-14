import React from 'react';
import Grid from '@mui/material/Grid';
import Cookies from 'universal-cookie';

const AuthVerify = () => {
    const verify = (event) => {
        event.preventDefault();
        const cookies = new Cookies();
        const token = cookies.get('t');
        console.log(token);
        console.log(typeof token);
        if (token === undefined) {
            alert('Please login first.');
            window.location.replace('/free');
        }
    };

    return <Grid onLoad={verify}></Grid>;
};

export default AuthVerify;
