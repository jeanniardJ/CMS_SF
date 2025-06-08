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

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-3380be71'], (function (workbox) { 'use strict';

  workbox.setCacheNameDetails({
    prefix: "jja-dev-cache-v1"
  });
  self.skipWaiting();
  workbox.clientsClaim();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "/build/admin.js",
    "revision": "ac722dc4c256df292d4d005c9efe6ce9"
  }, {
    "url": "/build/app.js",
    "revision": "af1a0f126122ea29d325d623bd284d66"
  }, {
    "url": "/build/appCss.css",
    "revision": "2e18331c78c9c2e4874a88f79a67346f"
  }, {
    "url": "/build/assets__layouts_modals_js.js",
    "revision": "ca59056df556b9f05cb10938eb4d0dd3"
  }, {
    "url": "/build/assets__layouts_toasts_js.js",
    "revision": "132d9c94f076e044884bc9d58b8fe178"
  }, {
    "url": "/build/assets__layouts_validationForm_js.js",
    "revision": "60e25c07e5533bf6b73ee9a792a0f2db"
  }, {
    "url": "/build/assets_styles_admin_admin_scss.css",
    "revision": "7b133d023affd7b65fa00b253bb79528"
  }, {
    "url": "/build/assets_styles_admin_admin_scss.js",
    "revision": "d1f6db77a305f99a34d69a3c855f1d7d"
  }, {
    "url": "/build/blog.css",
    "revision": "8022cfb3640609e8ada1641e7018a614"
  }, {
    "url": "/build/contact.css",
    "revision": "8b7e12c3680ed2b56446c0b3b70ad011"
  }, {
    "url": "/build/fonts/bootstrap-icons.1295669c.woff",
    "revision": null
  }, {
    "url": "/build/fonts/bootstrap-icons.92ea18a8.woff2",
    "revision": null
  }, {
    "url": "/build/home.css",
    "revision": "3832381d415b21fbc980865988680616"
  }, {
    "url": "/build/images/Capture.png",
    "revision": "8ca76147bf1265fbe0e50c914278b62c"
  }, {
    "url": "/build/images/about.jpg",
    "revision": "a869b0f507c325aa2fa402e13a387354"
  }, {
    "url": "/build/images/blank/40x40.png",
    "revision": "9d1eb25a4e68a9807841995667a4af57"
  }, {
    "url": "/build/images/code.852f8a34.jpg",
    "revision": null
  }, {
    "url": "/build/images/code.jpg",
    "revision": "2b1c92607993ba9641b978e46fb86de9"
  }, {
    "url": "/build/images/logo_jjadev.png",
    "revision": "455a51060630176218823644efef3ba6"
  }, {
    "url": "/build/images/logo_jjadev_512x512.png",
    "revision": "28a2d52762e3fb53cac259d22c62ca50"
  }, {
    "url": "/build/images/maintenance.532290f0.jpg",
    "revision": null
  }, {
    "url": "/build/images/maintenance.jpg",
    "revision": "c998e0093fa89602b3f796b5d81c820b"
  }, {
    "url": "/build/images/maskable_icon.png",
    "revision": "0bb21d6bd3df3561a24d9988928b5d28"
  }, {
    "url": "/build/images/svg/wave-haikei-bottom.svg",
    "revision": "b7a7f61b9ab4f5c9ccfe50b3dc7a6e79"
  }, {
    "url": "/build/images/svg/wave-haikei-top.svg",
    "revision": "7d1139bb5fd50f6866aa77adcf192b92"
  }, {
    "url": "/build/images/svg/wave-haikei.svg",
    "revision": "316af5ec704e84b195a4bfbe418f2606"
  }, {
    "url": "/build/legalnotice.css",
    "revision": "823a0625210e2e69c7f0c029bdbd3cbb"
  }, {
    "url": "/build/node_modules_symfony_stimulus-bridge_dist_webpack_loader_js_assets_controllers_json-vendor_sy-4f8c26.css",
    "revision": "458d53b0b91f589a310f9d363ec6fdf0"
  }, {
    "url": "/build/node_modules_symfony_stimulus-bridge_dist_webpack_loader_js_assets_controllers_json-vendor_sy-4f8c26.js",
    "revision": "c0e15188d02664bd558dfb601895b773"
  }, {
    "url": "/build/privatepolicy.css",
    "revision": "7dac27de3dfce471e8df75aec51e4b34"
  }, {
    "url": "/build/runtime.js",
    "revision": "e14eda87206d91c9d1e4496b6781b133"
  }, {
    "url": "/build/sitemap.css",
    "revision": "6c10b4683c95d821d5ef2d2a316cc0b1"
  }, {
    "url": "/build/vendor_symfony_ux-autocomplete_assets_dist_controller_js.js",
    "revision": "ee2d4c8873b3c028dde8f0610753d1ef"
  }, {
    "url": "/build/vendor_symfony_ux-react_assets_dist_render_controller_js.js",
    "revision": "43d72aa8c38d5b1b7f61e6963e295906"
  }, {
    "url": "/build/vendor_symfony_ux-typed_assets_dist_controller_js.js",
    "revision": "e4a23f58753a6cb507879f6ae9309216"
  }, {
    "url": "/build/vendors-node_modules_bootstrap_dist_js_bootstrap_bundle_min_js-node_modules_bootstrap_js_inde-b2221b.css",
    "revision": "88da3c2a06b06fca0a6f759f21a29cf7"
  }, {
    "url": "/build/vendors-node_modules_bootstrap_dist_js_bootstrap_bundle_min_js-node_modules_bootstrap_js_inde-b2221b.js",
    "revision": "933e77fb848c629011b2f3ca99f11064"
  }, {
    "url": "/build/vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js.js",
    "revision": "2b7f2a1b088f9399a16785cbdbcaa96c"
  }, {
    "url": "/build/vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_weak-se-98be17.js",
    "revision": "5c179a5d4d18c63637cf2395fc4221e4"
  }, {
    "url": "/build/vendors-node_modules_popperjs_core_lib_index_js-node_modules_symfony_stimulus-bridge_dist_ind-c1a19c.css",
    "revision": "3091032b9063ecb2795e453b70a80a0d"
  }, {
    "url": "/build/vendors-node_modules_popperjs_core_lib_index_js-node_modules_symfony_stimulus-bridge_dist_ind-c1a19c.js",
    "revision": "1101952cd773e1f5dab3984a86e01811"
  }, {
    "url": "/build/vendors-node_modules_react-dom_index_js.js",
    "revision": "4544ea71a2ae7ec2dc5047b3fa6de2b9"
  }, {
    "url": "/build/vendors-node_modules_typed_js_dist_typed_module_js.js",
    "revision": "bea1abdcbe443eada5646a19dff52799"
  }], {});
  workbox.registerRoute(/\.(?:js|css|png|webp|jpg|svg)$/, new workbox.StaleWhileRevalidate({
    "cacheName": "assets-cache",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 100,
      maxAgeSeconds: 604800
    })]
  }), 'GET');

}));
//# sourceMappingURL=service-worker.js.map
