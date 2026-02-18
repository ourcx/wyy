
import customTheme from './index'; // 导入你原有的主题变量（确保该文件存在且正确导出）


// 构建符合 Ant Design v5 主题配置的对象
const antdTheme = {
  token: {
    // 基础种子 token
    colorPrimary: customTheme.color.primary,      // '#ef476f'
    colorInfo: customTheme.color.info,            // '#2196f3'
    colorSuccess: customTheme.color.success,      // '#06d6a0'
    colorWarning: customTheme.color.warning,      // '#ff9800'
    colorError: customTheme.color.error,          // '#f44336'
    colorTextBase: customTheme.color.textPrimary, // 基础文本色
    colorBgBase: customTheme.color.background,    // 基础背景色
    borderRadius: 4,                               // 圆角大小
    fontSize: 14,                                   // 基础字号
    fontFamily: customTheme.typography.fontFamily, // 字体家族
    // 可添加更多 token...
  },
};

export default antdTheme;