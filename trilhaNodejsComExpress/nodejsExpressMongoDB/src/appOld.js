//Aqui tenho todas as Rotas o CRUD num mesmo arquivo, até o meu Banco de dados está aqui o Array livro :)
//Aqui uso o postman só com esse arquivo, preciso só da biblioteca Express
import express from "express";

const app = express();
app.use(express.json())

const livros = [
    {id: 1, 'titulo': 'Senhor dos Aneis'},
    {id: 2, 'titulo': 'O Hobiit'}
]

app.get('/', (req, res) => {
    res.status(200).send('Curso de NodeJS');
})

app.get('/livros', (req, res) => {
    res.status(200).json(livros)
})

app.get('/livros/:id', (req, res) =>{
    let index = buscaLivro(req.params.id);   
    res.json(livros[index])
})

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livros foi cadastrado com sucesso')
})

app.put('/livros/:id', (req, res) =>{
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros)
})

//essa função está sendo usada pelo PUT e DELETE
function buscaLivro(id) {
    return livros.findIndex(livros => livros.id == id)
}

app.delete('/livros/:id', (req, res) =>{
    let {id} = req.params;
    let index = buscaLivro(id);
    livros.splice(index, 1);
    res.send(`Livros ${id} removido com sucesso`)    
})

export default app