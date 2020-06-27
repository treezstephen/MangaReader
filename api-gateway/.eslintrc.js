module.exports = {
    'env': {
        'browser': true,
        'es6':     true,
        'node':    true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
    ],
    'globals': {
        'Atomics':           'readonly',
        'SharedArrayBuffer': 'readonly',
    },
    'overrides': [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
            },
        },
    ],
    'parser':        '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true,
        },
        'ecmaVersion': 2018,
        'sourceType':  'module',
    },
    'plugins': [
        'react',
        '@typescript-eslint',
        'arca',
        'autofix',
        'import',
        'sort-keys-fix',
        'prettier',
    ],
    'rules': {
        'arca/import-align': 2,
        'comma-dangle':      ['error', {
            'arrays':    'always-multiline',
            'exports':   'always-multiline',
            'functions': 'never',
            'imports':   'always-multiline',
            'objects':   'always-multiline',
        }],
        'import/order': ['error'],
        'indent':       [
            'error',
            4,
        ],
        'key-spacing': [
            'warn',
            {
                align: 'value',
            },
        ],
        'linebreak-style': [
            'error',
            'unix',
        ],
        'quotes': [
            'error',
            'single',
        ],
        'semi': [
            'error',
            'always',
        ],
        'sort-keys-fix/sort-keys-fix': ['error', 'asc', {'caseSensitive': false, 'natural': true}],
    },
    'settings': {
        'react': {
            'version': 'latest',
        },
    },
};
