import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';

// constant
const icons = {
    ReceiptLongOutlinedIcon
};

const transaction = {
    id: 'transaction',
    title: 'Transaction',
    type: 'group',
    children: [
        {
            id: 'transaction-TxHistory',
            title: 'Transaction History',
            type: 'item',
            url: '/transaction/TxHistory',
            icon: icons.ReceiptLongOutlinedIcon,
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

export default transaction;
