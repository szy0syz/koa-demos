const Koa = require('koa')
const fs = require('fs')
const os = require('os')
const path =  require('path')
const koaBody = require('koa-body')

const app = new Koa()

const main = async function(ctx) {
  const tmpdir = os.tmpdir()
  const filePaths = []
  const files = ctx.request.body.files || {}

  for (let key in files) {
    const file = files[key]
    const filePath = path.join(tmpdir, file.name)
    const reader = fs.createReadStream(filePath)
    const writer = fs.createWriteStream(filePath)
    reader.pipe(writer)
    filePaths.push(filePath)
  }

  ctx.body = filePaths
}

app.use(koaBody({ multipart: true }))
app.use(main)
app.listen(3001)

// curl --form upload=@/Users/Jerry/git/koa-demos/package.json http://127.0.0.1:3001