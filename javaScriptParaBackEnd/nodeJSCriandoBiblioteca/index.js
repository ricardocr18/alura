
import fs from 'fs'; //pega o arquivo 
import chalk from 'chalk'; //aqui faz mudar a cor da letra (fonte)

function tratarErro(erro){
    throw new Error(chalk.red(erro.code, 'não ha arquivo no diretório'))
}

function pegarArquivo(caminhoDoArquivo) {
    const encoding = "utf-8";
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
        if (erro) {
            tratarErro(erro)
        }
        console.log(chalk.green(texto))
    })
};

pegarArquivo('./arquivo/texto.md');
