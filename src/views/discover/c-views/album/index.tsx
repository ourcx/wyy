import type { ReactNode,FC } from "react";
import { memo } from "react";

interface IProps{
    children?: ReactNode;
} 

const Album:FC<IProps> = (props) => {
    return (
        <div>Album</div>
    )
}
export default memo(Album);
//缓存组件

