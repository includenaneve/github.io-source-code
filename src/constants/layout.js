import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon
} from 'react-feather';
import { ChildCare, PhotoLibrary } from '@material-ui/icons'

import { default as avatar } from '@/assest/img/avatar.png'
import cloudMusic from '@/assest/img/cloudMusic.png'
import github from '@/assest/img/github.png'
import qq from '@/assest/img/qq.png'
import wechat from '@/assest/img/wechat.png'
import weibo from '@/assest/img/weibo.png'

export const USERINFO = {
  name: 'Gatsby',
  info: '上海奋斗小青年Blog',
  avatar
}

export const NAVCONFIG = [
  {
    href: '/her',
    icon: ChildCare,
    title: '她',
    divider: true
  },
  {
    href: '/blog',
    icon: UsersIcon,
    title: '我的博客',
    divider: false
  },
  {
    href: '/diary',
    icon: PhotoLibrary,
    title: '日记',
    divider: false
    
  },
  {
    href: '/settings',
    icon: SettingsIcon,
    title: '设置',
    divider: false
  },
  // {
  //   href: '/app/account',
  //   icon: UserIcon,
  //   title: '个人信息'
  // },
  // {
  //   href: '/login',
  //   icon: LockIcon,
  //   title: '安全'
  // },
  // {
  //   href: '/register',
  //   icon: UserPlusIcon,
  //   title: '注册'
  // },
  // {
  //   href: '/404',
  //   icon: AlertCircleIcon,
  //   title: '建议和改进'
  // }
];

export const connectMe = [
  {
    icon: cloudMusic,
    name: '网易云音乐',
    tips: '网易云音乐'
  },
  {
    icon: qq,
    name: 'QQ',
    tips: 'QQ'
  },
  {
    icon: github,
    name: 'github',
    tips: 'github'
  },
  {
    icon: wechat,
    name: '微信',
    tips: '微信'
  },
  {
    icon: weibo,
    name: '新浪微博',
    tips: '新浪微博'
  },
]