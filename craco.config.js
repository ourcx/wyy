const path = require('path');
const CracoLessPlugin = require('craco-less');

const resolve = (dir) => {
    return path.resolve(__dirname, dir);
}

module.exports = {
    webpack: {
        alias: {
            '@': resolve('src'),
            'components': resolve('src/components'),
        }
    },
    style: {
        postcss: {
            mode: 'extends',
            loaderOptions: {
                postcssOptions: {
                    ident: 'postcss',
                    plugins: [
                        require('tailwindcss'),
                        require('autoprefixer'),
                    ],
                },
            },
        },
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#10A57A'
                        },
                        javascriptEnabled: true
                    }
                }
            }
        }
    ]
}