// error 事件的监听
const koa = require('koa')
const app = new koa()

const main = ctx => {
  ctx.throw(500)
}

app.on('error', (err, ctx) => {
  console.log('server error', err)
})

app.use(main)
app.listen(3001)