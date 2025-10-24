<template>
  <div class="not-found">
    <div class="not-found-content">
      <div class="error-code">404</div>
      <h1>页面未找到</h1>
      <p>抱歉，您访问的页面不存在或已被移除。</p>

      <div class="actions">
        <el-button type="primary" @click="goHome">
          <el-icon><HomeFilled /></el-icon>
          返回首页
        </el-button>
        <el-button @click="goBack">
          <el-icon><ArrowLeft /></el-icon>
          返回上页
        </el-button>
      </div>
    </div>

    <div class="suggestions">
      <h3>您可能想要访问：</h3>
      <div class="suggestion-links">
        <el-button
          v-for="link in suggestionLinks"
          :key="link.path"
          :type="link.type"
          @click="navigateTo(link.path)"
        >
          {{ link.name }}
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import { HomeFilled, ArrowLeft } from '@element-plus/icons-vue'

  const router = useRouter()

  const suggestionLinks = [
    { name: '首页', path: '/', type: 'primary' },
    { name: '关于我们', path: '/about', type: 'default' },
  ]

  const goHome = () => {
    router.push('/')
  }

  const goBack = () => {
    router.go(-1)
  }

  const navigateTo = (path: string) => {
    router.push(path)
  }
</script>

<style scoped>
  .not-found {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  }

  .not-found-content {
    text-align: center;
    max-width: 600px;
    margin-bottom: 3rem;
  }

  .error-code {
    font-size: 8rem;
    font-weight: bold;
    color: #667eea;
    line-height: 1;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }

  .not-found-content h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1rem;
  }

  .not-found-content p {
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  .actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .suggestions {
    background: white;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    width: 100%;
  }

  .suggestions h3 {
    color: #333;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .suggestion-links {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    .error-code {
      font-size: 6rem;
    }

    .not-found-content h1 {
      font-size: 2rem;
    }

    .actions {
      flex-direction: column;
      align-items: center;
    }

    .suggestion-links {
      flex-direction: column;
      align-items: center;
    }
  }
</style>
