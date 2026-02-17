// src/components/app-header/index.tsx
import type { ReactNode, FC } from "react";
import { memo } from "react";
import { NavLink } from "react-router-dom";
import { HeaderWrapper } from "./style";

interface IProps {
    children?: ReactNode;
}

const AppHeader: FC<IProps> = () => {
    // 导航链接配置
    const navLinks = [
        { to: "/discover", title: "发现音乐" },
        { to: "/mine", title: "我的音乐" },
        { to: "/focus", title: "关注" },
        { to: "/download", title: "下载客户端" },
    ];

    return (
        <HeaderWrapper>
            <div className="content">
                {/* 左侧 Logo 和导航 */}
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div className="logo">
                        Music<span>Hub</span>
                    </div>
                    <ul className="nav">
                        {navLinks.map((item) => (
                            <li key={item.to}>
                                <NavLink
                                    to={item.to}
                                    className={({ isActive }) => (isActive ? "active" : "")}
                                >
                                    {item.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 右侧搜索和用户 */}
                <div className="right-section">
                    <div className="search">
                        <input type="text" placeholder="搜索音乐、歌手..." />
                    </div>
                    <div className="user">
                        <div className="avatar">U</div>
                        <button className="login-btn">登录</button>
                    </div>
                </div>
            </div>
        </HeaderWrapper>
    );
};

export default memo(AppHeader);