import PropTypes from 'prop-types';

import { Box, Card, Grid } from '@mui/material';

import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

import ComplexGrid from './ComplexGrid';

const ShadowBox = ({ shadow }) => (
    <Card sx={{ mb: 3, boxShadow: shadow }}>
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                py: 4.5,
                bgcolor: 'primary.light',
                color: 'grey.800'
            }}
        >
            <Box sx={{ color: 'inherit' }}>boxShadow: {shadow}</Box>
        </Box>
    </Card>
);

ShadowBox.propTypes = {
    shadow: PropTypes.string.isRequired
};

// ============================|| UTILITIES SHADOW ||============================ //

const UtilitiesShadow = () => (
    <MainCard title="Nft in Market">
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ComplexGrid />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ComplexGrid />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ComplexGrid />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ComplexGrid />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ComplexGrid />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ComplexGrid />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ComplexGrid />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ComplexGrid />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ComplexGrid />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ComplexGrid />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ComplexGrid />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ComplexGrid />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ComplexGrid />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ComplexGrid />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ComplexGrid />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ComplexGrid />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ComplexGrid />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ComplexGrid />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ComplexGrid />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ComplexGrid />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ComplexGrid />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ComplexGrid />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ComplexGrid />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ComplexGrid />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ComplexGrid />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </MainCard>
);

export default UtilitiesShadow;
