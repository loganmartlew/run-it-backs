/* eslint-disable no-undef */

// import { registerRoute } from 'workbox-routing';
// import { CacheFirst } from 'workbox-strategies';

// registerRoute(
//   ({ request }) => request.destination === 'image',
//   new CacheFirst()
// );

importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.1.1/workbox-sw.js'
);

workbox.routing.registerRoute(
  ({ request }) => request.destination === 'image',
  new workbox.strategies.CacheFirst()
);
