const livros = require('./listaLivros');
const troca = require('./funcaoTroca');

function insertionSort(lista) {

    for (let atual = 0; atual < lista.length; atual++) {
        let analise = atual;
        while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
            troca(lista, analise);

            //condição para parada do while
            analise--
        }
    }

    console.log(lista)
}

insertionSort(livros);
