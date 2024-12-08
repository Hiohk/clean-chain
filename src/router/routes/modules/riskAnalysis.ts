import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const RISK_ANALYSIS: AppRouteRecordRaw = {
    path: '/analysis',
    name: 'analysis',
    component: DEFAULT_LAYOUT,
    meta: {
        locale: 'menu.analysis',
        requiresAuth: true,
        icon: 'icon-apps',
        order: 7,
    },
    children: [
        {
            path: 'score',
            name: 'Score',
            component: () => import('@/views/riskAnalysis/riskScore/index.vue'),
            meta: {
                locale: 'menu.analysis.score',
                requiresAuth: true,
                roles: ['*'],
            },
        },
        {
            path: 'prediction',
            name: 'Prediction',
            component: () =>
                import('@/views/riskAnalysis/modelPrediction/index.vue'),
            meta: {
                locale: 'menu.analysis.model',
                requiresAuth: true,
                roles: ['*'],
            },
        },
    ],
};

export default RISK_ANALYSIS;
