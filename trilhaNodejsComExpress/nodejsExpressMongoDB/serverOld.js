//esse arquivo descreve como ter a resposta pelo HTTP

const http = require ('http')
const port = 3000; 

const rotas = {
    '/': 'Cursos de Node',
    '/livros': 'Entrei na pag de livros',
    '/autores': 'Listem de autores',
    '/sobre': 'Informações sobre a livraria'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(rotas[req.url])
})

server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})