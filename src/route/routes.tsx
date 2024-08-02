import {IRoute} from '../models/route/route.model';
import React from 'react';
// Lazy load the components
const CreateInvoice = React.lazy(() => import('../pages/invoice/create-invoice/create-invoice'));
const HomePage = React.lazy(() => import('../pages/home/home'));

export const routes: Array<IRoute> = [
    {
        key: 'create-invoice-route',
        title: 'New document',
        path: '/',
        enabled: true,
        component: HomePage
    },
    {
        key: 'create-invoice-route',
        title: 'New document',
        path: '/invoice',
        enabled: true,
        component: CreateInvoice
    },
];
