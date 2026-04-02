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
let carrinho = [];
let total = 0;

function adicionarCarrinho(nome, preco){
  carrinho.push({nome, preco});
  total += parseFloat(preco);

  atualizarCarrinho();
}

function atualizarCarrinho(){
  const lista = document.getElementById("listaCarrinho");
  lista.innerHTML = "";

  carrinho.forEach(item => {
    const li = document.createElement("li");
    li.innerText = `${item.nome} - R$${item.preco}`;
    lista.appendChild(li);
  });

  document.getElementById("total").innerText = "Total: R$ " + total.toFixed(2);
}

function finalizarCompra(){
  let msg = "🛒 Pedido:\n";

  carrinho.forEach(item => {
    msg += `${item.nome} - R$${item.preco}\n`;
  });

  msg += `\nTotal: R$${total.toFixed(2)}`;

  window.open("https://t.me/Lz7vendas?text=" + encodeURIComponent(msg));
}
function copiarPix(){
  const chave = document.getElementById("chavePix").innerText;

  navigator.clipboard.writeText(chave);

  alert("Chave PIX copiada!");
}
