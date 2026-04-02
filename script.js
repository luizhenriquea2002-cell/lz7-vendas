function comprar(jogo) {
  const mensagem = `Olá, quero comprar recarga de ${jogo}`;
  const telegram = "https://t.me/Lz7vendas";

  window.open(telegram + "?text=" + encodeURIComponent(mensagem));
}
function ir(jogo){
  window.location.href = `produto.html?jogo=${jogo}`;
}
let produtoAtual = "";
let precoAtual = "";

function abrirModal(nome, preco){
  produtoAtual = nome;
  precoAtual = preco;

  document.getElementById("produtoNome").innerText = nome;
  document.getElementById("produtoPreco").innerText = "R$ " + preco;

  document.getElementById("modal").style.display = "flex";
}

function fecharModal(){
  document.getElementById("modal").style.display = "none";
}

function finalizarCompra(){
  const msg = `Quero comprar ${produtoAtual} por R$${precoAtual}`;
  window.open("https://t.me/Lz7vendas?text=" + encodeURIComponent(msg));
}
