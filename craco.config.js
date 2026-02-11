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
        },
        configure: (webpackConfig) => {
            // 解决 source-map 警告
            webpackConfig.devtool = process.env.NODE_ENV === 'development' 
                ? 'cheap-module-source-map' 
                : 'source-map';
            
            return webpackConfig;
        }
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