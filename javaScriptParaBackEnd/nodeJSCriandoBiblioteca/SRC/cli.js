//aqui vai fazer o nosso caminho com o arquivo que tem o texto.md que estamos usando para teste
import chalk from 'chalk'
import fs from 'fs'
import pegarArquivo from "./index.js"

const caminho = process.argv
// console.log(caminho)Aqui vejo tudo que o process.argv me retorna

async function processaTexto(caminho) {
    const resultado = await pegarArquivo(caminho[2])
    console.log(chalk.yellow('lista de links'), resultado)
}

processaTexto(caminho)
