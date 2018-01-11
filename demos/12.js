// demos/07.js
// 静态资源 koa-static
const Koa = require('koa')
const app = new Koa()
const path = require('path')
const serve = require('koa-static')

const main = serve(path.join(__dirname))
// http://127.0.0.1:3001/template.html
app.use(main)
app.listen(3001)