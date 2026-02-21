import { useAppDispatch } from "@/store";
import type { ReactNode,FC } from "react";
import { memo, useEffect, useState } from "react";
import { fetchBannerDataAction } from "./store/recommend";
interface IProps{
    children?: ReactNode;
} 

const Recommend:FC<IProps> = (props) => {
    //发送 action
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchBannerDataAction());
    },[])
    return (
        <div>Recommend</div>
    )
}
export default memo(Recommend);
//缓存组件

