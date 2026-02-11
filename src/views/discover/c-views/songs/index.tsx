import type { ReactNode,FC } from "react";
import { memo } from "react";

interface IProps{
    children?: ReactNode;
} 

const Songs:FC<IProps> = (props) => {
    return (
        <div>Songs</div>
    )
}
export default memo(Songs);
//缓存组件

