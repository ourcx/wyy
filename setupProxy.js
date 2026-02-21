const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // 需要代理的路径前缀
    createProxyMiddleware({
      target: 'http://localhost:8080', // 后端服务地址
      changeOrigin: true, // 虚拟主机需要设为true
    })
  );
};