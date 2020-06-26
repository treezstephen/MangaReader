module.exports = {
    'plugins': [
        [
            '@babel/plugin-transform-runtime',
            {
                'regenerator': true,
            },
        ],
    ],
    presets: [
        '@babel/preset-typescript',
        '@babel/preset-env',
    ],
};
