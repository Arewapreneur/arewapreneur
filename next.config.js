const withImages = require("next-images");
module.exports = withImages();

// const withPWA = require("next-pwa");
// module.exports = withPWA({
//   pwa: {
//     dest: "public",
//   },
// });

// module.exports = {
//   webpack: (config, { isServer }) => {
//     // Fixes npm packages that depend on `fs` module
//     if (!isServer) {
//       config.node = {
//         fs: 'empty'
//       }
//     }
//
//     return config
//   }
// }
//
// module.exports = {
// webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//     // Note: we provide webpack above so you should not `require` it
//     // Perform customizations to webpack config
//     // Important: return the modified config
//
//     // Example using webpack option
//     //config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
//     config.node = {
//         fs: 'empty',
//         net: 'empty',
//         tls: 'empty'
//     }
//     return config
// },
// webpackDevMiddleware: config => {
//     // Perform customizations to webpack dev middleware config
//     // Important: return the modified config
//     return config
// },
// }
