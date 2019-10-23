module.exports = {
	"presets": [
		"@babel/preset-env",
		[
			"@babel/preset-flow",
			{
				"all": true
			}
		],
		[
			"@babel/preset-typescript",
			{
				isTSX: true,
				allExtensions: true
			}
		]
	],
	"plugins": [
		"@babel/plugin-syntax-dynamic-import",
		"@babel/plugin-proposal-object-rest-spread",
	]
}