import TokenOutlinedIcon from '@mui/icons-material/TokenOutlined';
import PhotoFilterOutlinedIcon from '@mui/icons-material/PhotoFilterOutlined';

// constant
const icons = {
    TokenOutlinedIcon,
    PhotoFilterOutlinedIcon
};

const wallet = {
    id: 'wallet',
    title: 'Wallet and Assets',
    type: 'group',
    children: [
        {
            id: 'wal-tokens',
            title: 'Tokens',
            type: 'item',
            url: '/wallet/Tokens',
            icon: icons.TokenOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'wal-Nfts',
            title: 'NFTs',
            type: 'item',
            url: '/wallet/Nfts',
            icon: icons.PhotoFilterOutlinedIcon,
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

export default wallet;
