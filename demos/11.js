const compose = require('koa-compose')
const koa = require('koa')
const app = new koa()

const logger = (ctx, next) => {
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`)
  next()
}

const main = function (ctx, next) {
  ctx.response.body = 'Hello World'
}

const middlewares = compose([logger, main])
app.use(middlewares)
app.listen(3001)