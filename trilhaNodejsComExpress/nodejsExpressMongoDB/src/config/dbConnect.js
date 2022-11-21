import mongoose from "mongoose"

// mongoose.connect('mongodb+srv://alura:Hipopotamo@cluster0.ezmqkff.mongodb.net/alura-node.livros'); Esse não deu certo
//mongoose.connect("mongodb+srv://alura:<password>@cluster0.s6udc9a.mongodb.net/?retryWrites=true&w=majority")
mongoose.connect("mongodb+srv://alura:ricardoribeiro@cluster0.s6udc9a.mongodb.net/?retryWrites=true&w=majority")

let db = mongoose.connection;
export default db;