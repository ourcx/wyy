import type { ReactNode,FC } from "react";
import { memo } from "react";

interface IProps{
    children?: ReactNode;
} 

const Ranking:FC<IProps> = (props) => {
    return (
        <div>Ranking</div>
    )
}
export default memo(Ranking);
//缓存组件

