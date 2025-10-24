<template>
  <div class="home">
    <div class="hero">
      <h1 class="hero-title">欢迎来到找网站</h1>
      <p class="hero-subtitle">一个现代化的Vue 3应用</p>
      <div class="hero-actions">
        <el-button type="primary" size="large" @click="goToAbout"> 了解更多 </el-button>
        <el-button size="large" @click="toggleTheme">
          {{ isDark ? '浅色模式' : '深色模式' }}
        </el-button>
      </div>
    </div>

    <div class="features">
      <div class="feature-card">
        <h3>🚀 快速开发</h3>
        <p>基于Vite构建，享受极速的开发体验</p>
      </div>
      <div class="feature-card">
        <h3>⚡ Vue 3</h3>
        <p>使用最新的Vue 3 Composition API</p>
      </div>
      <div class="feature-card">
        <h3>🎨 Element Plus</h3>
        <p>美观的UI组件库，开箱即用</p>
      </div>
    </div>

    <div class="counter-section">
      <h2>计数器演示</h2>
      <div class="counter">
        <el-button @click="decrement" :disabled="count <= 0">-</el-button>
        <span class="count">{{ count }}</span>
        <el-button @click="increment">+</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  // 响应式数据
  const count = ref(0)
  const isDark = ref(false)

  // 方法
  const increment = () => {
    count.value++
  }

  const decrement = () => {
    if (count.value > 0) {
      count.value--
    }
  }

  const goToAbout = () => {
    router.push('/about')
  }

  const toggleTheme = () => {
    isDark.value = !isDark.value
    document.documentElement.classList.toggle('dark', isDark.value)
  }
</script>

<style scoped>
  .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  .hero {
    text-align: center;
    padding: 4rem 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 1rem;
    margin-bottom: 3rem;
  }

  .hero-title {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }

  .hero-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  .features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .feature-card {
    padding: 2rem;
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .feature-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #333;
  }

  .feature-card p {
    color: #666;
    line-height: 1.6;
  }

  .counter-section {
    text-align: center;
    padding: 2rem;
    background: #f8f9fa;
    border-radius: 0.5rem;
  }

  .counter-section h2 {
    margin-bottom: 2rem;
    color: #333;
  }

  .counter {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .count {
    font-size: 2rem;
    font-weight: bold;
    min-width: 3rem;
    color: #667eea;
  }

  @media (max-width: 768px) {
    .hero-title {
      font-size: 2rem;
    }

    .hero-actions {
      flex-direction: column;
      align-items: center;
    }

    .features {
      grid-template-columns: 1fr;
    }
  }
</style>
