import type { ReactNode,FC } from "react";
import { memo } from "react";

interface IProps{
    children?: ReactNode;
} 

const Artist:FC<IProps> = (props) => {
    return (
        <div>Artist</div>
    )
}
export default memo(Artist);
//缓存组件

