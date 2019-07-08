module.exports = {
	"presets": [
		"@babel/preset-env",
		[
			"@babel/preset-flow",
			{
				"all": true
			}
		],
		"@babel/preset-react"
	],
	"plugins": [
		"@babel/plugin-syntax-dynamic-import",
		"@babel/plugin-proposal-class-properties",
		"@babel/plugin-proposal-object-rest-spread"
	]
}