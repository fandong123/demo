import Mock from 'mockjs'
// import type { MerchantListItem } from "@/service/merchant";



Mock.mock('/api/queryMerchantInfo', 'get', function () {
  return Mock.mock({
    success: true,
    result: [
      {
        merchantAccout: '88888',
        merchantName: '支付宝',
        merchantCash: '66666'
      },
      {
        merchantAccout: '66666',
        merchantName: '微信',
        merchantCash: '9999'
      },
      {
        merchantAccout: '8823888',
        merchantName: '百度',
        merchantCash: '333333'
      },
    ]
  })
})