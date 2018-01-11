// demos/08.js
// 中间件栈 这才是koa的精髓
const Koa = require('koa')
const app = new Koa()

const one = (ctx, next) => {
  console.log('[in] >> one')
  next()
  console.log('[out] << one')
}

const two = (ctx, next) => {
  console.log('[in] >> two')
  next()
  console.log('[out] << two')
}

const three = (ctx, next) => {
  console.log('[in] >> three')
  next()
  console.log('[out] << three')
}

app.use(one)
app.use(two)
app.use(three)
app.listen(3001)

// [in] >> one
// [in] >> two
// [in] >> three
// [out] << three
// [out] << two
// [out] << one