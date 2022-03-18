const livros = require('./listaLivros');

let maisBarato = 0;
for (let atual = 0; atual < livros.length; atual++){
    if (livros[atual] < livros[maisBarato]){
        maisBarato = atual;
    }
}

console.log(`o livro mais barato custa R$${livros[maisBarato].preco},00 chamado ${livros[maisBarato].titulo}`)