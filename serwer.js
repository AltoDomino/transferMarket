const fs = require ("fs/promises")
const http = require("http")
const {generateFile} = require("./resPlayer")

const getFiles = async() =>{
    const indexHtml = await fs.readFile("./index.html")
    const indexJs = await fs.readFile("./dist/index.bundle.js")
    return [indexHtml,indexJs]
}

http.createServer(async(req,res)=>{
    const [indexHtml,indexJs] = await getFiles()
    if(req.url.includes('link')) {
    generateFile(req.url)
    const fileName = generateFile(req.url)
        res.writeHead(200, {'Content-Type':'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'})
        res.write(await fs.readFile(`./TransferMarket${fileName}.xlsx`))
        res.end()
    }
    switch(req.url){
        case"/" :
            res.writeHead(200, {"content-type" : "text/html"})
            res.write(indexHtml)
            res.end()
        break
        case "/idzie" :
            res.writeHead(200, {"content-type" : "text-javascript"})
            res.write(indexJs)
            res.end()
        break
        case "/xlsx" :
            res.writeHead(200, {'Content-Type':'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'})
            res.write(await fs.readFile(''))
            res.end()
        break
        default:
            res.writeHead(404)
            res.write("wyebao")
            res.end() 
            break
        }
       
}).listen(8080)