const produto = [
    {

        nome: "hamburguer radical",
        descricao: "pao, carne, queijo, molho radical",
        preco: 15
    },
    {

        nome: "batata radical",
        descricao: "batata, cedder, bacon",
        preco: 10
    },


];
for (let i =0; i <  produto.length; i++){
    
document.querySelector("main").innerHTML += `
<h2>${produto[i].nome}</h2>
<p>${produto[i].descricao}</p>
<p>R$ ${produto[i].preco}</p>
<button>"adicinar ao carrinho"</button>
`;


}























