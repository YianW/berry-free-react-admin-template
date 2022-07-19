import React from 'react';
import {
    Grid,
    Typography,
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    TextField
} from '@mui/material';

import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import MenuItem from '@mui/material/MenuItem';
import SwapHorizOutlinedIcon from '@mui/icons-material/SwapHorizOutlined';

import Axios from 'axios';

const ConPt = () => {
    const [merchant, setMerchant] = React.useState('USD');
    const [merchant2, setMerchant2] = React.useState('BTC');

    // TODO: need an api from backend to get merchantid info
    const merchants = [
        {
            value: 'USD',
            label: '$'
        },
        {
            value: 'EUR',
            label: '€'
        },
        {
            value: 'BTC',
            label: '฿'
        },
        {
            value: 'JPY',
            label: '¥'
        }
    ];

    const merchants2 = [
        {
            value: 'USD',
            label: '$'
        },
        {
            value: 'EUR',
            label: '€'
        },
        {
            value: 'BTC',
            label: '฿'
        },
        {
            value: 'JPY',
            label: '¥'
        }
    ];

    const handleChange = (event) => {
        setMerchant(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const postRq = {
            merchant_id: data.get('merchantid'),
            user_vsys_addr: 'ATse3RcjEzwc5JHDPcduPYe4qA2mWhSNZaV',
            mojo_amount: data.get('mojo'),
            pt_amount: data.get('point')
        };
        const config = {
            Headers: {
                'Access-Control-Allow-Origin': '*'
            }
        };
        console.log(postRq);
        Axios.post('http://localhost:8000/exmojo/lopt-mojo', postRq, config)
            .then((response) => {
                console.log('Transaction Succeeded. The transacgtion id is ', response);
            })
            .catch((error) => {
                alert(error);
            });
    };

    return (
        <MainCard title="Swap">
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <SubCard sx={{ paddingTop: 2 }}>
                        <Grid container spacing={gridSpacing}>
                            <Box
                                sx={{
                                    marginTop: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                }}
                            >
                                <Box component="form" /*onSubmit={handleSubmit}*/ noValidate sx={{ mt: 1 }}>
                                    <TextField
                                        id="side1"
                                        select
                                        name="side1"
                                        value={merchant2}
                                        onChange={handleChange}
                                        sx={{ marginTop: 2, ml: 5 }}
                                    >
                                        {merchants2.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        id="point"
                                        name="mono"
                                        defaultValue="0"
                                        sx={{
                                            marginRight: 2,
                                            marginBottom: 5,
                                            marginTop: 2,
                                            width: 200
                                        }}
                                    />

                                    <SwapHorizOutlinedIcon sx={{ mt: 3 }} />

                                    <TextField
                                        id="side2"
                                        select
                                        name="side2"
                                        value={merchant}
                                        onChange={handleChange}
                                        sx={{ marginTop: 2, ml: 2 }}
                                    >
                                        {merchants.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        disabled
                                        id="point"
                                        onChange={handleChange}
                                        sx={{
                                            marginTop: 2,
                                            marginRight: 5,
                                            marginBottom: 5,
                                            width: 200
                                        }}
                                    />
                                    <Grid>
                                        <FormControlLabel
                                            control={<Checkbox value="remember" color="primary" />}
                                            sx={{ marginLeft: 4 }}
                                            label="I agree to the policy."
                                        />
                                    </Grid>

                                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, ml: 5, width: 150 }}>
                                        Confirm
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                    </SubCard>
                </Grid>
                <Grid item xs={12}>
                    <SubCard title="Other Info">
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12} sm={6} md={4} lg={2}>
                                <Typography>Other Info.</Typography>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default ConPt;
