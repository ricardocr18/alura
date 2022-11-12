import User from "./User.js";

//a utilização do EXTENDS informar que estou usando o conteudo de User que está em outro arquivo para criar o dados do Administrador
export default class Admin extends User {
    constructor(nome, email, nascimento, role, ativo = true){
        super(nome, email, nascimento, role, ativo) //aqui estou pegando os dados de User, assim não preciso digitar tudo de novo
    }

    exibirInfos(){
        return `${this.nome}, ${this.role}, ${this.ativo}`
    }

    criarCursos(nomeDoCurso, vagas) {
        return `Curso do ${nomeDoCurso} criado com ${vagas} vagas}`
    }
}

//const novoAdmin = new Admin("Didi", 'didi@email.com', '2002-2-2')
//console.log(novoAdmin.criarCursos('JS', 30))