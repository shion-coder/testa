import { lazy } from 'react';

const AnalyticsDashboardApp = lazy(() => import('./AnalyticsDashboardApp'));

const AnalyticsDashboardAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'dashboards',
      element: <AnalyticsDashboardApp />,
    },
  ],
};

export default AnalyticsDashboardAppConfig;
