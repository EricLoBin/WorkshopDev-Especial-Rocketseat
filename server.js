const port = 3000

//express para criar o servidor
const express = require("express")
const server = express()


//rota criada
server.get("/", function() {
    console.log("vai")
})


//ligar servidor na porta 3000
console.log("server open in port", port)
server.listen(port)