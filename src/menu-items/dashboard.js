// assets
// import { IconDashboard } from '@tabler/icons';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

// constant
const icons = { HomeOutlinedIcon };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Home',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.HomeOutlinedIcon,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
