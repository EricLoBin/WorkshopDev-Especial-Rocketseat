const port = 3000

//express para criar o servidor
const express = require("express")
const server = express()

//configurar arquivos estaticos (css, script, imagens)
server.use(express.static("public"))


//rota criada
server.get("/", function(req, res) {
    console.log("request index")
    return res.sendFile(__dirname + "/index.html")
})

server.get("/ideias", function(req, res) {
    console.log("request ideias")
    return res.sendFile(__dirname + "/public/ideias.html")
})


//ligar servidor na porta 3000
console.log("server open in port", port)
server.listen(port)