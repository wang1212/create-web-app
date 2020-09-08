// see docs: https://eslint.org/docs/user-guide/configuring

module.exports = {
	ignorePatterns: ['src/vendors/**/*'],
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
		'padding-line-between-statements': [
			'error',
			{ blankLine: 'always', prev: '*', next: 'return' },
			{ blankLine: 'always', prev: 'return', next: '*' },
			//
			{ blankLine: 'always', prev: '*', next: 'directive' },
			{ blankLine: 'always', prev: 'directive', next: '*' },
			{ blankLine: 'any', prev: 'directive', next: 'directive' },
			//
			{ blankLine: 'always', prev: 'import', next: '*' },
			{ blankLine: 'never', prev: 'import', next: 'import' },
			//
			{ blankLine: 'always', prev: '*', next: 'export' },
			{ blankLine: 'always', prev: 'export', next: '*' },
			{ blankLine: 'any', prev: 'export', next: 'export' },
			//
			{ blankLine: 'always', prev: '*', next: 'function' },
			{ blankLine: 'always', prev: 'function', next: '*' },
			//
			{ blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
			{ blankLine: 'always', prev: '*', next: ['const', 'let', 'var'] },
			{ blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
			//
			{ blankLine: 'always', prev: ['case', 'default'], next: '*' },
			//
			{ blankLine: 'always', prev: '*', next: ['block', 'block-like'] },
			{ blankLine: 'always', prev: ['block', 'block-like'], next: '*' },
		],
		'linebreak-style': ['error', 'windows'],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		indent: 'off',
		'@typescript-eslint/indent': ['error', 'tab'],
		quotes: 'off',
		'@typescript-eslint/quotes': ['error', 'single'],
		semi: 'off',
		'@typescript-eslint/semi': ['error', 'never'],
		'@typescript-eslint/no-unsafe-assignment': 'warn',
		'@typescript-eslint/no-unsafe-member-access': 'warn',
		'@typescript-eslint/no-unsafe-call': 'warn',
		'@typescript-eslint/no-unsafe-return': 'warn',
		'no-undef': ['error', { typeof: true }],
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': ['error'],
	},
	globals: {},
}
