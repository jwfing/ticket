const router = require('express').Router()
const AV = require('leanengine')

AV.init({
  appId: process.env.LEANCLOUD_APP_ID,
  appKey: process.env.LEANCLOUD_APP_KEY,
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY
})
// TODO 后续移除全局 masterKey
AV.Cloud.useMasterKey()

// 加载云函数定义
require('./cloud')
// 加载云引擎中间件
router.use(AV.express())

router.use('/api/leancloud', require('./leancloud'))

module.exports = router