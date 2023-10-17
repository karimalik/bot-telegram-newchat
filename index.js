const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_TOKEN' with the token you obtained from BotFather.
const token = '6436875390:AAEEXCifPQt4DHTwTXjeuwu84NjFZ6SSJvs';

// Initialize the bot with your token.
const bot = new TelegramBot(token, { polling: true });

// Listen for 'new_chat_members' events.
bot.on('new_chat_members', (msg) => {
    const chatId = msg.chat.id;
    const newMembers = msg.new_chat_members;

    newMembers.forEach((member) => {
        bot.sendMessage(chatId, `Welcome, ${member.first_name}!`);
    });
});

// Listen for text messages.
bot.on('text', (msg) => {
    const chatId = msg.chat.id;
    const message = msg.text;

    if (message === '/start') {
        bot.sendMessage(chatId, 'Hello! I am your welcome bot.');
    }
});

console.log('Bot now running...');