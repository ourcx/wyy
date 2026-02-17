// src/components/app-header/style.ts
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background-color: ${(props) => props.theme.color.surface};
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);

  .content {
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${(props) => props.theme.mixin.wrapv1}
  }

  .logo {
    font-size: 24px;
    font-weight: bold;
    color: ${(props) => props.theme.color.primary};
    margin-right: 40px;
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
    gap: 24px;
    margin: 0;
    padding: 0;
    list-style: none;

    a {
      font-size: 16px;
      color: ${(props) => props.theme.color.textPrimary};
      text-decoration: none;
      transition: color 0.2s;
      padding: 4px 0;
      border-bottom: 2px solid transparent;

      &:hover {
        color: ${(props) => props.theme.color.primary};
      }

      &.active {
        color: ${(props) => props.theme.color.primary};
        border-bottom-color: ${(props) => props.theme.color.primary};
      }
    }
  }

  .right-section {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .search {
    position: relative;

    input {
      width: 200px;
      height: 36px;
      padding: 0 16px;
      border: 1px solid #eaeaea;
      border-radius: 18px;
      font-size: 14px;
      outline: none;
      transition: all 0.2s;

      &::placeholder {
        opacity: 0.6;
      }

      &:focus {
        border-color: ${(props) => props.theme.color.primary};
        box-shadow: 0 0 0 2px ${(props) => props.theme.color.primary}20;
      }
    }
  }

  .user {
    display: flex;
    align-items: center;
    gap: 12px;

    .avatar {
      width: 40px;
      height: 40px;
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
      font-size: 18px;
      cursor: default;
    }

    .login-btn {
      padding: 8px 16px;
      background-color: ${(props) => props.theme.color.primary};
      color: ${(props) => props.theme.color.textOnPrimary};
      border-radius: 20px;
      font-size: 14px;
      font-weight: 500;
      border: none;
      cursor: pointer;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.9;
      }
    }
  }

  /* 响应式调整 */
  @media (max-width: 900px) {
    .search input {
      width: 140px;
    }
  }

  @media (max-width: 768px) {
    .nav {
      gap: 16px;
    }
    .search {
      display: none;
    }
  }
`;