import { lazy } from 'react';

export default [
  {
    path: '/',
    label: 'Login',
    exact: true,
    component: lazy(() => import('./Views/LoginView')),
    private: false,
  },
  {
    path: '/home',
    label: 'Home',
    exact: false,
    component: lazy(() => import('./Views/HomeView')),
    private: true,
  },
  {
    path: '/home',
    label: 'Home',
    exact: false,
    component: lazy(() => import('./Views/HomeView')),
    private: true,
  },
];
