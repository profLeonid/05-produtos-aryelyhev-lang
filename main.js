'use strict'

function adicionarProduto(){
    //cria as variaveis que irão guardar os valores
    const lista = document.getElementById("lista")
    const produto = document.getElementById("produto")
    const codigo = document.getElementById("codigo")
    const quantia = document.getElementById("quantia")

    //função para guardar uma validação de escrita 
    const caixaLista = (valor) => { //o simbolo => transforma uma const em uma função anonima
                                    //tambem pode ser feito como uma function normalmente
                                    
        if (valor == "") return; //caso o campo esteja vazio, ele ignora a ação e permanece estatico

        const novaSpan = document.createElement("span") //cria uma nova variavel chamada novaSpan e uma caixa para guardar o valor
        novaSpan.textContent = valor //chama a variavel valor e adiciona ela a caixa
        novaSpan.className = "flex flex-now bg-blue-100 px-8 py-2" //customiza a caixa

        lista.appendChild(novaSpan) //chama o novaSpan e atribui os valores da lista 
                                    //exibe a caixa span com os valores atribuidos dentro dela
    }

        //chama as variaveis separadamente para cada input
        caixaLista(produto.value) //manda as variaveis uma de cada vez para serem validadas dentro do if
        caixaLista(codigo.value)  //caso o input esteja vazio, o programa não continua
        caixaLista(quantia.value) //caso o input esteja com um valor, ele cria uma caixa span e atribui o valor a essa caixa
 

    //limpa os campos sempre que o usuario clicar no botão adicionar
    //para que ele possa escrever tudo novamente sem precisar apagar o conteudo
    produto.value = ''
    codigo.value = ''
    quantia.value = ''
}