// src/components/app-footer/style.ts
import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: ${(props) => props.theme.color.surface};
  border-top: 1px solid ${(props) => props.theme.color.border};
  padding: ${(props) => props.theme.spacing.xl} 0;
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.typography.fontSize};
  color: ${(props) => props.theme.color.textSecondary};
  line-height: 1.6;

  .content {
    ${(props) => props.theme.mixin.wrapv2}
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }

  .gap {
    margin-top: 3rem;
  }

  .link-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: ${(props) => props.theme.spacing.md};
    gap: ${(props) => props.theme.spacing.xs};

    a {
      color: ${(props) => props.theme.color.textPrimary};
      text-decoration: none;
      font-size: ${(props) => props.theme.typography.h5};
      transition: color 0.2s;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      &:hover {
        color: ${(props) => props.theme.color.primary};
        text-decoration: underline;
      }

      .icon {
        width: 24px;
        height: 24px;
        background-color: ${(props) => props.theme.color.primary};
        border-radius: ${(props) => props.theme.borderRadius.md};
        margin-bottom: ${(props) => props.theme.spacing.xs};
        /* 如果您有实际图标，可替换为 background-image 或 <img> 标签 */
      }
    }

    .separator {
      color: ${(props) => props.theme.color.border};
      margin: 0 ${(props) => props.theme.spacing.xs};
      user-select: none;
    }
  }

  .info-row {
    text-align: center;
    font-size: ${(props) => props.theme.typography.h6};
    color: ${(props) => props.theme.color.disabled};
    margin-top: ${(props) => props.theme.spacing.sm};
    line-height: 1.8;
    word-break: break-word;

    a {
      color: ${(props) => props.theme.color.textSecondary};
      text-decoration: none;
      margin-left: ${(props) => props.theme.spacing.xs};

      &:hover {
        color: ${(props) => props.theme.color.primary};
        text-decoration: underline;
      }
    }
  }

  .copyright {
    margin-top: ${(props) => props.theme.spacing.md};
    font-size: ${(props) => props.theme.typography.h6};
    color: ${(props) => props.theme.color.disabled};
  }

  /* 响应式调整 */
  @media (max-width: 768px) {
    padding: ${(props) => props.theme.spacing.lg} 0;

    .link-row {
      gap: ${(props) => props.theme.spacing.xs};

      a {
        font-size: 12px;

        .icon {
          width: 20px;
          height: 20px;
        }
      }

      .separator {
        margin: 0 2px;
      }
    }

    .info-row {
      font-size: 11px;
    }
  }
`;