// 根据环境变量区分开发/生产
const ENV = process.env.NODE_ENV || 'development';

export const BASE_URL =
    ENV === 'development'
        ? 'http://coderwhy.dev:8000'      // 开发环境
        : 'https://api.yourdomain.com';  // 生产环境（请替换为真实地址）

export const TIME_OUT = 10000;        // 超时时间 10s
export const AUTH_URL = 'http://coderwhy.dev:8080'; // 认证服务地址（根据需要调整环境）