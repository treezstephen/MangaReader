module.exports = {
    'plugins': [
        'babel-plugin-transform-typescript-metadata',
        [
            '@babel/plugin-transform-runtime',
            {
                'regenerator': true,
            },
        ],
        [
            '@babel/plugin-proposal-decorators', { 
                'legacy': true ,
            },
        ],
        [
            '@babel/plugin-proposal-class-properties', { 
                'loose': true ,
            },
        ],
    ],
    presets: [
        '@babel/preset-typescript',
        '@babel/preset-env',
    ],
};
