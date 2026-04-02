// 🔗 Redirecionar para Telegram direto
function comprar(jogo) {
  const mensagem = `Olá, quero comprar recarga de ${jogo}`;
  window.open("https://t.me/Lz7vendas?text=" + encodeURIComponent(mensagem));
}

// 🔗 Ir para página de produto (se usar)
function ir(jogo){
  window.location.href = `produto.html?jogo=${jogo}`;
}

// 🧠 Controle de produto (modal)
let produtoAtual = "";
let precoAtual = "";

// 🪟 Abrir modal
function abrirModal(nome, preco){
  produtoAtual = nome;
  precoAtual = preco;

  document.getElementById("produtoNome").innerText = nome;
  document.getElementById("produtoPreco").innerText = "R$ " + preco;

  document.getElementById("modal").style.display = "flex";
}

// ❌ Fechar modal
function fecharModal(){
  document.getElementById("modal").style.display = "none";
}

// 🛒 Carrinho
let carrinho = [];
let total = 0;

// ➕ Adicionar ao carrinho
function adicionarCarrinho(nome, preco){
  carrinho.push({nome, preco});
  total += parseFloat(preco);

  atualizarCarrinho();
}

// 🔄 Atualizar carrinho na tela
function atualizarCarrinho(){
  const lista = document.getElementById("listaCarrinho");

  // evita erro se carrinho não existir na página
  if(!lista) return;

  lista.innerHTML = "";

  carrinho.forEach(item => {
    const li = document.createElement("li");
    li.innerText = `${item.nome} - R$${item.preco}`;
    lista.appendChild(li);
  });

  const totalEl = document.getElementById("total");
  if(totalEl){
    totalEl.innerText = "Total: R$ " + total.toFixed(2);
  }
}

// 💳 Finalizar compra (funciona com ou sem carrinho)
function finalizarCompra(){

  let msg = "";

  if(carrinho.length > 0){
    msg = "🛒 Pedido:\n";

    carrinho.forEach(item => {
      msg += `${item.nome} - R$${item.preco}\n`;
    });

    msg += `\nTotal: R$${total.toFixed(2)}`;
  } else {
    msg = `Quero comprar ${produtoAtual} por R$${precoAtual}`;
  }

  window.open("https://t.me/Lz7vendas?text=" + encodeURIComponent(msg));
}

// 📋 Copiar chave PIX
function copiarPix(){
  const chave = document.getElementById("chavePix");

  if(!chave) return;

  navigator.clipboard.writeText(chave.innerText);
  alert("Chave PIX copiada!");
}
