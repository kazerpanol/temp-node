const http = require('http')

const server = http.createServer((req,res)=>{

    if(req.url==='/'){
        res.end("welcome to our homepage")
    }
    if(req.url==='/about'){
        res.end("This is about page")
    }
    res.end(`<h1> oops eerrror</h1> `)

console.log(req)
res.write('welcome to our homee pagge')
res.end()
})


server.listen(5000)