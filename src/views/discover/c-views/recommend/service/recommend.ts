import { request } from "@/service";
export const getBanners = () => request.get('/recommends/banners')