import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const CLIENT: AppRouteRecordRaw = {
  path: '/client',
  name: 'client',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.client',
    requiresAuth: true,
    icon: 'icon-user',
    order: 1,
  },
  children: [
    {
      path: 'clientInfo',
      name: 'ClientInfo',
      component: () => import('@/views/client/info/index.vue'),
      meta: {
        locale: 'menu.client.info',
        requiresAuth: true,
        roles: ['*'],
      },
    },

    {
      path: 'risk',
      name: 'Risk',
      component: () => import('@/views/client/risk/index.vue'),
      meta: {
        locale: 'menu.client.risk',
        requiresAuth: true,
        roles: ['admin'],
      },
    },
    {
      path: 'history',
      name: 'History',
      component: () => import('@/views/client/history/index.vue'),
      meta: {
        locale: 'menu.client.history',
        requiresAuth: true,
        roles: ['admin'],
      },
    },
  ],
};

export default CLIENT;
