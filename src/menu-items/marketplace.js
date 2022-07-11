// assets
import PhotoLibraryOutlinedIcon from '@mui/icons-material/PhotoLibraryOutlined';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';

// constant
const icons = {
    PhotoLibraryOutlinedIcon,
    AddPhotoAlternateOutlinedIcon
};

// ==============================|| MARKETPLACE MENU ITEMS ||============================== //

const marketplace = {
    id: 'marketplace',
    title: 'Marketplace',
    type: 'group',
    children: [
        {
            id: 'util-NftOwns',
            title: 'Nft Owns',
            type: 'item',
            url: '/utils/util-NftOwns',
            icon: icons.PhotoLibraryOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'util-NftMarket',
            title: 'Nft in Market',
            type: 'item',
            url: '/utils/util-NftMarket',
            icon: icons.AddPhotoAlternateOutlinedIcon,
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
