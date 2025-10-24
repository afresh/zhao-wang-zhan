<template>
  <div class="about">
    <div class="about-header">
      <h1>关于我们</h1>
      <p>了解找网站项目的技术栈和特性</p>
    </div>

    <div class="about-content">
      <div class="tech-stack">
        <h2>技术栈</h2>
        <div class="tech-grid">
          <div class="tech-item">
            <div class="tech-icon">⚡</div>
            <h3>Vue 3</h3>
            <p>渐进式JavaScript框架</p>
          </div>
          <div class="tech-item">
            <div class="tech-icon">🚀</div>
            <h3>Vite</h3>
            <p>下一代前端构建工具</p>
          </div>
          <div class="tech-item">
            <div class="tech-icon">🎨</div>
            <h3>Element Plus</h3>
            <p>Vue 3组件库</p>
          </div>
          <div class="tech-item">
            <div class="tech-icon">📦</div>
            <h3>Pinia</h3>
            <p>Vue状态管理库</p>
          </div>
          <div class="tech-item">
            <div class="tech-icon">🛣️</div>
            <h3>Vue Router</h3>
            <p>Vue官方路由管理器</p>
          </div>
          <div class="tech-item">
            <div class="tech-icon">🔧</div>
            <h3>TypeScript</h3>
            <p>JavaScript的超集</p>
          </div>
        </div>
      </div>

      <div class="features">
        <h2>项目特性</h2>
        <div class="feature-list">
          <div class="feature-item">
            <el-icon><Check /></el-icon>
            <span>现代化的Vue 3 Composition API</span>
          </div>
          <div class="feature-item">
            <el-icon><Check /></el-icon>
            <span>TypeScript类型安全</span>
          </div>
          <div class="feature-item">
            <el-icon><Check /></el-icon>
            <span>Element Plus UI组件</span>
          </div>
          <div class="feature-item">
            <el-icon><Check /></el-icon>
            <span>Pinia状态管理</span>
          </div>
          <div class="feature-item">
            <el-icon><Check /></el-icon>
            <span>Vue Router路由管理</span>
          </div>
          <div class="feature-item">
            <el-icon><Check /></el-icon>
            <span>ESLint代码规范</span>
          </div>
          <div class="feature-item">
            <el-icon><Check /></el-icon>
            <span>Prettier代码格式化</span>
          </div>
          <div class="feature-item">
            <el-icon><Check /></el-icon>
            <span>响应式设计</span>
          </div>
        </div>
      </div>

      <div class="contact">
        <h2>联系我们</h2>
        <div class="contact-info">
          <div class="contact-item">
            <el-icon><Message /></el-icon>
            <span>邮箱: contact@zhaowangzhan.com</span>
          </div>
          <div class="contact-item">
            <el-icon><Phone /></el-icon>
            <span>电话: +86 138-0000-0000</span>
          </div>
          <div class="contact-item">
            <el-icon><Location /></el-icon>
            <span>地址: 中国北京市朝阳区</span>
          </div>
        </div>
      </div>
    </div>

    <div class="back-home">
      <el-button type="primary" @click="goHome">
        <el-icon><ArrowLeft /></el-icon>
        返回首页
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import { Check, Message, Phone, Location, ArrowLeft } from '@element-plus/icons-vue'

  const router = useRouter()

  const goHome = () => {
    router.push('/')
  }
</script>

<style scoped>
  .about {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  .about-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .about-header h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1rem;
  }

  .about-header p {
    font-size: 1.1rem;
    color: #666;
  }

  .about-content {
    display: grid;
    gap: 3rem;
  }

  .tech-stack h2,
  .features h2,
  .contact h2 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 2rem;
    text-align: center;
  }

  .tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  .tech-item {
    background: white;
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease;
  }

  .tech-item:hover {
    transform: translateY(-5px);
  }

  .tech-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .tech-item h3 {
    font-size: 1.3rem;
    color: #333;
    margin-bottom: 0.5rem;
  }

  .tech-item p {
    color: #666;
    line-height: 1.5;
  }

  .feature-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
  }

  .feature-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    background: #f8f9fa;
    border-radius: 0.5rem;
    transition: background-color 0.3s ease;
  }

  .feature-item:hover {
    background: #e9ecef;
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 500px;
    margin: 0 auto;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .back-home {
    text-align: center;
    margin-top: 3rem;
  }

  @media (max-width: 768px) {
    .about-header h1 {
      font-size: 2rem;
    }

    .tech-grid {
      grid-template-columns: 1fr;
    }

    .feature-list {
      grid-template-columns: 1fr;
    }

    .contact-info {
      max-width: 100%;
    }
  }
</style>
