import { Card } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import MainCard from 'ui-component/cards/MainCard';

import StickyHeadTable from './TxTable';
import LinearWithValueLabel from './progess';
import SubCard from 'ui-component/cards/SubCard';

const TablerIcons = () => (
    <MainCard title="NFT Info">
        <Card sx={{ overflow: 'hidden' }}>
            <Grid item xs={12} sm container sx={{ float: 'left' }}>
                <Typography variant="h4">Minting Progess</Typography>
            </Grid>
            <Grid item xs={12} sm container sx={{ float: 'left', marginBottom: 5 }}>
                <LinearWithValueLabel />
            </Grid>
            <SubCard>
                <Grid item xs={12} sm container sx={{ float: 'left' }}>
                    <StickyHeadTable />
                </Grid>
            </SubCard>
        </Card>
    </MainCard>
);

export default TablerIcons;
