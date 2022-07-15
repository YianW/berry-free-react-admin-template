import { Card } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import MainCard from 'ui-component/cards/MainCard';

import StickyHeadTable from './TxTable';
import LinearWithValueLabel from './progess';
import SubCard from 'ui-component/cards/SubCard';

const TablerIcons = () => (
    <MainCard title="Project Details">
        <Card sx={{ overflow: 'hidden' }}>
            <Grid item xs={12} sm container sx={{ float: 'left' }}>
                <Typography variant="h3" sx={{ mb: 3 }}>Minting Progess</Typography>
            </Grid>
            <Grid item xs={12} sm container sx={{ float: 'left', marginBottom: 5 }}>
                <LinearWithValueLabel />
            </Grid>
            <SubCard>
                <Typography variant="h3">Mint Queue</Typography>
                <Grid item xs={12} sm container sx={{ float: 'left' }}>
                    <StickyHeadTable />
                </Grid>
                <Typography variant="h3">NFT minted</Typography>
                <Grid item xs={12} sm container sx={{ float: 'left' }}>
                    <StickyHeadTable />
                </Grid>
            </SubCard>
        </Card>
    </MainCard>
);

export default TablerIcons;
