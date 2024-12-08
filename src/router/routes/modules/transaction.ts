import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const TRANSACTION: AppRouteRecordRaw = {
    path: '/transaction',
    name: 'transaction',
    component: DEFAULT_LAYOUT,
    meta: {
        locale: 'menu.transaction',
        requiresAuth: true,
        icon: 'icon-desktop',
        order: 2,
    },
    children: [
        {
            path: 'realtime',
            name: 'Realtime',
            component: () => import('@/views/transaction/realtime/index.vue'),
            meta: {
                locale: 'menu.transaction.realtime',
                requiresAuth: true,
                roles: ['*'],
            },
        },

        {
            path: 'suspicious',
            name: 'Suspicious',
            component: () => import('@/views/transaction/suspicious/index.vue'),
            meta: {
                locale: 'menu.transaction.suspicious',
                requiresAuth: true,
                roles: ['admin'],
            },
        },
        {
            path: 'details',
            name: 'Details',
            component: () => import('@/views/transaction/details/index.vue'),
            meta: {
                locale: 'menu.transaction.details',
                requiresAuth: true,
                roles: ['admin'],
            },
        },
    ],
};

export default TRANSACTION;
