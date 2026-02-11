import type { ReactNode,FC } from "react";
import { memo } from "react";

interface IProps{
    children?: ReactNode;
} 

const Download:FC<IProps> = (props) => {
    return (
        <div></div>
    )
}
export default memo(Download);
//缓存组件

