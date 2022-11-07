//aqui vai fazer o nosso caminho com o arquivo que tem o texto.md que estamos usando para teste
import chalk from 'chalk'
import { Console } from 'console'
import fs from 'fs'
import pegarArquivo from "./index.js"
import listaValidada from './http-validacao.js'

const caminho = process.argv
// console.log(caminho)Aqui vejo tudo que o process.argv me retorna

function imprimeLista(valida, resultado, identificador =''){
    if (valida){
        console.log(
            chalk.yellow('lista validada'),
            chalk.black.bgGreen(identificador),
            listaValidada(resultado))
    } else {
        console.log(
            chalk.yellow('lista de inks'),
            chalk.black.bgGreen(identificador),
            resultado)
    }  
}

async function processaTexto(argumentos) {
    const caminho = argumentos[2];
    const valida = argumentos[3] === '---valida';

    try {
        fs.lstatSync(caminho)
    } catch (erro) {
        if (erro.code === 'ENOENT') {
            console.log('arquivo ou diretorio não encontrado')
            return
        }
    }

    if (fs.lstatSync(caminho).isFile()){
        const resultado = await pegarArquivo(argumentos[2])
        imprimeLista(valida, resultado)
    } else if (fs.lstatSync(caminho).isDirectory()){
        const arquivos = await fs.promises.readdir(caminho)
        arquivos.forEach(async (nomeDeArquivo) =>{
            const lista = await pegarArquivo(`${caminho}/${nomeDeArquivo}`)
            imprimeLista(valida, lista, nomeDeArquivo)
        })        
    }    
}

processaTexto(caminho)
