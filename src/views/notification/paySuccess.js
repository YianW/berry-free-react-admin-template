import { Typography } from '@mui/material';
import React from 'react';

import Axios from 'axios';

const paysuccess = () => {
    let url = window.location.href;
    url = new URL(url);
    const status = url.searchParams.get('txn_state');
    console.log(status);

    return (
        <>
            <Typography variant='h2'>Payment {status}!</Typography>
            <Typography variant='h3'>&gt;___&lt;</Typography>
        </>
    );
};

export default paysuccess;
