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
                <div style={{ display: "flex", alignItems: "center",height: "100%" }}>
                    <div className="logo">
                        Music<span>Hub</span>
                    </div>
                    <div className="nav">
                        {navLinks.map((item) => (
                            <div key={item.to} className="nav-wrap">
                                <NavLink
                                    to={item.to}
                                    className={({ isActive }) => (isActive ? "active" : "")}
                                >
                                    {item.title}
                                </NavLink>
                            </div>
                        ))}
                    </div>
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
            <div className="content-footer"></div>
        </HeaderWrapper>
    );
};

export default memo(AppHeader);