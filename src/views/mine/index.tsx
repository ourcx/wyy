import type { ReactNode,FC } from "react";
import { memo } from "react";

interface IProps{
    children?: ReactNode;
} 

const Mine:FC<IProps> = (props) => {
    return (
        <div>Mine</div>
    )
}
export default memo(Mine);
//缓存组件

