/* dev server config */
// docs - https://webpack.js.org/configuration/dev-server/

module.exports = {
	host: 'localhost',
	port: 3000,
	// https: true,
	compress: true,
	hot: true,
	// proxy: {
	// 	'/api': 'http://www.example.com',
	// },
	open: true,
	useLocalIp: true,
	// debug - this line
	// writeToDisk: true,
}
