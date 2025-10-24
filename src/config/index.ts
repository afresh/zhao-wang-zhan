// 应用配置
export const config = {
  // 应用信息
  app: {
    name: '找网站',
    version: '1.0.0',
    description: '一个现代化的Vue 3应用',
  },

  // API配置
  api: {
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api',
    timeout: 10000,
    retry: 3,
  },

  // 路由配置
  router: {
    mode: 'history',
    base: '/',
  },

  // 主题配置
  theme: {
    primaryColor: '#667eea',
    secondaryColor: '#764ba2',
    successColor: '#52c41a',
    warningColor: '#faad14',
    errorColor: '#ff4d4f',
    infoColor: '#1890ff',
  },

  // 存储配置
  storage: {
    prefix: 'zhaowangzhan_',
    expire: 7 * 24 * 60 * 60 * 1000, // 7天
  },

  // 分页配置
  pagination: {
    defaultPageSize: 10,
    pageSizeOptions: [10, 20, 50, 100],
  },

  // 上传配置
  upload: {
    maxSize: 10 * 1024 * 1024, // 10MB
    allowedTypes: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
  },

  // 开发配置
  dev: {
    enableMock: import.meta.env.VITE_ENABLE_MOCK === 'true',
    mockBaseURL: import.meta.env.VITE_MOCK_BASE_URL || '/mock',
  },
}

// 环境变量
export const env = {
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
  mode: import.meta.env.MODE,
}

export default config
