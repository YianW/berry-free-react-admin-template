import { lazy } from 'react';

import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

const UtilsNftOwns = Loadable(lazy(() => import('views/marketplace/NftOwns')));
const UtilsNftMarket = Loadable(lazy(() => import('views/marketplace/NftMarket')));

const TradeConPt = Loadable(lazy(() => import('views/trade/ConPt')));
const TradeBuyTokens = Loadable(lazy(() => import('views/trade/BuyTokens')));
const TradeSwap = Loadable(lazy(() => import('views/trade/Swap')));

const TxHistory = Loadable(lazy(() => import('views/transaction/TxHistory')));

const WalletTk = Loadable(lazy(() => import('views/wallet/Tokens')));
const WalletNft = Loadable(lazy(() => import('views/wallet/Nfts')));

const Unauth = Loadable(lazy(() => import('views/unauth')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/unauthorized',
            element: <Unauth />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-NftOwns',
                    element: <UtilsNftOwns />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-NftMarket',
                    element: <UtilsNftMarket />
                }
            ]
        },
        {
            path: 'trade',
            children: [
                {
                    path: 'trade-ConPt',
                    element: <TradeConPt />
                }
            ]
        },
        {
            path: 'trade',
            children: [
                {
                    path: 'trade-BuyTokens',
                    element: <TradeBuyTokens />
                }
            ]
        },
        {
            path: 'trade',
            children: [
                {
                    path: 'trade-Swap',
                    element: <TradeSwap />
                }
            ]
        },
        {
            path: 'transaction',
            children: [
                {
                    path: 'txHistory',
                    element: <TxHistory />
                }
            ]
        },
        {
            path: 'wallet',
            children: [
                {
                    path: 'tokens',
                    element: <WalletTk />
                }
            ]
        },
        {
            path: 'wallet',
            children: [
                {
                    path: 'nfts',
                    element: <WalletNft />
                }
            ]
        }
    ]
};

export default MainRoutes;
