import Admin from "./Admin.js";
import Docente from "./Docente.js";
import User from "./User.js";

// const novoUser = new User('Bruno', "bruno@email.com", '2016-04-18')
// console.log(novoUser.exibirInfos())

const novoAdmin = new Admin('Zenilda', 'zenilda@gmail', '1955-03-03')
console.log(novoAdmin.nome)
novoAdmin.nome = 'Jorge'
console.log(novoAdmin.nome)