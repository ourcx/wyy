import type { ReactNode,FC } from "react";
import { memo, useEffect, useState } from "react";
import { request } from "@/service";
import { getBanners } from "./service/recommend";
interface IProps{
    children?: ReactNode;
} 

const Recommend:FC<IProps> = (props) => {
    const [banners, setBanners] = useState<any>([])
    useEffect(() => {
        getBanners().then(res => {
            setBanners(res.data.banners)
        }).catch(err => {
            console.log(err);
        })

    })
    return (
        <div>Recommend</div>
    )
}
export default memo(Recommend);
//缓存组件

