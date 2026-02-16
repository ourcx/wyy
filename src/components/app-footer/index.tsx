import type { ReactNode,FC } from "react";
import { memo } from "react";


interface IProps{
    children?: ReactNode;
} 

const AppFooter:FC<IProps> = (props) => {
    return (
        <div>AppFooter</div>
    )
}
export default memo(AppFooter);
//缓存组件

