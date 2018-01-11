const fs = require('fs.promised')
const koa = require('koa')
const app = new koa()

const main = async function (ctx, next) {
  ctx.response.body = await fs.readFile('template.html', 'utf8')
}

app.use(main)
app.listen(3001)