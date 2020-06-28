// See https://babeljs.io/docs/en/configuration

module.exports = {
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
	plugins: ['@babel/plugin-syntax-dynamic-import', '@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-object-rest-spread'],
}
