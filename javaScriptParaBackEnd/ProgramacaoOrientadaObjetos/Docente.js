import User from "./User.js";

export default class Docente extends User {
    constructor(nome, email, nascimento, role, ativo = true){
        super(nome, email, nascimento, role, ativo) //aqui estou pegando os dados de User, assim não preciso digitar tudo de novo
    }

    aprovaEstudante(estudante, curso){
        return `estudante ${estudante} aprovado no curso${curso}`
    }
}

//const novoDocente = new Docente ('Raquel', 'quel@email.com', '2000-04-18', 'docente')
// console.log(novoDocente)
// console.log(novoDocente.exibirInfos())
// console.log(novoDocente.aprovaEstudante('Fernanda', 'JS'))