// src/components/app-footer/index.tsx
import type { ReactNode, FC } from "react";
import { memo } from "react";
import { FooterWrapper } from "./style";
import React from "react";

interface IProps {
    children?: ReactNode;
}

const IconData = [
    {
        icon: "iconfont icon-github",
        text: "云杉交易所",
        link: "#"
    },
    {
        icon: "iconfont icon-github",
        text: "X StudioAI 歌手",
        link: "#"
    },
    {
        icon: "iconfont icon-github",
        text: "用户认证",
        link: "#"
    },
    {
        icon: "iconfont icon-github",
        text: "AI 免费写歌",
        link: "#"
    },
    {
        icon: "iconfont icon-github",
        text: "赞赏",
        link: "#"
    }
]

const NoIconData = [
    {
        icon: "",
        text: "服务条款",
        link: "#"
    },
    {
        icon: "",
        text: "隐私政策",
        link: "#"
    },
    {
        icon: "",
        text: "儿童隐私政策",
        link: "#"
    },
    {
        icon: "",
        text: "版权投诉",
        link: "#"
    },
    {
        icon: "",
        text: "投资者关系",
        link: "#"
    },
    {
        icon: "",
        text: "广告合作",
        link: "#"
    },
    {
        icon: "",
        text: "联系我们",
        link: "#"
    }
]


const AppFooter: FC<IProps> = () => {
    function renderLinkItem(icon: string, text: string, link: string) {
        if (icon) {
            return (
                <a href={link}>
                    <i className={`icon ${icon}`}></i>
                    <span>{text}</span>
                </a>
            )
        } else {
            return (
                <a href={link}>
                    <span>{text}</span>
                </a>
            )
        }
    }
    return (
        <FooterWrapper>
            <div className="content">
                {/* 第一行链接：产品相关（每个项带有图标） */}
                <div className="link-row">
                    {IconData.map((item, index) => (
                        <React.Fragment key={index}>
                            <span className="separator">|</span>
                            {renderLinkItem(item.icon, item.text, item.link)}
                        </React.Fragment>
                    ))}
                </div>

                {/* 第二行链接：法律及合作 */}
                <div className="link-row gap">
                    {NoIconData.map((item, index: number) => (
                        <React.Fragment key={index}>
                            <span className="separator">|</span>
                            {renderLinkItem(item.icon, item.text, item.link)}
                        </React.Fragment>
                    ))}
                </div>

                {/* 第三行：许可证信息 */}
                <div className="info-row">
                    互联网宗教信息服务许可证：浙（2022）0000120
                    增值电信业务经营许可证：浙B2-20150198
                    粤B2-20090119-18
                    浙江ICP备15006616号-4
                    <a href="#">工业和信息化部备案管理系统网站</a>
                </div>

                {/* 第四行：版权及备案 */}
                <div className="info-row copyright">
                    网易公司版权所有©1997-2026
                    杭州乐读科技有限公司运营：浙网文[2024] 0900-042号
                    浙公网安备33010802013307号
                    算法服务公示信息
                </div>
            </div>
        </FooterWrapper>
    );
};

export default memo(AppFooter);