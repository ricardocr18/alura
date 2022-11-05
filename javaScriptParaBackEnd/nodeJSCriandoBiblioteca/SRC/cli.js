//aqui vai fazer o nosso caminho com o arquivo que tem o texto.md que estamos usando para teste
import chalk from 'chalk'
import fs from 'fs'
import pegarArquivo from "./index.js"

const caminho = process.argv
// console.log(caminho)Aqui vejo tudo que o process.argv me retorna

function imprimeLista(resultado){
    console.log(chalk.yellow('lista de inks'), resultado)
}

async function processaTexto(argumentos) {
    const caminho = argumentos[2]
    if (fs.lstatSync(caminho).isFile()){
        const resultado = await pegarArquivo(argumentos[2])
        imprimeLista(resultado)
    } else if (fs.lstatSync(caminho).isDirectory()){
        const arquivos = await fs.promises.readdir(caminho)
        arquivos.forEach(async (nomeDeArquivo) =>{
            const lista = await pegarArquivo(`${caminho}/${nomeDeArquivo}`)
            imprimeLista(lista)
        })        
    }    
}

processaTexto(caminho)
