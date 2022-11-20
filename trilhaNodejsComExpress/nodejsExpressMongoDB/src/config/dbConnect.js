import mongoose from "mongoose"

mongoose.connect('mongodb+srv://alura:Hip0potam0@cluster0.ezmqkff.mongodb.net/alura-node.livros');

let db = mongoose.connection;
export default db;