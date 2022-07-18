import * as React from 'react';
import PropTypes, { number } from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Axios from 'axios';

import SelectTextFields from './SelItem';
import {
    Grid,
    TextField,
    FormControlLabel,
    Checkbox,
    Button
} from '@mui/material';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let postRq = {
            body: data.get('body'),
            merchant_order_no: data.get('orderno'),
            amount: parseFloat(data.get('amount'))
            // user_vsys_addr: 'ATse3RcjEzwc5JHDPcduPYe4qA2mWhSNZaV',
        };
        const config = {
            Headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'server': 'uvicorn' 
            }
        };
        console.log(postRq);
        Axios.post('http://localhost:8000/credit/pre-create-order-credit', postRq, config)
            .then((response) => {
                console.log(response);
                window.location.replace(response.data);
            })
            .catch((error) => {
                alert(error);
            });
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Credit Card" {...a11yProps(0)} />
                    <Tab label="Binance Pay" {...a11yProps(1)} />
                    <Tab label="Crypto Currency" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Typography variant="h5" sx={{ paddingBottom: 3 }}>
                    Credit Card Info
                </Typography>
                {/* <SelectTextFields /> */}

                <Grid component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <Grid>
                        <TextField
                            id="body"
                            label="Description"
                            name="body"
                            sx={{
                                marginLeft: 5,
                                marginRight: 5,
                                marginBottom: 5,
                                marginTop: 2,
                                width: 200
                            }}
                        />
                    </Grid>

                    <Grid>
                        <TextField
                            id="orderno"
                            label="Order ID"
                            name="orderno"
                            sx={{
                                marginLeft: 5,
                                marginRight: 5,
                                marginBottom: 5,
                                marginTop: 2,
                                width: 200,
                                float: 'left'
                            }}
                        />
                        <Typography sx={{ float: 'left', mt: 4 }}>need new api here</Typography>
                    </Grid>

                    <Grid sx={{ clear: 'both' }}>
                        <TextField
                            id="amount"
                            label="Amount"
                            name="amount"
                            sx={{
                                marginLeft: 5,
                                marginRight: 5,
                                marginBottom: 5,
                                marginTop: 2,
                                width: 200,
                            }}
                        />
                    </Grid>

                    {/* <TextField
                                        disabled
                                        id="point"
                                        label=""
                                        onChange={handleChange}
                                        sx={{
                                            marginTop: 2,
                                            marginRight: 5,
                                            marginBottom: 5,
                                            width: 200
                                        }}
                                    /> */}
                    {/* <Grid>
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            sx={{ marginLeft: 4 }}
                            label="I agree to the policy."
                        />
                    </Grid> */}

                    <Grid sx={{ clear: 'both' }}>
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, ml: 5, width: 150 }}>
                            Confirm
                        </Button>
                    </Grid>

                </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Typography variant="h5" sx={{ paddingBottom: 3 }}>
                    Binance Pay Info
                </Typography>
                {/* <SelectTextFields /> */}
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Typography variant="h5" sx={{ paddingBottom: 3 }}>
                    Crypto Currency Info
                </Typography>
                {/* <SelectTextFields /> */}
            </TabPanel>
        </Box>
    );
}
