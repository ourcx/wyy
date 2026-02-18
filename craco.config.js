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
          style: true, // 加载 less，使主题定制生效
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
            modifyVars: { '@primary-color': '#10A57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};