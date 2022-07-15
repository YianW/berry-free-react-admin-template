import React from 'react';
import {
    Grid,
    Box,
    Button,
    TextField,
} from '@mui/material';

import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

import Axios from 'axios';
import StickyHeadTable from './TxTable';

const SetWal = () => {
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
        Axios.post('http://localhost:8080/api/manualtransfer', postRq, config)
            .then((response) => {
                console.log('Transaction Succeeded. The transaction id is ', response);
            })
            .catch((error) => {
                alert(error);
            });
    };

    return (
        <>
            <MainCard title="Import Wallet">
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
                                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                        <TextField
                                            id="point"
                                            label="Receiver Address"
                                            name="addr"
                                            defaultValue="ADDRESS"
                                            sx={{
                                                marginLeft: 5,
                                                marginRight: 5,
                                                marginBottom: 5,
                                                marginTop: 2,
                                                width: 200
                                            }}
                                        />
                                        <Grid>
                                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, ml: 5, width: 150 }}>
                                                Confirm
                                            </Button>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Grid>
                        </SubCard>
                    </Grid>
                </Grid>
            </MainCard>

            <MainCard title="Create Wallet" sx={{ mt: 5 }}>
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
                                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                        <TextField
                                            id="point"
                                            label="Info"
                                            name="addr"
                                            defaultValue="Needed Info"
                                            sx={{
                                                marginLeft: 5,
                                                marginRight: 5,
                                                marginBottom: 5,
                                                marginTop: 2,
                                                width: 200
                                            }}
                                        />
                                        <TextField
                                            id="point"
                                            label="Info"
                                            name="addr"
                                            defaultValue="Needed Info"
                                            sx={{
                                                marginLeft: 5,
                                                marginRight: 5,
                                                marginBottom: 5,
                                                marginTop: 2,
                                                width: 200
                                            }}
                                        />
                                        <Grid>
                                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, ml: 5, width: 150 }}>
                                                Create
                                            </Button>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Grid>
                        </SubCard>
                    </Grid>
                </Grid>
            </MainCard>

            <MainCard title="My Wallets" sx={{ mt: 5 }}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                        <SubCard sx={{ paddingTop: 2 }}>
                            <Grid container spacing={gridSpacing}>
                                <StickyHeadTable />
                            </Grid>
                        </SubCard>
                    </Grid>
                </Grid>
            </MainCard>
        </>
    );
};

export default SetWal;
