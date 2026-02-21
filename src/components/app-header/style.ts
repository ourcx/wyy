// src/components/app-header/style.ts
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background-color: ${(props) => props.theme.color.surface};
  box-shadow: 0 .125rem .5rem rgba(0, 0, 0, 0.02);

  .content {
    height: ${(props) => props.theme.size.barHeight};
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 64px;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme.color.primary};
    margin-right: 2.5rem;
    white-space: nowrap;
    cursor: default;

    span {
      color: ${(props) => props.theme.color.secondary};
    }
  }

  .nav {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 0;
    padding: 0;
    list-style: none;
    height: 100%;

    .nav-wrap {
      height: 100%;
      width: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      a {
        font-size: 1rem;
        color: ${(props) => props.theme.color.textPrimary};
        text-decoration: none;
        transition: color 0.2s;
        padding: 0;
        
        /* 让链接占满父容器，背景色可覆盖整个区域 */
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;

        &:hover {
          color: ${(props) => props.theme.color.primary};
        }

        /* 激活状态：灰色背景 + 底部三角形 */
        &.active {
          background-color: ${(props) => props.theme.color.BarBg};
          
          &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 0;
            border-left: .375rem solid transparent;
            border-right: .375rem solid transparent;
            border-bottom: .375rem solid ${(props) => props.theme.color.primary};
          }
        }
      }
    }
  }

  .right-section {
    display: flex;
    align-items: center;
    gap: 1.25rem;
  }

  .search {
    position: relative;
    width: 10rem;
    border-radius: 20px;

    input{
      &::placeholder{
        font-size: 12px;
      }
    }
  }

  .user {
    display: flex;
    align-items: center;
    gap: .75rem;

    .avatar {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      background: linear-gradient(
        135deg,
        ${(props) => props.theme.color.primary},
        ${(props) => props.theme.color.secondary}
      );
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${(props) => props.theme.color.textOnPrimary};
      font-weight: bold;
      font-size: 1.125rem;
      cursor: default;
    }

    .login-btn {
      padding: .5rem 1rem;
      background-color: ${(props) => props.theme.color.primary};
      color: ${(props) => props.theme.color.textOnPrimary};
      border-radius: 1.25rem;
      font-size: .875rem;
      font-weight: 500;
      border: none;
      cursor: pointer;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.9;
      }
    }

    .create-btn{
      padding: .5rem 1rem;
      color: ${(props) => props.theme.color.textOnSecondary};
      border: 1px solid ${(props) => props.theme.color.textOnSecondary};
      border-radius: 1.25rem;
      font-size: .875rem;
      font-weight: 500;
      cursor: pointer;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.9;
      }
    }
  }

  .content-footer {
    height: .3125rem;
    background-color: ${(props) => props.theme.color.primary};
  }

  /* 响应式调整 */
  @media (max-width: 56.25rem) {
    .search input {
      width: 8.75rem;
    }
  }

  @media (max-width: 48rem) {
    .nav {
      gap: 1rem;
    }
    .search {
      display: none;
    }
  }
`;