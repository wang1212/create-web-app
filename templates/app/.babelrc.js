// See https://babeljs.io/docs/en/configuration

module.exports = {
	presets: [
		'@babel/preset-env',
		[
			'@babel/preset-typescript',
			{
				isTSX: true,
				allExtensions: true,
			},
		],
	],
	plugins: [],
}
