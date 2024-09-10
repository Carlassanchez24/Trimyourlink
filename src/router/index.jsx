import { createBrowserRouter } from 'react-router-dom';
import Layout1 from '@/layout/Layout1';
import Welcome from '@/pages/Welcome';
import Login from '@/pages/Login';
import SignUp from '@/pages/SignUp';
import Account from '@/pages/Account';
import EditProfile from '@/components/ComponentsAccounts/EditProfile';
import AccountStart from '@/components/ComponentsAccounts/AccountStart';
import PrivateRoute from '@/components/PrivateRoute';
import UserURLs from '@/pages/User';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout1 />,
        children: [
            {
                index: true,
                element: <Welcome />,
            },
            {
                path: 'welcome',
                element: <Welcome />
            },
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'signup',
                element: <SignUp />,
            },
            {
                path: 'account',
                element: <Account />,
            },
            {
                path: 'user/urls',
                element: (                    
                        <UserURLs />
                ),
            },
            {
                path: 'editProfile',
                element: (
                    <PrivateRoute>
                        <EditProfile />
                    </PrivateRoute>
                ),
            },
            {
                path: 'accountStart',
                element: (
                    <PrivateRoute>
                        <AccountStart />
                    </PrivateRoute>
                ),
            },
        ],
    },
]);

export default router;