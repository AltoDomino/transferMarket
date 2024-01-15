const http = require('http')
const fs = require('node:fs/promises')
const {generateFile} = require('./resPlayer')

const getFiles = async () => {
    const indexHtml = await fs.readFile('./index.html')
    const indexJs = await fs.readFile('./dist/index.bundle.js')
    return [
        indexHtml,
        indexJs,
    ]
}

http.createServer( async (req, res) => {
   const [indexHtml, indexJs] = await getFiles()
    if (req.url.includes('link')) {
        const fileName = await generateFile(req.url)
        const excelfile = await fs.readFile(`./TransferMarket${fileName}.xlsx`)
        if(fileName && excelfile){
            res.writeHead(200, {'Content-Type':'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'})
            res.write(excelfile)
            res.end()
            }
      }
    switch(req.url) {
        case '/':
            res.writeHead(200, {'Content-Type':'text/html'})
            res.write(indexHtml)
            res.end()
            break
        case '/idzie':
            res.writeHead(200, {'Content-Type':'text/javascript'})
            res.write(indexJs)
            res.end()
            break
        default:
            res.writeHead(404)
            res.write('Nie!')
            res.end()
    }
}).listen(8888)



