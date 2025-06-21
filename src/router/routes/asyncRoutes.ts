import { RoutesAlias } from '../routesAlias'
import { AppRouteRecord } from '@/types/router'

/**
 * 菜单列表、异步路由
 *
 * 支持两种模式:
 * 1. 前端静态配置 - 直接使用本文件中定义的路由配置
 * 2. 后端动态配置 - 后端返回菜单数据，前端解析生成路由
 *
 * 菜单标题（title）:
 * 可以是 i18n 的 key，也可以是字符串，比如：'用户列表'
 */
export const asyncRoutes: AppRouteRecord[] = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    component: RoutesAlias.Home,
    meta: {
      title: 'menus.dashboard.title',
      icon: '&#xe721;'
    },
    children: [
      {
        path: 'console',
        name: 'Console',
        component: RoutesAlias.Dashboard,
        meta: {
          title: 'menus.dashboard.console',
          keepAlive: false,
          fixedTab: true
        }
      },
      {
        path: 'analysis',
        name: 'Analysis',
        component: RoutesAlias.Analysis,
        meta: {
          title: 'menus.dashboard.analysis',
          keepAlive: false
        }
      },
      {
        path: 'ecommerce',
        name: 'Ecommerce',
        component: RoutesAlias.Ecommerce,
        meta: {
          title: 'menus.dashboard.ecommerce',
          keepAlive: false
        }
      }
    ]
  },
  {
    path: '/system',
    name: 'System',
    component: RoutesAlias.Home,
    meta: {
      title: 'menus.system.title',
      icon: '&#xe7b9;',
      roles: ['R_SUPER', 'R_ADMIN']
    },
    children: [
      {
        path: 'user',
        name: 'User',
        component: RoutesAlias.User,
        meta: {
          title: 'menus.system.user',
          keepAlive: true,
          roles: ['R_SUPER', 'R_ADMIN']
        }
      },
      {
        path: 'role',
        name: 'Role',
        component: RoutesAlias.Role,
        meta: {
          title: 'menus.system.role',
          keepAlive: true,
          roles: ['R_SUPER']
        }
      },
      {
        path: 'user-center',
        name: 'UserCenter',
        component: RoutesAlias.UserCenter,
        meta: {
          title: 'menus.system.userCenter',
          isHide: true,
          keepAlive: true,
          isHideTab: true
        }
      },
      {
        path: 'menu',
        name: 'Menus',
        component: RoutesAlias.Menu,
        meta: {
          title: 'menus.system.menu',
          keepAlive: true,
          roles: ['R_SUPER'],
          authList: [
            {
              title: '新增',
              auth_mark: 'add'
            },
            {
              title: '编辑',
              auth_mark: 'edit'
            },
            {
              title: '删除',
              auth_mark: 'delete'
            }
          ]
        }
      }
    ]
  },
  {
    path: '/article',
    name: 'Article',
    component: RoutesAlias.Home,
    meta: {
      title: 'menus.article.title',
      icon: '&#xe7ae;',
      roles: ['R_SUPER', 'R_ADMIN']
    },
    children: [
      {
        path: 'article-list',
        name: 'ArticleList',
        component: RoutesAlias.ArticleList,
        meta: {
          title: 'menus.article.articleList',
          keepAlive: true,
          authList: [
            {
              title: '新增',
              auth_mark: 'add'
            },
            {
              title: '编辑',
              auth_mark: 'edit'
            }
          ]
        }
      },

      {
        path: 'detail',
        name: 'ArticleDetail',
        component: RoutesAlias.ArticleDetail,
        meta: {
          title: 'menus.article.articleDetail',
          isHide: true,
          keepAlive: true,
          activePath: '/article/article-list' // 激活菜单路径
        }
      },
      {
        path: 'comment',
        name: 'ArticleComment',
        component: RoutesAlias.Comment,
        meta: {
          title: 'menus.article.comment',
          keepAlive: true
        }
      },
      {
        path: 'publish',
        name: 'ArticlePublish',
        component: RoutesAlias.ArticlePublish,
        meta: {
          title: 'menus.article.articlePublish',
          keepAlive: true,
          authList: [
            {
              title: '发布',
              auth_mark: 'article/article-publish/add'
            }
          ]
        }
      }
    ]
  },
  {
    path: '/exception',
    name: 'Exception',
    component: RoutesAlias.Home,
    meta: {
      title: 'menus.exception.title',
      icon: '&#xe820;'
    },
    children: [
      {
        path: '403',
        name: '403',
        component: RoutesAlias.Exception403,
        meta: {
          title: 'menus.exception.forbidden',
          keepAlive: true
        }
      },
      {
        path: '404',
        name: '404',
        component: RoutesAlias.Exception404,
        meta: {
          title: 'menus.exception.notFound',
          keepAlive: true
        }
      },
      {
        path: '500',
        name: '500',
        component: RoutesAlias.Exception500,
        meta: {
          title: 'menus.exception.serverError',
          keepAlive: true
        }
      }
    ]
  },
  // 一级菜单
  {
    name: 'ChangeLog',
    path: '/change/log',
    component: RoutesAlias.ChangeLog,
    meta: {
      title: 'menus.plan.log',
      showTextBadge: `v${__APP_VERSION__}`,
      icon: '&#xe712;',
      keepAlive: false
    }
  }
]
