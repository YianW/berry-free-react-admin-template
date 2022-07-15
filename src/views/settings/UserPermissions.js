import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Axios from 'axios';
import RowRadioButtonsGroup from './RadioBox';

import { Card } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';

import Divider from '@mui/material/Divider';

import StickyHeadTable from './TxTable';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                V systems
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function SignUp() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let role = data.get('superadmin') || data.get('admin') || data.get('minter') || data.get('observer');
        const postRq = {
            Username: data.get('username'),
            Password: data.get('password'),
            Role: role
        };
        console.log(postRq);
        // window.location.replace('/free');
        Axios.post('http://localhost:8080/api/register', postRq).then((response) => {
            console.log(response);

            if (response.status == 201) {
                alert("Register Sucessfully.");
            }
        });
    };

    return (
        <>
            <MainCard title="Add/Remove Users">
                <Card sx={{ overflow: 'hidden' }}>
                    <Container component="main" maxWidth="xs" sx={{ mb: 5 }}>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid>
                                    <TextField required fullWidth id="username" label="Username" name="username" autoComplete="username" />
                                </Grid>
                                <Grid sx={{ ml: 5 }}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                    />
                                </Grid>
                                <Grid sx={{ marginTop: 5 }}>
                                    <RowRadioButtonsGroup />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 2, mb: 2, mr: 1 }}
                            //
                            //
                            //
                            //
                            >
                                Add User
                            </Button>
                        </Box>
                    </Container>

                    <Divider />

                    <Container component="main" maxWidth="xs" sx={{ mt: 5 }}>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid>
                                    <TextField required fullWidth id="username" label="Username" name="username" autoComplete="username" />
                                </Grid>
                                <Grid sx={{ ml: 5 }}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 4, mb: 2, mr: 1 }}
                            //
                            //
                            //
                            //
                            >
                                Remove User
                            </Button>
                        </Box>
                    </Container>
                </Card>
            </MainCard>

            <MainCard title="Manage User" sx={{ mt: 5 }}>
                <StickyHeadTable />
            </MainCard>
        </>
    );
}
