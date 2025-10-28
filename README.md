# 找网站 - Vue 3 现代化应用

一个基于 Vue 3 + Vite + TypeScript + Element Plus 构建的现代化单页应用。

## 🚀 技术栈

- **Vue 3** - 渐进式JavaScript框架
- **Vite** - 下一代前端构建工具
- **TypeScript** - JavaScript的超集，提供类型安全
- **Element Plus** - Vue 3组件库
- **Vue Router** - Vue官方路由管理器
- **Pinia** - Vue状态管理库
- **ESLint** - 代码规范检查
- **Prettier** - 代码格式化

## ✨ 功能特性

- 🎨 现代化UI设计，支持深色模式
- 📱 完全响应式设计，支持移动端
- 🛣️ 路由管理，支持路由守卫
- 📦 状态管理，使用Pinia
- 🔧 TypeScript类型安全
- 🎯 代码规范，ESLint + Prettier
- ⚡ 快速开发，热重载
- 🎪 组件化开发

## 📁 项目结构

```
src/
├── api/           # API接口
├── components/    # 公共组件
├── config/        # 配置文件
├── router/        # 路由配置
├── store/         # 状态管理
├── styles/        # 样式文件
├── utils/         # 工具函数
├── views/         # 页面组件
├── App.vue        # 根组件
└── main.ts        # 入口文件
```

## 🛠️ 开发指南

### 环境要求

- Node.js >= 16.0.0
- npm >= 8.0.0

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 📄 页面说明

- **首页** (`/`) - 应用主页，展示项目特性和功能演示
- **关于** (`/about`) - 项目介绍和技术栈说明
- **404页面** - 自定义404错误页面

## 🎨 样式系统

项目使用CSS变量系统，支持主题定制：

- 主色调：`#667eea`
- 辅助色：`#764ba2`
- 支持深色模式
- 响应式断点
- 工具类样式

## 🔧 配置说明

### 路由配置

- 支持路由守卫
- 自动设置页面标题
- 路由懒加载

### 状态管理

- 使用Pinia进行状态管理
- 支持用户状态管理
- 模块化store设计

### API配置

- 统一的API请求封装
- 支持请求拦截器
- 错误处理机制

## 📱 响应式设计

- 移动端优先设计
- 断点：768px, 1024px, 1280px
- 弹性布局和网格系统

## 🚀 部署

项目构建后可直接部署到任何静态文件服务器：

```bash
npm run build
```

构建文件将输出到 `dist` 目录。

## 📝 开发规范

- 使用TypeScript进行类型检查
- 遵循Vue 3 Composition API规范
- 组件命名使用PascalCase
- 文件命名使用kebab-case
- 提交信息遵循约定式提交规范

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支
3. 提交更改
4. 推送到分支
5. 创建Pull Request
