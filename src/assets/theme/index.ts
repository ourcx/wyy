// src/theme.js
const theme = {
    color: {
        // 原有颜色
        primary: '#ef476f',
        secondary: '#06d6a0',
        background: '#ffffff',
        surface: '#f8f9fa',
        textPrimary: '#118ab2',
        textSecondary: '#f78c6b',
        textOnPrimary: '#ffffff',
        textOnSecondary: '#000000',
        BarBg: '#e8e9eb',
        // 新增常用颜色
        error: '#f44336',
        warning: '#ff9800',
        info: '#2196f3',
        success: '#06d6a0',        // 复用 secondary
        border: '#e8e9eb',          // 边框色
        disabled: '#bfbfbf',        // 禁用色
    },
    size: {
        barHeight: '50px',
    },
    typography: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        fontSize: '14px',
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        h1: '2rem',
        h2: '1.5rem',
        h3: '1.17rem',
        h4: '1rem',
        h5: '0.83rem',
        h6: '0.67rem',
    },
    spacing: {
        unit: 8,
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
    },
    borderRadius: {
        sm: '2px',
        md: '4px',
        lg: '8px',
        round: '50%',
    },
    shadow: {
        light: '0 2px 4px rgba(0,0,0,0.1)',
        medium: '0 4px 8px rgba(0,0,0,0.15)',
        dark: '0 8px 16px rgba(0,0,0,0.2)',
    },
    zIndex: {
        modal: 1000,
        popover: 900,
        tooltip: 800,
    },
    mixin: {
        wrapv1: `
            width: 1100px;
            margin: 0 auto;
        `,
        wrapv2: `
            width: 980px;
            margin: 0 auto;
        `,
    },
};

export default theme;