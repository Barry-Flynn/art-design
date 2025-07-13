/**
 * 快速入口配置
 * 包含：应用列表、快速链接等配置
 */
import { RoutesAlias } from '@/router/routesAlias'
import { WEB_LINKS } from '@/utils/constants'
import type { FastEnterConfig } from '@/types/config'

const fastEnterConfig: FastEnterConfig = {
  // 显示条件（屏幕宽度）
  minWidth: 1200,
  // 应用列表
  applications: [
    {
      name: '官方文档',
      description: '使用指南与开发文档',
      icon: '&#xe788;',
      iconColor: '#ffb100',
      path: WEB_LINKS.DOCS,
      enabled: true,
      order: 5
    },
    {
      name: '技术支持',
      description: '技术支持与问题反馈',
      icon: '&#xe86e;',
      iconColor: '#ff6b6b',
      path: WEB_LINKS.COMMUNITY,
      enabled: true,
      order: 6
    },
    {
      name: '更新日志',
      description: '版本更新与变更记录',
      icon: '&#xe81c;',
      iconColor: '#38C0FC',
      path: RoutesAlias.ChangeLog,
      enabled: true,
      order: 7
    },
    {
      name: '哔哩哔哩',
      description: '技术分享与交流',
      icon: '&#xe6b4;',
      iconColor: '#FB7299',
      path: WEB_LINKS.BILIBILI,
      enabled: true,
      order: 8
    }
  ],
  // 快速链接
  quickLinks: [
    {
      name: '登录',
      path: RoutesAlias.Login,
      enabled: true,
      order: 1
    },
    {
      name: '注册',
      path: RoutesAlias.Register,
      enabled: true,
      order: 2
    },
    {
      name: '忘记密码',
      path: RoutesAlias.ForgetPassword,
      enabled: true,
      order: 3
    }
  ]
}

export default Object.freeze(fastEnterConfig)
