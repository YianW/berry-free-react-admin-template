import React from 'react';
import {
    Grid,
    Typography,
    Box,
    Button,
    Checkbox,
    FormControlLabel,
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';

import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import UpgradeOutlinedIcon from '@mui/icons-material/UpgradeOutlined';
import { styled } from '@mui/material/styles';

import Axios from 'axios'; // will be used later

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '80%',
    maxHeight: '80%'
});

const NftDetails = () => {
    const handleSubmit = (event) => {
        // event.preventDefault();
        // const data = new FormData(event.currentTarget);
        // const postRq = {
        //     merchant_id: data.get('merchantid'),
        //     user_vsys_addr: 'ATse3RcjEzwc5JHDPcduPYe4qA2mWhSNZaV',
        //     mojo_amount: data.get('mojo'),
        //     pt_amount: data.get('point')
        // };
        // const config = {
        //     Headers: {
        //         'Access-Control-Allow-Origin': '*'
        //     }
        // };
        // console.log(postRq);
        // Axios.post('http://localhost:8000/exmojo/lopt-mojo', postRq, config)
        //     .then((response) => {
        //         console.log('Transaction Succeeded. The transacgtion id is ', response);
        //     })
        //     .catch((error) => {
        //         alert(error);
        //     });
    };

    return (
        <MainCard title="Detials">
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
                                <Img alt="complex" src="https://images.unsplash.com/photo-1525097487452-6278ff080c31" />
                                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                    <Stack direction="row" spacing={2}>
                                        <Button variant="outlined" startIcon={<DeleteIcon />}>
                                            Delete
                                        </Button>
                                        <Button variant="contained" endIcon={<UpgradeOutlinedIcon />}>
                                            Update Infomation
                                        </Button>
                                    </Stack>
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

export default NftDetails;
