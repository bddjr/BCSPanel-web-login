/// <reference types="vite/client" />

declare interface Window {
    fetchTimeoutSeconds: number
    matchMediaDarkChange: () => void
    BCSPanelColorScheme: string | undefined
}

interface postLoginBodyType {
    // 安全上下文
    "secure": boolean,
    // 是否处于注册模式
    "isregister": boolean,
    // 用户名
    "username": string,
    // 密码
    "password": string,
    // 盐 登录模式发送随机盐 注册模式发送验证码
    "salt": string,
    // cookie存储路径
    "path": string
}
