import * as React from 'react';
import UserList from '../components/UserList';
import HomePage from '../pages/HomePage';
import About from '../pages/About';

export const routingConfig = {
    user: {
        link: '/user',
        label: 'Users',
        page: <UserList />,
    },
    home: {
        link: '/',
        label: 'Home',
        page: <HomePage />,
    },
    about: {
        link: '/about',
        label: 'About',
        page: <About />,
    },
};

type KeysOfRoutingConfig = keyof typeof routingConfig;
type RouterArrayType = readonly KeysOfRoutingConfig[];

export const routerArray: RouterArrayType = ['about', 'user', 'home'];

export const navigationRouterArray: RouterArrayType = ['home', 'user', 'about'];
