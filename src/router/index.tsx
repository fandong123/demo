import { createBrowserRouter } from 'react-router-dom';
import Login from '@/pages/user/Login';
import Registry from '@/pages/user/Registry';
import Layout from '@/pages/layout';
import Dashbord from '@/pages/dashbord';
import Analysis from '@/pages/analysis';
import MerchantMap from '@/pages/merchantMap';
import UserMap from '@/pages/userMap';
import Mine from '@/pages/mine';
import CashPledge from '@/pages/cashPledge';

import type { RouteObject } from 'react-router-dom';


const routes: RouteObject[] = [
  {
    path: '/',
  },
  {
    path: '/user/login',
    element: <Login />
  },
  {
    path: '/user/registry',
    element: <Registry />
  },
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: '/dashbord',
        element: <Dashbord />
      },
      {
        path: '/analysis',
        element: <Analysis />
      },
      {
        path: '/merchantMap',
        element: <MerchantMap />
      },
      {
        path: '/userMap',
        element: <UserMap />
      },
      {
        path: '/mine',
        element: <Mine />
      },
      {
        path: '/cashPledge',
        element: <CashPledge />
      },
    ]
  }
]

const router = createBrowserRouter(routes);

export  default router;