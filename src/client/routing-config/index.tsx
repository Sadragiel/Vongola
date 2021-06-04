import * as React from 'react';
import UserList from '../components/UserList';
import HomePage from '../pages/HomePage';
import About from '../pages/About';
import Registration from '../pages/Registration';

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
    registration: {
        link: '/registration',
        label: 'Registration',
        page: <Registration />,
    },
};

type KeysOfRoutingConfig = keyof typeof routingConfig;
type RouterArrayType = readonly KeysOfRoutingConfig[];

export const routerArray: RouterArrayType = ['registration', 'about', 'user', 'home'];

export const navigationRouterArray: RouterArrayType = ['home', 'user', 'about'];
