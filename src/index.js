const Koa = require('koa');
const Router = require('@koa/router');
const logger = require('koa-logger')

const app = new Koa();
app.use(logger())

const router = new Router({prefix: '/mock-api'});

router.get('/discount/fields', (ctx, next) => {
  // ctx.router available
  ctx.body = {
    "code":200,
    "message":"操作成功",
    "data": {
      mediaList: [
        { label: '百度', value: 1 },
        { label: '头条', value: 2 },
        { label: '快手', value: 3 }
      ],
      bgList: [
        { label: '黄页', value: 1 },
        { label: '招聘', value: 2 }
      ],
    }
  }
});


router.post('/discount/queryList', (ctx, next) => {
  // ctx.router available
  ctx.body = {
    "code":200,
    "message":"操作成功",
    "data": {
      list: [
        {
          id: 111,
          startDate: '2023-01-01',
          endDate: '2023-12-31',
          mediaId: 1,
          agentName: '代理商名称', // 代理商名称
          bgId: 2,
          platformAccountName: '账户名称',
          discount: 111, // 返点系数
          operator: '操作人',
          createTime: 1694661420584, // 时间戳
          updateTime: 1694661420584 // 时间戳
      },
      {
        id: 222,
        startDate: '2023-01-01',
        endDate: '2023-12-31',
        mediaId: 1,
        agentName: '代理商名称', // 代理商名称
        bgId: 2,
        platformAccountName: '账户名称',
        discount: 111, // 返点系数
        operator: '操作人',
        createTime: 1694661420584, // 时间戳
        updateTime: 1694661420584 // 时间戳
    },
    {
      id: 333,
      startDate: '2023-01-01',
      endDate: '2023-12-31',
      mediaId: 1,
      agentName: '代理商名称', // 代理商名称
      bgId: 2,
      platformAccountName: '账户名称',
      discount: 111, // 返点系数
      operator: '操作人',
      createTime: 1694661420584, // 时间戳
      updateTime: 1694661420584 // 时间戳
  },
      ],
      total: 20,
    }
  }
});

router.post('/discount/account/queryList', (ctx, next) => {
  // ctx.router available
  ctx.body = {
    "code":200,
    "message":"操作成功",
    "data": {
      list: [
        { id: '111', showName: '1111111111' },
        { id: '222', showName: '2222222222' },
        { id: '333', showName: '3333333333' },
      ],
      total: 20
    }
  }
});


router.post('/discount/modify', (ctx, next) => {
  // ctx.router available
  ctx.body = {
    "code":200,
    "message":"操作成功",
    "data": null
  }
});
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);