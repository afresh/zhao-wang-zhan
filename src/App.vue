<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { RouterView } from 'vue-router'

  const searchQuery = ref('')
  const isSearchFocused = ref(false)
  const inputRef = ref<HTMLInputElement | null>(null)

  const focusSearch = () => {
    if (inputRef.value) inputRef.value.focus()
  }

  const handleAddFavorite = () => {
    const url = window.location.href
    const title = document.title || '我的收藏'
    try {
      // IE / 旧版 Edge
      // @ts-expect-error legacy api
      if (window.external && window.external.AddFavorite) {
        // @ts-expect-error legacy api
        window.external.AddFavorite(url, title)
        return
      }
      // 旧版 Firefox
      // @ts-expect-error legacy api
      if (window.sidebar && window.sidebar.addPanel) {
        // @ts-expect-error legacy api
        window.sidebar.addPanel(title, url, '')
        return
      }
    } catch {
      // 忽略
    }
    // 现代浏览器（如 Chrome）不支持脚本直接添加书签，提供友好降级：复制链接并提示快捷键
    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      navigator.clipboard
        .writeText(url)
        .then(() => {
          const isMac = /Mac|iPhone|iPad|iPod/.test(navigator.platform)
          const combo = isMac ? '⌘ + D' : 'Ctrl + D'
          alert(`已复制网址。按 ${combo} 将此页加入书签。`)
        })
        .catch(() => {
          const isMac = /Mac|iPhone|iPad|iPod/.test(navigator.platform)
          const combo = isMac ? '⌘ + D' : 'Ctrl + D'
          alert(`请按 ${combo} 将此页加入书签。`)
        })
      return
    }
    const isMac = /Mac|iPhone|iPad|iPod/.test(navigator.platform)
    const combo = isMac ? '⌘ + D' : 'Ctrl + D'
    alert(`请按 ${combo} 将此页加入书签。`)
  }

  const currentYear = new Date().getFullYear()

  onMounted(() => {
    console.log('应用已启动')
  })
</script>

<template>
  <div class="common-layout" id="app">
    <!-- Header -->
    <header class="app-header">
      <div class="header-content">
        <button class="link-btn" @click="handleAddFavorite">收藏此页</button>
        <div class="v-sep"></div>
        <div class="search-wrap" @click="focusSearch">
          <div class="input-wrapper" :class="{ 'is-focus': isSearchFocused }">
            <span :class="['search-icon', { 'is-focused': isSearchFocused }]" aria-hidden="true"
              >🔍</span
            >
            <input
              ref="inputRef"
              class="text-input"
              :value="searchQuery"
              @focus="isSearchFocused = true"
              @blur="isSearchFocused = false"
              @input="(e: Event) => (searchQuery = (e.target as HTMLInputElement).value)"
            />
          </div>
          <div
            v-if="!searchQuery"
            class="search-placeholder"
            :class="{ 'is-focused': isSearchFocused }"
          >
            <span class="ph-zh">找</span>
            <span class="ph-wz">网站</span>
            <span class="ph-rest">就来这里搜搜搜……</span>
          </div>
        </div>
      </div>
    </header>

    <!-- Main -->
    <main class="app-main"><RouterView /></main>

    <!-- Footer -->
    <footer class="app-footer">
      <div class="footer-inner">
        <div class="footer-row footer-one-line">
          <span class="footer-brand">找网站</span>
          <span class="footer-sep">·</span>
          <span>&copy; {{ currentYear }} 版权所有</span>
          <span class="footer-sep">·</span>
          <a
            class="beian-link"
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            辽ICP备2025000000号-1
          </a>
        </div>
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
  /* Header base */
  .app-header {
    background: var(--el-bg-color);
    border-bottom: 1px solid var(--el-border-color);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
    padding: 0 20px;
  }
  .header-content {
    display: flex;
    align-items: center;
    gap: 14px;
    height: 60px;
    max-width: 1080px;
    margin: 0 auto;
    width: 100%;
  }
  .v-sep {
    width: 1px;
    height: 24px;
    background: var(--el-border-color);
  }
  .link-btn {
    background: transparent;
    color: var(--el-color-primary);
    border: none;
    cursor: pointer;
    font-weight: 500;
  }
  .link-btn:hover {
    filter: brightness(1.05);
  }
  /* Search input wrapper */
  .search-wrap {
    flex: 1 1 520px;
    max-width: 680px;
  }
  .search-icon {
    transition:
      transform 0.18s ease,
      color 0.18s ease;
    color: var(--el-text-color-secondary);
    font-size: 20px;
    margin-right: 6px;
  }
  .search-icon.is-focused {
    transform: scale(1.35);
    color: var(--el-color-primary);
  }
  /* Input styles */
  .input-wrapper {
    border-radius: var(--el-border-radius-small);
    padding: 2px 10px;
    border: 1px solid var(--el-border-color);
    transition:
      box-shadow 0.18s ease,
      background-color 0.18s ease;
    background-color: var(--el-fill-color-blank);
    display: flex;
    align-items: center;
  }
  .input-wrapper.is-focus {
    box-shadow:
      0 0 0 1px var(--el-color-primary),
      0 0 0 3px color-mix(in srgb, var(--el-color-primary) 15%, transparent);
    background-color: var(--el-color-white);
  }
  .text-input {
    height: 38px;
    border: none;
    outline: none;
    flex: 1;
    background: transparent;
    color: var(--el-text-color-primary);
  }
  .search-wrap {
    position: relative;
  }
  .search-placeholder {
    position: absolute;
    left: 34px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    display: inline-flex;
    align-items: flex-end;
    gap: 2px;
    font-weight: 600;
    font-size: 14px;
  }
  .search-placeholder span {
    line-height: 1;
  }
  /* Placeholder colors (normal) */
  .ph-zh {
    color: #ff4d8d;
  }
  .ph-wz {
    color: #1f4aa8;
    font-size: 16px;
  }
  .ph-rest {
    color: rgba(0, 0, 0, 0.62);
  }
  /* On focus, turn all to default gray */
  .search-placeholder.is-focused .ph-zh,
  .search-placeholder.is-focused .ph-wz,
  .search-placeholder.is-focused .ph-rest {
    color: var(--el-text-color-placeholder);
  }
  /* Responsive */
  @media (max-width: 768px) {
    .header-content {
      gap: 10px;
      padding: 0 4px;
    }
    .search-wrap {
      max-width: 100%;
    }
  }
  /* Footer styling */
  .app-footer {
    background: var(--el-bg-color);
    border-top: 1px solid var(--el-border-color);
    padding: 12px 16px;
  }
  .footer-inner {
    max-width: 1080px;
    margin: 0 auto;
    text-align: center;
    color: var(--el-text-color-secondary);
  }
  .footer-row {
    margin: 0;
  }
  .footer-one-line {
    font-size: 12px;
  }
  .footer-brand {
    font-weight: 600;
    color: var(--el-text-color-primary);
  }
  .footer-sep {
    margin: 0 6px;
    color: var(--el-border-color-darker);
  }
  .beian-link {
    color: var(--el-text-color-secondary);
    text-decoration: none;
    transition: color 0.18s ease;
    font-size: 12px;
  }
  .beian-link:hover {
    color: var(--el-color-primary);
  }
</style>
