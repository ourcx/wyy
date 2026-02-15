/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_BASE_URL?: string;   // 标记为可选，因为可能未定义
    readonly REACT_APP_AUTH_URL?: string;
    // 如果有其他环境变量，可以继续添加
  }
}