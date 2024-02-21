import { createBrowserRouter } from 'react-router-dom';
import Login from '@/pages/user/Login';

import type { RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [
  {
    path: '/user/login',
    element: <Login />
  }
]

const router = createBrowserRouter(routes);

export  default router;