// ReBanner.tsx
import { useAppSelector } from "@/store";
import type { ReactNode, FC } from "react";
import { memo, useRef, useState } from "react";
import { Carousel } from "antd";
import type { CarouselRef } from "antd/es/carousel";
import {
    ReBanners,
    ReBannerLeft,
    ReBannerRight,
    ReBannerContent,
    BannerDot,
    DownloadCard,
} from "./style";

interface IProps {
    children?: ReactNode;
}

const ReBanner: FC<IProps> = () => {
    // 获取轮播图数据（假设数据结构为 { imageUrl, link }）
    const banners = useAppSelector((state) => state.recommend.banners);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<CarouselRef>(null);

    // 背景模糊图：使用当前显示图片的高斯模糊版本
    const bgImageUrl =
        banners.length > 0 ? banners[currentIndex] : "";

    const afterChange = (index: number) => {
        setCurrentIndex(index);
    };

    const handlePrev = () => {
        carouselRef.current?.prev();
    };
    const handleNext = () => {
        carouselRef.current?.next();
    };

    return (
        <ReBanners
            style={{
                backgroundImage: `url(${bgImageUrl}?imageView&blur=40x20)`,
                backgroundSize: "6000px",
                backgroundPosition: "center center",
            }}
        >
            <ReBannerContent className="wrap">
                <button className="btn prev" onClick={handlePrev}>
                    &lt;
                </button>
                <ReBannerLeft>
                    <Carousel
                        ref={carouselRef}
                        autoplay
                        autoplaySpeed={3000}
                        afterChange={afterChange}
                        dots={{ className: "custom-dots" }}
                    >
                        {banners.map((item, index) => (
                            <div className="carousel-item" key={index}>
                                <a
                                    href={item || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src={item} alt="轮播图" />
                                </a>
                            </div>
                        ))}
                    </Carousel>
                </ReBannerLeft>

                {/* 右侧下载卡片 */}
                <ReBannerRight>
                    <DownloadCard>
                        <a
                            href="/download"
                            className="btn-download"
                            data-res-action="bilog"
                            data-log-json='{"type":"downloadapp","source":"banner"}'
                        >
                            下载客户端
                        </a>
                        <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
                    </DownloadCard>
                </ReBannerRight>
                <button className="btn next" onClick={handleNext}>
                    &gt;
                </button>
            </ReBannerContent>
        </ReBanners>
    );
};

export default memo(ReBanner);