// 处理错误的中间件
const koa = require('koa')
const app = new koa()

const handler = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.response.status = err.statusCode || err.status || 500
    ctx.response.body = {
      message: err.message
    } 
  }
}

const main = ctx => {
  ctx.throw(500)
}

app.use(handler)
app.use(main)
app.listen(3001)