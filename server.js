const TelegramBot = require('node-telegram-bot-api');
const token = '348759595:AAH6FmWnHHCISn8J7pcm7BSQov6lJbR_G2k';
const report = new TelegramBot(token, {polling: true});

console.log('Bot Running..');
report.onText(/\/start/, (msg,match) => {
    console.log(msg)
    console.log(match)
});
