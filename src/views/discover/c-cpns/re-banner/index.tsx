// ReBanner.tsx
import { useAppSelector } from "@/store";
import type { ReactNode, FC } from "react";
import { memo, useRef, useState, useEffect } from "react";
import { Carousel } from "antd";
import type { CarouselRef } from "antd/es/carousel";
import {
    ReBanners,
    ReBannerLeft,
    ReBannerRight,
    ReBannerContent,
    DownloadCard,
} from "./style";

interface IProps {
    children?: ReactNode;
}

const ReBanner: FC<IProps> = () => {
    const banners = useAppSelector((state) => state.recommend.banners);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<CarouselRef>(null);

    // 双背景图层引用
    const bgLayer1Ref = useRef<HTMLDivElement>(null);
    const bgLayer2Ref = useRef<HTMLDivElement>(null);
    const activeLayerRef = useRef<1 | 2>(1); // 当前显示的图层

    // 初始化背景图
    useEffect(() => {
        if (banners.length === 0) return;
        const firstImage = banners[0];
        if (bgLayer1Ref.current) {
            bgLayer1Ref.current.style.backgroundImage = `url(${firstImage}?imageView&blur=40x20)`;
        }
        if (bgLayer2Ref.current) {
            bgLayer2Ref.current.style.backgroundImage = `url(${firstImage}?imageView&blur=40x20)`;
        }
    }, [banners]);

    // 轮播切换后的回调
    const afterChange = (index: number) => {
        setCurrentIndex(index);
    };

    // 轮播切换前的回调：准备下一张背景图并开始过渡
    const beforeChange = (from: number, to: number) => {
        if (banners.length === 0) return;
        const nextImage = banners[to];
        if (!nextImage) return;

        const layer1 = bgLayer1Ref.current;
        const layer2 = bgLayer2Ref.current;
        if (!layer1 || !layer2) return;

        // 确定当前显示的图层和即将显示的图层
        const active = activeLayerRef.current;
        const nextLayer = active === 1 ? 2 : 1;

        // 设置下一图层的背景图
        if (nextLayer === 1) {
            layer1.style.backgroundImage = `url(${nextImage}?imageView&blur=40x20)`;
        } else {
            layer2.style.backgroundImage = `url(${nextImage}?imageView&blur=40x20)`;
        }

        // 触发淡入淡出：当前图层淡出，下一图层淡入
        if (active === 1) {
            layer1.style.opacity = '0';
            layer2.style.opacity = '1';
        } else {
            layer2.style.opacity = '0';
            layer1.style.opacity = '1';
        }

        // 更新激活图层记录
        activeLayerRef.current = nextLayer;
    };

    const handlePrev = () => {
        carouselRef.current?.prev();
    };
    const handleNext = () => {
        carouselRef.current?.next();
    };

    return (
        <ReBanners>
            {/* 双背景图层 */}
            <div className="bg-layer" ref={bgLayer1Ref}></div>
            <div className="bg-layer" ref={bgLayer2Ref}></div>

            <ReBannerContent className="wrap">
                <button className="btn prev" onClick={handlePrev}>
                    &lt;
                </button>
                <ReBannerLeft>
                    <Carousel
                        ref={carouselRef}
                        autoplay
                        autoplaySpeed={3000}
                        beforeChange={beforeChange}
                        afterChange={afterChange}
                        dots={{ className: "custom-dots" }}
                        effect="fade"
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