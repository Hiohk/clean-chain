import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const REPORT: AppRouteRecordRaw = {
    path: '/report',
    name: 'report',
    component: DEFAULT_LAYOUT,
    meta: {
        locale: 'menu.report',
        requiresAuth: true,
        icon: 'icon-book',
        order: 4,
    },
    children: [
        {
            path: 'suspiciousReport',
            name: 'SuspiciousReport',
            component: () => import('@/views/report/suspiciousReport/index.vue'),
            meta: {
                locale: 'menu.report.suspicious',
                requiresAuth: true,
                roles: ['*'],
            },
        }
    ],
};

export default REPORT;
