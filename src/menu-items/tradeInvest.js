import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';

// constant
const icons = {
    LoyaltyOutlinedIcon,
    ShoppingCartOutlinedIcon,
    CurrencyExchangeOutlinedIcon
};

const marketplace = {
    id: 'tradeInvest',
    title: 'trade and invest',
    type: 'group',
    children: [
        {
            id: 'trade-ConPt',
            title: 'Convert Points',
            type: 'item',
            url: '/trade/trade-ConPt',
            icon: icons.LoyaltyOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'trade-BuyToken',
            title: 'Buy Tokens',
            type: 'item',
            url: '/trade/trade-BuyTokens',
            icon: icons.ShoppingCartOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'trade-Swap',
            title: 'Swap',
            type: 'item',
            url: '/trade/trade-Swap',
            icon: icons.CurrencyExchangeOutlinedIcon,
            breadcrumbs: false
        }
        // {
        //     id: 'icons',
        //     title: 'Icons',
        //     type: 'collapse',
        //     icon: icons.IconWindmill,
        //     children: [
        //         {
        //             id: 'tabler-icons',
        //             title: 'Tabler Icons',
        //             type: 'item',
        //             url: '/icons/tabler-icons',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'material-icons',
        //             title: 'Material Icons',
        //             type: 'item',
        //             url: '/icons/material-icons',
        //             breadcrumbs: false
        //         }
        //     ]
        // }
    ]
};

export default marketplace;
