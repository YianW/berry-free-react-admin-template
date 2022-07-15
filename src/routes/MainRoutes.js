import { lazy } from 'react';

import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

const UtilsNftOwns = Loadable(lazy(() => import('views/marketplace/NftOwns')));
const UtilsNftMarket = Loadable(lazy(() => import('views/marketplace/NftMarket')));
const UtilsOrders = Loadable(lazy(() => import('views/marketplace/NftOrders')));
const UtilsDetails = Loadable(lazy(() => import('views/marketplace/NftDetails')));
const UtilsProjectDt = Loadable(lazy(() => import('views/marketplace/PjtDetails')));

const TradeConPt = Loadable(lazy(() => import('views/trade/ConPt')));
const TradeBuyTokens = Loadable(lazy(() => import('views/trade/BuyTokens')));
const TradeSwap = Loadable(lazy(() => import('views/trade/Swap')));

const TxHistory = Loadable(lazy(() => import('views/transaction/TxHistory')));

const WalletTk = Loadable(lazy(() => import('views/wallet/Tokens')));
const WalletNft = Loadable(lazy(() => import('views/wallet/Nfts')));

const Unauth = Loadable(lazy(() => import('views/unauth')));

const SwapTkBrg = Loadable(lazy(() => import('views/swap/tokenBridge')));

const SetUser = Loadable(lazy(() => import('views/settings/UserPermissions')));
const SetWal = Loadable(lazy(() => import('views/settings/Wallets')));
const SetAPI = Loadable(lazy(() => import('views/settings/APIKey')));


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
                    path: 'util-NftCollect',
                    element: <UtilsNftOwns />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-NftPjt',
                    element: <UtilsNftMarket />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-Details',
                    element: <UtilsDetails />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-ProjectDetails',
                    element: <UtilsProjectDt />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-Orders',
                    element: <UtilsOrders />
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
            path: 'swap',
            children: [
                {
                    path: 'token-bridge',
                    element: <SwapTkBrg />
                }
            ]
        },
        {
            path: 'settings',
            children: [
                {
                    path: 'users-permissions',
                    element: <SetUser />
                }
            ]
        },
        {
            path: 'settings',
            children: [
                {
                    path: 'wallets',
                    element: <SetWal />
                }
            ]
        },
        {
            path: 'settings',
            children: [
                {
                    path: 'api-integrations',
                    element: <SetAPI />
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
