import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

// constant
const icons = {
    AccountBalanceWalletOutlinedIcon,
    AccountBoxOutlinedIcon,
    KeyOutlinedIcon
};

const settings = {
    id: 'settings',
    title: 'Settings',
    type: 'group',
    children: [
        {
            id: 'users-permissions',
            title: 'Users and Permissions',
            type: 'item',
            url: '/settings/users-permissions',
            icon: icons.AccountBalanceWalletOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'wallets',
            title: 'Wallets',
            type: 'item',
            url: '/settings/wallets',
            icon: icons.AccountBoxOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'api-integrations',
            title: 'API keys and Integrations',
            type: 'item',
            url: '/settings/api-integrations',
            icon: icons.KeyOutlinedIcon,
            breadcrumbs: false
        }
    ]
};

export default settings;
