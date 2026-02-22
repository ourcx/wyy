// style.ts
import styled from "styled-components";

// 最外层容器：背景模糊效果
export const ReBanners = styled.div`
  height: 285px;
  background-color: #f5f5f5;
  position: relative;
  overflow: hidden; /* 防止背景溢出 */

  /* 双背景图层公用样式 */
  .bg-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: 6000px; /* 保持原设计的大背景铺开 */
    background-position: center center;
    background-repeat: no-repeat;
    transition: opacity 0.3s ease; /* 与轮播 fade 时长匹配 */
    pointer-events: none; /* 让鼠标事件穿透到内容 */
    z-index: 1;
  }

  /* 初始状态：第一个图层显示，第二个隐藏 */
  .bg-layer:first-of-type {
    opacity: 1;
  }
  .bg-layer:last-of-type {
    opacity: 0;
  }
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
  z-index: 2; /* 内容在背景之上 */

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

// 左侧轮播区域（增加 z-index 确保在背景之上）
export const ReBannerLeft = styled.div`
  position: relative;
  width: 730px;
  height: 100%;
  overflow: hidden;
  z-index: 2;

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

// 右侧下载卡片（增加 z-index）
export const ReBannerRight = styled.div`
  width: 252px;
  height: 100%;
  position: relative;
  z-index: 2;
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
  backdrop-filter: blur(2px);
  border-radius: 0 0 4px 4px;

  .btn-download {
    display: inline-block;
    width: 200px;
    height: 46px;
    margin: 170px auto 12px;
    background: ${props => props.theme.color.textPrimary || '#c20c0c'};
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
    color: #ddd;
    font-size: 12px;
    line-height: 1.5;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  }

  .shadow,
  .shadowr {
    position: absolute;
    top: 0;
    width: 20px;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
  }
`;

export const BannerDot = styled.div``;