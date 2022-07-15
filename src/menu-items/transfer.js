import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';

const icons = {
    RequestQuoteOutlinedIcon
};

const transaction = {
    id: 'manual transfer',
    title: 'Manual Transfer',
    type: 'group',
    children: [
        {
            id: 'transaction-TxHistory',
            title: 'Manual Transfer',
            type: 'item',
            url: '/transaction/TxHistory',
            icon: icons.RequestQuoteOutlinedIcon,
            breadcrumbs: false
        }
    ]
};

export default transaction;
