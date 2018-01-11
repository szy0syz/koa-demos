// error 事件的监听
const koa = require('koa')
const app = new koa()

const handler = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.response.status = err.statusCode || err.status || 500;
    ctx.response.type = 'html';
    ctx.response.body = '<p>Something wrong, please contact administrator.</p>';
    ctx.app.emit('error', err, ctx);
  }
}

const main = ctx => {
  ctx.throw(500)
}

app.on('error', (err, ctx) => {
  console.log('[on-event]server error', err)
})

app.use(handler)
app.use(main)
app.listen(3001)