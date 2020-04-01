const port = 3000

//express para criar o servidor
const express = require("express")
const server = express()



const db = require("./db")


//
/*
const ideas = [
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos de programação",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat saepe sit quia quo alias",
        url: "http://localhost:3000/#"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercícios",
        category: "Saúde",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat saepe sit quia quo alias",
        url: "http://localhost:3000/#"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Meditação",
        category: "Mentalidade",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat saepe sit quia quo alias",
        url: "http://localhost:3000/#"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729032.svg",
        title: "Karaokê",
        category: "Diversão em família",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat saepe sit quia quo alias",
        url: "http://localhost:3000/#"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729038.svg",
        title: "Pintura",
        category: "Imaginação",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat saepe sit quia quo alias",
        url: "http://localhost:3000/#"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729048.svg",
        title: "Recortes",
        category: "Criatividade",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat saepe sit quia quo alias",
        url: "http://localhost:3000/#"
    },
]
*/
//





//configurar arquivos estaticos (css, script, imagens)
server.use(express.static("public"))


//Configuração nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true,
})
//


//rota criada
server.get("/", function(req, res) {
    console.log("request index")

    //consultar dados na tabela
    db.all(`SELECT * FROM ideas`, function(err, rows) {
        if (err) {
            console.log(err)
            return res.send("Erro no banco de dados")
        }

        const reverseIdeas = [...rows].reverse()

        let lastIdeas = []
        for (let idea of reverseIdeas){
            if (lastIdeas.length < 2){
                lastIdeas.push(idea)
            }
        }

        return res.render("index.html", {ideas: lastIdeas})
    })

})

server.get("/ideias", function(req, res) {
    console.log("request ideias")

    db.all(`SELECT * FROM ideas`, function(err, rows) {
        if (err) {
            console.log(err)
            return res.send("Erro no banco de dados")
        }

        const reverseIdeas = [...rows].reverse()

        return res.render("ideias.html", {ideas: reverseIdeas})
    })
})


//ligar servidor na porta 3000
console.log("server open in port", port)
server.listen(port)