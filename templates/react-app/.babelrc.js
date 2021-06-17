// see docs: https://babeljs.io/docs/en/configuration

module.exports = (api) => {
	// This caches the Babel config by environment.
	// https://github.com/pmmmwh/react-refresh-webpack-plugin#usage
	api.cache.using(() => process.env.NODE_ENV)

	return {
		presets: [
			'@babel/preset-env',
			'@babel/preset-react',
			[
				'@babel/preset-typescript',
				{
					isTSX: true,
					allExtensions: true,
				},
			],
		],
		plugins: [
			// Applies the react-refresh Babel plugin on non-production modes only
			!api.env('production') && 'react-refresh/babel',
		].filter(Boolean),
	}
}
