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
  style: {
    postcss: {
      plugins: [
        require('@tailwindcss/postcss'), // 必须使用这个，因为你已安装 4.x 版本
        require('autoprefixer'),
      ],
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#10A57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};