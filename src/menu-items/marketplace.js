import PhotoLibraryOutlinedIcon from '@mui/icons-material/PhotoLibraryOutlined';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';

const icons = {
    PhotoLibraryOutlinedIcon,
    AddPhotoAlternateOutlinedIcon,
    ReceiptLongOutlinedIcon
};

const marketplace = {
    id: 'marketplace',
    title: 'Marketplace',
    type: 'group',
    children: [
        {
            id: 'util-NftProjects',
            title: 'Nft Projects',
            type: 'item',
            url: '/utils/util-NftPjt',
            id: 'util-NftCollections',
            title: 'Nft Collections',
            type: 'item',
            url: '/utils/util-NftCollect',
            icon: icons.PhotoLibraryOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'util-NftProjects',
            title: 'Nft Projects',
            type: 'item',
            url: '/utils/util-NftPjt',
            icon: icons.AddPhotoAlternateOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'util-NftOrders',
            title: 'Nft Orders',
            type: 'item',
            url: '/utils/util-Orders',
            icon: icons.ReceiptLongOutlinedIcon,
            breadcrumbs: false
        }
    ]
};

export default marketplace;
