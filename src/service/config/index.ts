// config.ts
export const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:8080/api'; // 默认开发地址
export const AUTH_URL = process.env.REACT_APP_AUTH_URL || 'http://localhost:8080/api'; // 默认认证地址
export const TIME_OUT = 10000; // 超时时间不变//http://localhost:8080/api/recommends/banners