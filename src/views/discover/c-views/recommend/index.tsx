import type { ReactNode,FC } from "react";
import { memo, useEffect, useState } from "react";
import { request } from "@/service";
interface IProps{
    children?: ReactNode;
} 

const Recommend:FC<IProps> = (props) => {
    return (
        <div>Recommend</div>
    )
}
export default memo(Recommend);
//缓存组件

