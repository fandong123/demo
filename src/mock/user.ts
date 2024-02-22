import Mock from 'mockjs'
import { safeJSONParse } from '@/utils';

import type { LoginValues } from '@/service/user';

interface Options {
  url: string;
  type: string;
  body: string;
}

Mock.mock('/api/login/account', 'post', function (options: Options) {
  const { password, account } = safeJSONParse<LoginValues>(options.body);
  if (password === '123456' && account === 'admin') {
    return Mock.mock({
      success: true,
      result: '登录成功'
    })
  } else {
    return Mock.mock({
      success: false,
      result: '登录失败'
    })
  }
})

Mock.mock('/api/registry/account', 'post', {
  success: true,
  result: '注册成功'
})