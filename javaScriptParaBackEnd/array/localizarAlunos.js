//Aqui nesse exemplo junto dois arrays em um só.
//Depois usa o INCLUIDES (retrona um booleano True ou False) para fazer uma busca pelo tipo de dados que no caso é o nome, 
//já o uso do INDEXOF, traz o indice onde o nome está no array
const alunos = ['Ricardo', 'Raquel', 'Bruno', 'Fernanda']
const mediaDosAlunos = [10,7,9,6]

let listaDeNotasEAlunos = [alunos, mediaDosAlunos]

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + ', sua media é ' +
        listaDeNotasEAlunos[1][indice]
    } else {
        return "Aluno não esta cadastrado"
    }
}

console.log(exibeNomeNota("Bruno"))