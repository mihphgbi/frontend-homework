import {IRoute} from '../models/route/route.model';
import React from 'react';
import HelpIndexPage from "../pages/features/help/help-page";
import SettingIndexPage from "../pages/features/settings/setting";
import StatisticsIndexPage from "../pages/others/statistics/statistics-index";
import InvoiceDetailPage from "../pages/recents/invoice/invoice-details/invoice-details";
import EditInvoiceIndexPage from "../pages/recents/invoice/edit-invoice/edit-invoice";
// import HomePage from "../pages/recents/home/home";
// import InvoiceListPage from "../pages/recents/invoice/invoice-list/invoice-list";
// import CreateInvoice from "../pages/recents/invoice/create-invoice/create-invoice";
// import ContractorsIndexPage from "../pages/recents/contractors/contractors-index";
// import ProductAndServicesIndexPage from "../pages/recents/products-and-serivces/products-and-services";
// import UsersIndexPage from "../pages/others/users/users-index";
// Lazy load the components
const InvoiceListPage = React.lazy(() => import('../pages/recents/invoice/invoice-list/invoice-list'));
const CreateInvoice = React.lazy(() => import('../pages/recents/invoice/create-invoice/create-invoice'));
const HomePage = React.lazy(() => import('../pages/recents/home/home'));
const UsersIndexPage = React.lazy(() => import('../pages/others/users/users-index'));
const ContractorsIndexPage = React.lazy(() => import('../pages/recents/contractors/contractors-index'));
const ProductAndServicesIndexPage = React.lazy(() => import('../pages/recents/products-and-serivces/products-and-services'));

export const routes: Array<IRoute> = [
    {
        key: 'home-route',
        title: 'Home',
        path: '/',
        enabled: true,
        component: HomePage
    },
    {
        key: 'invoice-list',
        title: 'Invoice list',
        path: '/invoice',
        enabled: true,
        component: InvoiceListPage
    },
    {
        key: 'create-invoice-route',
        title: 'New document',
        path: '/create-invoice',
        enabled: true,
        component: CreateInvoice
    },
    {
        key: 'invoice-details-route',
        title: 'Invoice Details',
        path: '/invoice-details',
        enabled: true,
        component: InvoiceDetailPage
    },
    {
        key: 'edit-invoice-route',
        title: 'Edit Invoice',
        path: '/edit-invoice',
        enabled: true,
        component: EditInvoiceIndexPage
    },
    {
        key: 'help',
        title: 'Help',
        path: '/help',
        enabled: true,
        component: HelpIndexPage
    },
    {
        key: 'setting',
        title: 'Setting',
        path: '/setting',
        enabled: true,
        component: SettingIndexPage
    },
    {
        key: 'statistics',
        title: 'Statistics',
        path: '/statistics',
        enabled: true,
        component: StatisticsIndexPage
    },
    {
        key: 'Users',
        title: 'Users',
        path: '/users',
        enabled: true,
        component: UsersIndexPage
    },
    {
        key: 'contractors',
        title: 'Contractors',
        path: '/contractors',
        enabled: true,
        component: ContractorsIndexPage
    },
    {
        key: 'products-and-services',
        title: 'Products and services',
        path: '/products-and-services',
        enabled: true,
        component: ProductAndServicesIndexPage
    },

];
