/**
 * 路由别名，方便快速找到页面，同时可以用作路由跳转
 */
export enum RoutesAlias {
  Layout = '/index/index', // 布局容器
  Login = '/auth/login', // 登录
  Register = '/auth/register', // 注册
  ForgetPassword = '/auth/forget-password', // 忘记密码
  Exception403 = '/exception/403', // 403
  Exception404 = '/exception/404', // 404
  Exception500 = '/exception/500', // 500
  Dashboard = '/dashboard/console', // 工作台
  Analysis = '/dashboard/analysis', // 分析页
  Ecommerce = '/dashboard/ecommerce', // 电子商务
  ArticleList = '/article/list', // 文章列表
  ArticleDetail = '/article/detail', // 文章详情
  Comment = '/article/comment', // 评论
  ArticlePublish = '/article/publish', // 文章发布
  User = '/system/user', // 账户
  Role = '/system/role', // 角色
  UserCenter = '/system/user-center', // 用户中心
  Menu = '/system/menu', // 菜单
  ChangeLog = '/change/log' // 更新日志
}
