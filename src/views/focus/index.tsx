import type { ReactNode,FC } from "react";
import { memo } from "react";

interface IProps{
    children?: ReactNode;
} 

const Focus:FC<IProps> = (props) => {
    return (
        <div>Focus</div>
    )
}
export default memo(Focus);
//缓存组件

