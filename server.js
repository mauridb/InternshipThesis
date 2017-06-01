const Mauri = require('./models.js');
const TelegramBot = require('node-telegram-bot-api');
const token = '348759595:AAH6FmWnHHCISn8J7pcm7BSQov6lJbR_G2k';
const report = new TelegramBot(token, {polling: true});


var mauri = new Mauri('Maurizio','Bussi')
// console.log(mauri.list_commands);



var attempts = 0;
console.log('Bot Running..');
console.log('Time users digit:');



report.onText(/\/start/, (msg,match) => {
    // console.log(msg);
    // console.log(match);
    chat_id = msg.chat.id;
    resp = 'ciao';

    var list_of_commands = [];

    for (elem in mauri.list_commands){
        list_of_commands.push(mauri.list_commands[elem].join(': '));
    }
    // console.log(list_of_commands)

    resp = list_of_commands.join('\n')
    report.sendMessage(chat_id, "ISTRUCTIONS:\nFollow these commands to navigate inside the application..\n __________________________________\n \n"+resp);


    attempts += 1;
    console.log(attempts);
});

report.onText(/\/tasks/, (msg,match) => {

    chat_id = msg.chat.id;
    resp = "tasks";

    report.sendMessage(chat_id, resp);


    attempts += 1;
    console.log(attempts);
});

report.onText(/\/end/,(msg)=>{
    chat_id = msg.chat.id;
    report.sendMessage(chat_id, "Best regards!!\n\nDeveloper: "+ mauri.get_fullname()+"\n\n\nFollow me on GitHub\n @ "+ mauri.github);

    attempts += 1
    console.log(attempts);
    });
