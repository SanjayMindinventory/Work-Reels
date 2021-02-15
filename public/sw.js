/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const CACHE = 'network-or-cache'

self.addEventListener('install', function (event) {
  console.log('Hello world from the Service Worker 🤙')

  event.waitUntil(precache())
})

self.addEventListener('fetch', function (evt) {
  console.log('The service worker is serving the asset.')

  evt.respondWith(
    fromNetwork(evt.request, 400).catch(function () {
      return fromCache(evt.request)
    }),
  )
})

function precache() {
  return caches.open(CACHE).then(function (cache) {
    return cache.addAll(['./controlled.html', './asset'])
  })
}

function fromNetwork(request, timeout) {
  return new Promise(function (fulfill, reject) {
    const timeoutId = setTimeout(reject, timeout)

    fetch(request).then(function (response) {
      clearTimeout(timeoutId)
      fulfill(response)
    }, reject)
  })
}

function fromCache(request) {
  return caches.open(CACHE).then(function (cache) {
    return cache.match(request).then(function (matching) {
      return matching || Promise.reject('no-match')
    })
  })
}

function getEndpoint() {
  return self.registration.pushManager
    .getSubscription()
    .then(function (subscription) {
      if (subscription) {
        return subscription.endpoint
      }

      throw new Error('User not subscribed')
    })
}

self.addEventListener('push', function (event) {
  event.waitUntil(
    getEndpoint()
      .then(function (endpoint) {
        return fetch('./getPayload?endpoint=' + endpoint)
      })
      .then(function (response) {
        return response.text()
      })
      .then(function (payload) {
        self.registration.showNotification('ServiceWorker Cookbook', {
          body: payload,
        })
      }),
  )
})

// If the loader is already loaded, just stop.
// if (!self.define) {
//   const singleRequire = name => {
//     if (name !== 'require') {
//       name = name + '.js';
//     }
//     let promise = Promise.resolve();
//     if (!registry[name]) {
//
//         promise = new Promise(async resolve => {
//           if ("document" in self) {
//             const script = document.createElement("script");
//             script.src = name;
//             document.head.appendChild(script);
//             script.onload = resolve;
//           } else {
//             importScripts(name);
//             resolve();
//           }
//         });
//
//     }
//     return promise.then(() => {
//       if (!registry[name]) {
//         throw new Error(`Module ${name} didn’t register its module`);
//       }
//       return registry[name];
//     });
//   };
//
//   const require = (names, resolve) => {
//     Promise.all(names.map(singleRequire))
//       .then(modules => resolve(modules.length === 1 ? modules[0] : modules));
//   };
//
//   const registry = {
//     require: Promise.resolve(require)
//   };
//
//   self.define = (moduleName, depsNames, factory) => {
//     if (registry[moduleName]) {
//       // Module is already loading or loaded.
//       return;
//     }
//     registry[moduleName] = Promise.resolve().then(() => {
//       let exports = {};
//       const module = {
//         uri: location.origin + moduleName.slice(1)
//       };
//       return Promise.all(
//         depsNames.map(depName => {
//           switch(depName) {
//             case "exports":
//               return exports;
//             case "module":
//               return module;
//             default:
//               return singleRequire(depName);
//           }
//         })
//       ).then(deps => {
//         const facValue = factory(...deps);
//         if(!exports.default) {
//           exports.default = facValue;
//         }
//         return exports;
//       });
//     });
//   };
// }
// define("./sw.js",['./workbox-98be7402'], function (workbox) { 'use strict';
//
//   /**
//   * Welcome to your Workbox-powered service worker!
//   *
//   * You'll need to register this file in your web app.
//   * See https://goo.gl/nhQhGp
//   *
//   * The rest of the code is auto-generated. Please don't update this file
//   * directly; instead, make changes to your Workbox build configuration
//   * and re-run your build process.
//   * See https://goo.gl/2aRDsh
//   */
//
//   importScripts();
//   self.skipWaiting();
//   workbox.clientsClaim();
//   workbox.registerRoute(/.*/i, new workbox.NetworkOnly({
//     "cacheName": "dev",
//     plugins: []
//   }), 'GET');
//
// });
//# sourceMappingURL=sw.js.map
