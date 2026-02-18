// src/components/app-header/index.tsx
import type { ReactNode, FC } from "react";
import { memo } from "react";
import { NavLink } from "react-router-dom";
import { HeaderWrapper } from "./style";
import navLinks from "@/assets/data/header-titles.json"
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

interface IProps {
    children?: ReactNode;
}

const AppHeader: FC<IProps> = () => {
    function showItem(item: any) {
        if (item.type === "path") {
            return <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? "active" : "")}
            >
                {item.title}
            </NavLink>;
        }else {
            return <a href={item.path} target="_blank" rel="noreferrer">
                {item.title}
            </a>
        }

    }

    return (
        <HeaderWrapper>
            <div className="content">
                {/* 左侧 Logo 和导航 */}
                <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
                    <div className="logo">
                        Music<span>Hub</span>
                    </div>
                    <div className="nav">
                        {navLinks.map((item) => (
                            <div key={item.path} className="nav-wrap">
                                {showItem(item)}
                            </div>
                        ))}
                    </div>
                </div>

                {/* 右侧搜索和用户 */}
                <div className="right-section">
                        <Input className="search" placeholder="搜索音乐、歌手..." prefix={<SearchOutlined />}/>
                    <div className="user">
                        {/* <div className="avatar">U</div> */}
                        <button className="create-btn">创作者中心</button>
                        <button className="login-btn">登录</button>
                    </div>
                </div>
            </div>
            <div className="content-footer"></div>
        </HeaderWrapper>
    );
};

export default memo(AppHeader);