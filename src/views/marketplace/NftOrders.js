import { Card } from '@mui/material';

import MainCard from 'ui-component/cards/MainCard';

import StickyHeadTable from './TxTable';

const TablerIcons = () => (
    <MainCard title="Orders">
        <Card sx={{ overflow: 'hidden' }}>
            <StickyHeadTable />
        </Card>
    </MainCard>
);

export default TablerIcons;
