import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';

const icons = {
    CurrencyExchangeOutlinedIcon
};

const swap = {
    id: 'swap',
    title: 'Swap',
    type: 'group',
    children: [
        {
            id: 'swap-bridge',
            title: 'Swap',
            type: 'item',
            url: '/swap/token-bridge',
            icon: icons.CurrencyExchangeOutlinedIcon,
            breadcrumbs: false
        }
    ]
};

export default swap;
