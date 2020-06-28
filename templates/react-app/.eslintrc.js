// See https://eslint.org/docs/user-guide/configuring

module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	env: {
		node: true,
		browser: true,
		es6: true,
		jest: true,
	},
	plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:prettier/recommended',
		'prettier/@typescript-eslint',
		'prettier/react',
	],
	settings: {
		react: {
			createClass: 'createReactClass',
			pragma: 'React',
			version: 'detect',
		},
	},
	rules: {
		'no-console': [
			'error',
			{
				allow: ['warn', 'error'],
			},
		],
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'windows'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'@typescript-eslint/no-unsafe-assignment': 'warn',
		'@typescript-eslint/no-unsafe-member-access': 'warn',
		'@typescript-eslint/no-unsafe-call': 'warn',
		'@typescript-eslint/no-unsafe-return': 'warn',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': ['error'],
	},
	globals: {},
}