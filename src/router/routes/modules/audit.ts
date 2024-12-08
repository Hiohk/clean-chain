import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const AUDIT: AppRouteRecordRaw = {
    path: '/audit',
    name: 'audit',
    component: DEFAULT_LAYOUT,
    meta: {
        locale: 'menu.audit',
        requiresAuth: true,
        icon: 'icon-storage',
        order: 5,
    },
    children: [
        {
            path: 'logs',
            name: 'Logs',
            component: () => import('@/views/audit/logs/index.vue'),
            meta: {
                locale: 'menu.audit.logs',
                requiresAuth: true,
                roles: ['*'],
            },
        },

        {
            path: 'tracking',
            name: 'Tracking',
            component: () => import('@/views/audit/tracking/index.vue'),
            meta: {
                locale: 'menu.audit.tracking',
                requiresAuth: true,
                roles: ['admin'],
            },
        },
    ],
};

export default AUDIT;
