const Mauri = require('./models.js');
const TelegramBot = require('node-telegram-bot-api');
const token = '348759595:AAH6FmWnHHCISn8J7pcm7BSQov6lJbR_G2k';
const report = new TelegramBot(token, {polling: true});


var attempts = 0;
console.log('Bot Running..');
console.log('Time users digit:');

/*
    #### MAURI SETTINGS ####
*/
var mauri = new Mauri('Maurizio','Bussi')
// console.log(mauri.list_commands);
mauri.setSkill('python');
mauri.setSkill('django | python');
mauri.setSkill('flask | python');
mauri.setSkill('javascript');
mauri.setSkill('jQuery | javascript');
mauri.setSkill('angularJS | javascript');
mauri.setSkill('bootstrap | html/css/javascript');
mauri.setSkill('git');
mauri.setSkill('bash scripting');
mauri.setSkill('command line interface');

mauri.setTask('bootstrap modals/navbar/footer','FE');
mauri.setTask('angularJS modals/live search/api http request','FE');
mauri.setTask('browser console usage','FE');
mauri.setTask('HTML & CSS form/footer','FE');
mauri.setTask('django web server','BE');
mauri.setTask('django admin shell','BE');
mauri.setTask('django invitation mail','BE');
mauri.setTask('django read & write file .csv','BE');
mauri.setTask('flask blog CRUD','BE');
// console.log(mauri.list_skills);
// console.log(mauri.list_tasks);




report.onText(/\/start/, (msg,match) => {
    // console.log(msg);
    // console.log(match);
    chat_id = msg.chat.id;

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
    resp = mauri.get_all_tasks(mauri.list_tasks);


    report.sendMessage(chat_id, 'TASK:\n- '+resp);

    attempts += 1;
    console.log(attempts);
});

report.onText(/\/skills/, (msg,match) => {

    chat_id = msg.chat.id;
    resp = mauri.get_all_skills(mauri.list_skills);

    report.sendMessage(chat_id, 'MY CURRENT SKILLS:\n- '+resp);


    attempts += 1;
    console.log(attempts);
});

report.onText(/\/collegues/, (msg,match) => {

    chat_id = msg.chat.id;
    resp = [
        'Visual Designer',
        'Network Engineer',
        'Developer & Designer',
        'Web Developer',
        'Full Stack IT Engineer',
        'Design Engineer',
    ];

    report.sendMessage(chat_id, 'MY COLLEGUES:\n- '+resp.join('\n- '));


    attempts += 1;
    console.log(attempts);
});

report.onText(/\/difficulties/, (msg,match) => {

    chat_id = msg.chat.id;
    resp = [
        '"some trouble when i have to switch between different projects, join trough different projects was difficult for me"',
        '"at the beginning of the internship of Top-IX I am really feeling useless and awkward"',
    ];

    report.sendMessage(chat_id, 'IN MY OPIONION I FOUND THESE ISSUES:\n\n- '+resp.join('\n\n- '));


    attempts += 1;
    console.log(attempts);
});

report.onText(/\/end/,(msg)=>{
    chat_id = msg.chat.id;
    report.sendMessage(chat_id, "Best regards!!\n\nDeveloper: "+ mauri.get_fullname()+"\n\n\nFollow me on GitHub\n @ "+ mauri.github);

    attempts += 1
    console.log(attempts);
    });
