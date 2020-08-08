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

import { default as avatar } from '@/assest/img/avatar.png'

export const USERINFO = {
  name: 'Gatsby',
  info: '上海奋斗小青年Blog',
  avatar
}

export const NAVCONFIG = [
  {
    href: '/app/dashboard',
    icon: BarChartIcon,
    title: '她'
  },
  {
    href: '/app/customers',
    icon: UsersIcon,
    title: '留言板'
  },
  {
    href: '/app/products',
    icon: ShoppingBagIcon,
    title: '商店'
  },
  {
    href: '/app/account',
    icon: UserIcon,
    title: '账户'
  },
  {
    href: '/app/settings',
    icon: SettingsIcon,
    title: '设置'
  },
  {
    href: '/login',
    icon: LockIcon,
    title: '安全'
  },
  {
    href: '/register',
    icon: UserPlusIcon,
    title: '注册'
  },
  {
    href: '/404',
    icon: AlertCircleIcon,
    title: '建议和改进'
  }
];