// 按业务模块划分 API（示例）
import request from '@/service/request';
// 导出配置
export * from './config';

// 导出请求实例
export { default as request } from '@/service/request';



// 用户相关接口 
export const userApi = {
    login: (data: { username: string; password: string }) =>
        request.post('/auth/login', data),

    getUserInfo: (id: number) =>
        request.get('/user/info', { id }),

    updateProfile: (data: any) =>
        request.put('/user/profile', data)
};



// 示例：其他模块
export const homeApi = {
    getBanner: () => request.get('/banner'),
    getRecommend: () => request.get('/recommend')
};