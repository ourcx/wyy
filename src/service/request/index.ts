import axios, {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    AxiosError,
    InternalAxiosRequestConfig
} from 'axios';
import { BASE_URL, TIME_OUT } from '../config';

// 定义返回数据的通用结构（根据你的后端约定修改）
export interface ResponseData<T = any> {
    code: number;
    data: T;
    message: string;
    success: boolean;
}

class Request {
    private instance: AxiosInstance;

    constructor(config?: AxiosRequestConfig) {
        this.instance = axios.create({
            baseURL: BASE_URL,
            timeout: TIME_OUT,
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            ...config
        });

        // 请求拦截器
        this.instance.interceptors.request.use(
            (config: InternalAxiosRequestConfig) => {
                // 可以在这里添加 token
                const token = localStorage.getItem('token');
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                // 可添加 loading 控制（例如：config.headers.showLoading = true）
                return config;
            },
            (error: AxiosError) => {
                return Promise.reject(error);
            }
        );

        // 响应拦截器
        this.instance.interceptors.response.use(
            (response: AxiosResponse) => {
                // 直接返回 data 部分，简化调用
                const data = response.data;
                // 根据业务状态码处理
                if (data.code !== undefined && data.code !== 200) {
                    // 统一错误处理（例如弹窗）
                    console.error('业务错误:', data.message || '请求失败');
                    return Promise.reject(new Error(data.message || '请求失败'));
                }
                return data;
            },
            (error: AxiosError) => {
                // 网络错误/超时等处理
                if (error.message.includes('timeout')) {
                    console.error('请求超时，请重试');
                } else if (error.message.includes('Network Error')) {
                    console.error('网络错误，请检查网络');
                } else {
                    console.error('请求失败:', error.message);
                }
                return Promise.reject(error);
            }
        );
    }

    // 通用请求方法
    public request<T = any>(config: AxiosRequestConfig): Promise<T> {
        return this.instance.request(config);
    }

    // GET 请求
    public get<T = any>(url: string, params?: any, config?: AxiosRequestConfig): Promise<T> {
        return this.instance.get(url, { params, ...config });
    }

    // POST 请求
    public post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        return this.instance.post(url, data, config);
    }

    // PUT 请求
    public put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        return this.instance.put(url, data, config);
    }

    // DELETE 请求
    public delete<T = any>(url: string, params?: any, config?: AxiosRequestConfig): Promise<T> {
        return this.instance.delete(url, { params, ...config });
    }
}

// 导出默认实例（单例）
export default new Request();