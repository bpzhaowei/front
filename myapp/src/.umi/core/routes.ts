// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'D:/xiangmu/java/duomokuai/front/myapp/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('@/pages/index').default,
    "routes": [
      {
        "path": "/map1",
        "component": require('@/pages/map/map1').default,
        "exact": true
      },
      {
        "path": "/fadian",
        "component": require('@/pages/map/Fadian').default,
        "exact": true
      },
      {
        "path": "/three2",
        "component": require('@/pages/map/Three2').default,
        "exact": true
      },
      {
        "path": "/three3",
        "component": require('@/pages/map/Three3').default,
        "exact": true
      },
      {
        "path": "/three5",
        "component": require('@/pages/map/three5').default,
        "exact": true
      },
      {
        "path": "/font1",
        "component": require('@/pages/ex/font1').default,
        "exact": true
      },
      {
        "path": "/ThreeBim",
        "component": require('@/pages/three/ThreeBim').default,
        "exact": true
      },
      {
        "path": "/ThreeBim3",
        "component": require('@/pages/three/ThreeBim3').default,
        "exact": true
      },
      {
        "path": "/ThreeBim4",
        "component": require('@/pages/three/ThreeBim4').default,
        "exact": true
      },
      {
        "path": "/ThreeBim6",
        "component": require('@/pages/three/ThreeBim6').default,
        "exact": true
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
