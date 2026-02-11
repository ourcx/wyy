import type { ReactNode,FC } from "react";
import { memo } from "react";

interface IProps{
    children?: ReactNode;
} 

const DjRaio:FC<IProps> = (props) => {
    return (
        <div>DjRaio</div>
    )
}
export default memo(DjRaio);
//缓存组件

