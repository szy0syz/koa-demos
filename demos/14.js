const koa = require('koa')
const app = new koa()

const main = ctx => {
  ctx.throw(500)
}

app.use(main)
app.listen(3001)