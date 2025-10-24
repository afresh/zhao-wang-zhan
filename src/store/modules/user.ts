import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface User {
  id: number
  name: string
  email: string
  avatar?: string
}

export const useUserStore = defineStore('user', () => {
  // 状态
  const user = ref<User | null>(null)
  const isLoggedIn = ref(false)
  const loading = ref(false)

  // 计算属性
  const userName = computed(() => user.value?.name || '游客')
  const userAvatar = computed(() => user.value?.avatar || '/default-avatar.png')

  // 动作
  const login = async (email: string) => {
    loading.value = true
    try {
      // 模拟登录API调用
      await new Promise(resolve => setTimeout(resolve, 1000))

      // 模拟用户数据
      user.value = {
        id: 1,
        name: '找网站',
        email,
        avatar: '/avatar.jpg',
      }
      isLoggedIn.value = true

      return { success: true }
    } catch {
      return { success: false, error: '登录失败' }
    } finally {
      loading.value = false
    }
  }

  const logout = () => {
    user.value = null
    isLoggedIn.value = false
  }

  const updateProfile = (profileData: Partial<User>) => {
    if (user.value) {
      user.value = { ...user.value, ...profileData }
    }
  }

  return {
    // 状态
    user,
    isLoggedIn,
    loading,
    // 计算属性
    userName,
    userAvatar,
    // 动作
    login,
    logout,
    updateProfile,
  }
})
