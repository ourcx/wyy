import type { ReactNode,FC } from "react";
import { memo } from "react";

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

