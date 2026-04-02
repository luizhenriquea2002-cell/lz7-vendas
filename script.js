function comprar(jogo) {
  const mensagem = `Olá, quero comprar recarga de ${jogo}`;
  const telegram = "https://t.me/Lz7vendas";

  window.open(telegram + "?text=" + encodeURIComponent(mensagem));
}
