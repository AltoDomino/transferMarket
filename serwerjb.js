const http = require('http')
const fs = require('node:fs/promises')
const {generateFile} = require('./resPlayer')
const events = require('events');
const eventemmiter = new events.EventEmitter()


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
        const response = await fetch(`http://localhost:8888/${req.url}`)
        const arrayBuffer = await response.arrayBuffer()
        const data = Buffer.from(arrayBuffer)
        eventemmiter.on("wait",() =>{
        res.writeHead(200, {'Content-Type':'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'})
        res.write(data)
        res.end()})
        return 
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
        case '/download' :
            eventemmiter.emit('wait')
            res.writeHead(200, {'Content-Type':'text/javascript'})
            res.write(indexJs)
            res.end()
            break
        default:
            res.writeHead(404)
            res.write('Nie!')
            res.end()
    }
}).listen(8080)