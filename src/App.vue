<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import { ref, onMounted } from 'vue'

  // 导航菜单
  const menuItems = [
    { name: '首页', path: '/' },
    { name: '关于', path: '/about' },
  ]

  // 移动端菜单状态
  const isMobileMenuOpen = ref(false)

  // 切换移动端菜单
  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }

  // 关闭移动端菜单
  const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
  }

  onMounted(() => {
    // 初始化逻辑
    console.log('应用已启动')
  })
</script>

<template>
  <div id="app">
    <!-- 导航栏 -->
    <nav class="navbar">
      <div class="navbar-container">
        <div class="navbar-brand">
          <h1>找网站</h1>
        </div>

        <!-- 桌面端菜单 -->
        <div class="navbar-menu desktop">
          <router-link
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            class="navbar-item"
            active-class="active"
          >
            {{ item.name }}
          </router-link>
        </div>

        <!-- 移动端菜单按钮 -->
        <button class="mobile-menu-toggle" @click="toggleMobileMenu" aria-label="切换菜单">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <!-- 移动端菜单 -->
      <div class="mobile-menu" :class="{ 'is-open': isMobileMenuOpen }">
        <router-link
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          class="mobile-menu-item"
          @click="closeMobileMenu"
        >
          {{ item.name }}
        </router-link>
      </div>
    </nav>

    <!-- 主要内容区域 -->
    <main class="main-content">
      <RouterView />
    </main>

    <!-- 页脚 -->
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; 2024 找网站. 保留所有权利.</p>
        <p>基于 Vue 3 + Vite + Element Plus 构建</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
  #app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  /* 导航栏样式 */
  .navbar {
    background: var(--bg-primary);
    box-shadow: var(--shadow-md);
    position: sticky;
    top: 0;
    z-index: var(--z-sticky);
  }

  .navbar-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
  }

  .navbar-brand h1 {
    color: var(--primary-color);
    font-size: 1.5rem;
    font-weight: var(--font-bold);
    margin: 0;
  }

  .navbar-menu.desktop {
    display: flex;
    gap: 2rem;
  }

  .navbar-item {
    color: var(--text-primary);
    text-decoration: none;
    font-weight: var(--font-medium);
    padding: 0.5rem 1rem;
    border-radius: var(--radius-md);
    transition: all var(--transition-normal) var(--ease-in-out);
  }

  .navbar-item:hover {
    background: var(--bg-secondary);
    color: var(--primary-color);
  }

  .navbar-item.active {
    background: var(--primary-color);
    color: var(--white);
  }

  /* 移动端菜单按钮 */
  .mobile-menu-toggle {
    display: none;
    flex-direction: column;
    gap: 4px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
  }

  .mobile-menu-toggle span {
    width: 24px;
    height: 2px;
    background: var(--text-primary);
    transition: all var(--transition-normal) var(--ease-in-out);
  }

  .mobile-menu {
    display: none;
    background: var(--bg-primary);
    border-top: 1px solid var(--border-primary);
    padding: 1rem;
  }

  .mobile-menu.is-open {
    display: block;
  }

  .mobile-menu-item {
    display: block;
    color: var(--text-primary);
    text-decoration: none;
    padding: 1rem;
    border-radius: var(--radius-md);
    transition: all var(--transition-normal) var(--ease-in-out);
  }

  .mobile-menu-item:hover {
    background: var(--bg-secondary);
    color: var(--primary-color);
  }

  /* 主要内容区域 */
  .main-content {
    flex: 1;
    min-height: calc(100vh - 64px - 80px);
  }

  /* 页脚样式 */
  .footer {
    background: var(--bg-secondary);
    border-top: 1px solid var(--border-primary);
    padding: 2rem 0;
    margin-top: auto;
  }

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    text-align: center;
    color: var(--text-secondary);
  }

  .footer-content p {
    margin: 0.5rem 0;
  }

  /* 响应式设计 */
  @media (max-width: 768px) {
    .navbar-menu.desktop {
      display: none;
    }

    .mobile-menu-toggle {
      display: flex;
    }

    .navbar-brand h1 {
      font-size: 1.25rem;
    }
  }

  /* 深色模式支持 */
  .dark .navbar {
    background: var(--bg-primary);
    border-bottom: 1px solid var(--border-primary);
  }

  .dark .footer {
    background: var(--bg-secondary);
    border-top: 1px solid var(--border-primary);
  }
</style>
