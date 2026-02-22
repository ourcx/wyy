import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBanners } from "../service/recommend";

// 定义 recommend slice 的状态类型
interface IRecommendState {
    banners: string[];        // 轮播图列表
    loading?: boolean;        // 可选：加载状态
    error?: string | null;    // 可选：错误信息
}

// 初始状态
export const initialState: IRecommendState = {
    banners: [],
    loading: false,
    error: null,
};

// 创建异步 thunk 用于获取 banner 数据
// 第一个参数 'fetchBanners' 是 action 类型前缀，会自动生成 pending/fulfilled/rejected 三种 action
// 第二个函数是业务逻辑，返回值将作为 fulfilled action 的 payload
export const fetchBannerDataAction = createAsyncThunk(
    'recommend/fetchBanners',  // 命名空间建议使用 slice 名 + 动作名，避免与其他 slice 冲突
    async (_, { rejectWithValue }) => { // 下划线表示不使用传入的参数
        try {
            const res = await getBanners();
            return res.data;        // 假设接口返回的数据格式为 { banners: [...] }
        } catch (error: any) {
            // 可以处理错误并传递给 rejected action
            return rejectWithValue(error.response?.data?.message || '获取banner失败');
        }
    }
);

// 创建 slice
const recommendSlice = createSlice({
    name: 'recommend',          // slice 名称，用于生成 action 类型
    initialState,               // 初始状态
    reducers: {
        // 可添加同步 reducer，例如清除 banners
        clearBanners: (state) => {
            state.banners = [];
        },
    },
    extraReducers: (builder) => {
        // 处理异步 thunk 的不同状态
        builder
            // 请求开始时，可以设置 loading 状态
            .addCase(fetchBannerDataAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            // 请求成功时，更新 banners 并结束 loading
            .addCase(fetchBannerDataAction.fulfilled, (state, { payload }) => {
                state.loading = false;
                // 假设 payload 就是 banners 数组，直接赋值
                state.banners = payload;
            })
            // 请求失败时，设置错误信息并结束 loading
            .addCase(fetchBannerDataAction.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload as string;
            });
    },
});

// 导出同步 action
export const { clearBanners } = recommendSlice.actions;

// 导出 reducer 作为默认导出
export default recommendSlice.reducer;