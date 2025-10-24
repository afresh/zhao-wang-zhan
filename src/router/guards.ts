import type { Router, RouteLocationNormalized, NavigationGuardNext } from 'vue-router'

export function setupRouterGuards(router: Router) {
  // 全局前置守卫
  router.beforeEach(
    (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
      // 设置页面标题
      if (to.meta?.title) {
        document.title = `${to.meta.title} - 找网站`
      }

      // 可以在这里添加权限验证、登录检查等逻辑
      console.log('路由跳转:', from.path, '->', to.path)

      next()
    }
  )

  // 全局后置钩子
  router.afterEach((to: RouteLocationNormalized) => {
    // 可以在这里添加页面加载完成后的逻辑
    console.log('路由跳转完成:', to.path)
  })

  // 全局解析守卫
  router.beforeResolve(
    (_to: RouteLocationNormalized, _from: RouteLocationNormalized, next: NavigationGuardNext) => {
      // 可以在这里添加数据预加载等逻辑
      next()
    }
  )
}
