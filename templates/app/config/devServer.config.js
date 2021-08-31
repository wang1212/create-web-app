/* dev server config */
// docs - https://webpack.js.org/configuration/dev-server/

module.exports = {
  host: 'local-ip',
  port: 3000,
  // https: true,
  compress: true,
  hot: true,
  // proxy: {
  // 	'/api': 'http://www.example.com',
  // },
  devMiddleware: {
    // debug - this line
    writeToDisk: true,
  },
};
