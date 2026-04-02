const TelegramBot = require('node-telegram-bot-api');

const token = '8767463787:AAGvI89b_Pu8VDPC_UMd5e-p6-L_kL_mNys;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, `
🎮 Bem-vindo à LZ7 Vendas Gamer

Escolha um jogo:
1️⃣ Roblox
2️⃣ Free Fire
3️⃣ Mobile Legends
4️⃣ IMVU
  `);
});

bot.on('message', (msg) => {
  const text = msg.text;

  if(text === "1"){
    bot.sendMessage(msg.chat.id, `
💰 Roblox:

1200 Robux - R$18,90
1700 Robux - R$22,99

💳 PIX:
08584531181

Envie comprovante ✅
    `);
  }

  if(text === "2"){
    bot.sendMessage(msg.chat.id, "Free Fire em breve 🔥");
  }

  if(text === "3"){
    bot.sendMessage(msg.chat.id, "Mobile Legends em breve ⚔️");
  }

  if(text === "4"){
    bot.sendMessage(msg.chat.id, "IMVU em breve 💎");
  }
});
