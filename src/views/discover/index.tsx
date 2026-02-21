import type { ReactNode, FC } from "react";
import { memo } from "react";
import { Outlet, NavLink } from 'react-router-dom';
import { DIscoverHeader } from './style';

interface IProps {
    children?: ReactNode;
}

// 导航链接数据
const discoverNavs = [
    { title: '推荐', link: '/discover/recommend' },
    { title: '排行', link: '/discover/ranking' },
    { title: '歌单', link: '/discover/songs' },
    { title: '主播电台', link: '/discover/djradio' },
    { title: '歌手', link: '/discover/artist' },
    { title: '新碟上架', link: '/discover/album' },
] as const;

const Discover: FC<IProps> = () => {
    return (
        <div>
            <DIscoverHeader>
                {discoverNavs.map(item => (
                    <div className="item" key={item.link}>
                        <NavLink to={item.link}>{item.title}</NavLink>
                    </div>
                ))}
            </DIscoverHeader>
            <Outlet />
        </div>
    );
};

export default memo(Discover);