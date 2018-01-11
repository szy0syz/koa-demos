// demos/06.js
// koa-route 模块
const Koa = require('koa')
const route = require('koa-route')
const app = new Koa()

const about = ctx => {
  ctx.response.type = 'html'
  ctx.response.body = '<a href="/">About: Index Page</a>'
}

const main = ctx => {
  ctx.response.type = 'html'
  ctx.response.body = 'Hello World'
}

app.use(route.get('/', main))
app.use(route.get('/about', about))
app.listen(3001)