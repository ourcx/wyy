// style.ts
import styled from "styled-components";

// 最外层容器：背景模糊效果
export const ReBanners = styled.div`
  height: 285px;
  background-color: #f5f5f5;
  background-repeat: no-repeat;
  background-size: 6000px;
  background-position: center center;
  position: relative;
  transition: background-image 0.3s ease;
`;

// 内容包装器
export const ReBannerContent = styled.div`
  display: flex;
  width: 1240px;
  margin: 0 auto;
  position: relative;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  .btn {
    pointer-events: auto;
    width: 30px;
    height: 50px;
    background: rgba(0, 0, 0, 0);
    border: none;
    color: #fff;
    font-size: 24px;
    line-height: 50px;
    text-align: center;
    margin: 50px;
    cursor: pointer;
    border-radius: 4px;
    transition: background 0.2s;
    &:hover {
      background: rgba(0, 0, 0, 0.3);
    }
  }
`;

// 左侧轮播区域
export const ReBannerLeft = styled.div`
  position: relative;
  width: 730px;
  height: 100%;
  overflow: hidden;

  .carousel-item {
    a {
      display: block;
      height: 100%;
      img {
        width: 100%;
        height: 285px;
        object-fit: cover;
      }
    }
  }

  .ant-carousel {
    height: 100%;
    .slick-dots {
      bottom: 10px;
      li {
        width: 10px;
        height: 10px;
        margin: 0 4px;
        button {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #aaa;
          opacity: 1;
        }
        &.slick-active button {
          background: #c20c0c;
          width: 12px;
          height: 12px;
        }
      }
    }
  }
`;

// 右侧下载卡片（优化区域）
export const ReBannerRight = styled.div`
  width: 252px;
  height: 100%;
  position: relative;
`;

export const DownloadCard = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 252px;
  height: 100%;
  text-align: center;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  backdrop-filter: blur(2px); /* 轻微模糊，可选 */
  border-radius: 0 0 4px 4px;

  /* 下载按钮样式优化 */
  .btn-download {
    display: inline-block;
    width: 200px;
    height: 46px;
    margin: 170px auto 12px;
    background: ${props => props.theme.color.textPrimary || '#c20c0c'}; /* 使用主题色，默认红色 */
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    line-height: 46px;
    text-align: center;
    border-radius: 23px;
    text-decoration: none;
    transition: all 0.2s;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    &:hover {
      background: ${props => props.theme.color.info || '#a00b0b'};
      transform: scale(1.02);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }
  }

  p {
    margin: 0;
    color: #ddd; /* 浅灰色文字 */
    font-size: 12px;
    line-height: 1.5;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  }

  /* 左右阴影装饰 */
  .shadow,
  .shadowr {
    position: absolute;
    top: 0;
    width: 20px;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
  }
`;

// 自定义圆点容器（未使用，保留）
export const BannerDot = styled.div``;