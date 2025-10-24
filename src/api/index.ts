// API 基础配置
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api'

// 请求拦截器
const request = async (url: string, options: RequestInit = {}) => {
  const config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  }

  try {
    const response = await fetch(`${API_BASE_URL}${url}`, config)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('API请求失败:', error)
    throw error
  }
}

// GET 请求
export const get = (url: string, options?: RequestInit) => {
  return request(url, { ...options, method: 'GET' })
}

// POST 请求
export const post = (url: string, data?: unknown, options?: RequestInit) => {
  return request(url, {
    ...options,
    method: 'POST',
    body: data ? JSON.stringify(data) : undefined,
  })
}

// PUT 请求
export const put = (url: string, data?: unknown, options?: RequestInit) => {
  return request(url, {
    ...options,
    method: 'PUT',
    body: data ? JSON.stringify(data) : undefined,
  })
}

// DELETE 请求
export const del = (url: string, options?: RequestInit) => {
  return request(url, { ...options, method: 'DELETE' })
}

// 用户相关API
export const userApi = {
  // 获取用户信息
  getUserInfo: () => get('/user/info'),

  // 更新用户信息
  updateUserInfo: (data: unknown) => put('/user/info', data),

  // 用户登录
  login: (credentials: { email: string; password: string }) => post('/user/login', credentials),

  // 用户注册
  register: (userData: unknown) => post('/user/register', userData),

  // 用户登出
  logout: () => post('/user/logout'),
}

// 通用API
export const commonApi = {
  // 获取配置信息
  getConfig: () => get('/config'),

  // 上传文件
  uploadFile: (file: File) => {
    const formData = new FormData()
    formData.append('file', file)
    return request('/upload', {
      method: 'POST',
      body: formData,
      headers: {}, // 让浏览器自动设置Content-Type
    })
  },
}

export default {
  get,
  post,
  put,
  del,
  userApi,
  commonApi,
}
