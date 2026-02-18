const path = require('path');
const CracoLessPlugin = require('craco-less');

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
    webpack: {
        alias: {
            '@': resolve('src'),
            components: resolve('src/components'),
        },
    },
    babel: {
        plugins: [
            [
                'import',
                {
                    libraryName: 'antd',
                    libraryDirectory: 'es',
                    style: true,
                },
            ],
        ],
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    webpackImporter: true,
                    lessOptions: {
                        modifyVars: {
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};