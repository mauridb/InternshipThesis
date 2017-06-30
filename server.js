/*
####################
STATIC VARIABLES
####################
*/
const Mauri = require('./models.js');
const TelegramBot = require('node-telegram-bot-api');
const token = '348759595:AAH6FmWnHHCISn8J7pcm7BSQov6lJbR_G2k';
const report = new TelegramBot(token, {polling: true});


var attempts = 0;
console.log('Bot Running..');
console.log('Time users digit:');

/*
###################
 MAURI SETTINGS
###################
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
mauri.setSkill('Agile Development');

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



/*
###############
TELEGRAM BOT
###############
*/
report.onText(/\/start/, (msg,match) => {
    //console.log(msg);
    //console.log(match);
    chat_id = msg.chat.id;

    var list_of_commands = [];

    for (elem in mauri.list_commands){
        list_of_commands.push(mauri.list_commands[elem].join(': '));
    }
    // console.log(list_of_commands)

    resp = list_of_commands.join('\n')
    report.sendMessage(chat_id, "###########################\n# INNANZITUTTO COSA E' UN BOT??#\n###########################\n\n'Un bot è un programma che mette in relazione il programma stesso ed un utente, la relazione con il programma avviene del tutto automaticamente attraverso delle risposte precofenzionate dal programmatore attivate tramite appositi comandi..'\n ________________________________________________________________\n\nISTRUZIONI:'usa i seguenti comandi per scoprire l'esperienza di stage'\n\n"+resp);


    attempts += 1;
    console.log(attempts);
});

report.onText(/\/attivita/, (msg,match) => {

    chat_id = msg.chat.id;
    resp = mauri.get_all_tasks(mauri.list_tasks);


    report.sendMessage(chat_id, 'ATTIVITA\':\n- '+resp);

    attempts += 1;
    console.log(attempts);
});

report.onText(/\/competenze/, (msg,match) => {

    chat_id = msg.chat.id;
    resp = mauri.get_all_skills(mauri.list_skills);

    report.sendMessage(chat_id, 'Le mie attuali competenze:\n- '+resp);


    attempts += 1;
    console.log(attempts);
});

report.onText(/\/colleghi/, (msg,match) => {

    chat_id = msg.chat.id;
    resp = [
        'Visual Designer',
        'Network Engineer',
        'Developer & Designer',
        'Web Developer',
        'Full Stack IT Engineer',
        'Design Engineer',
    ];

    report.sendMessage(chat_id, 'I miei colleghi:\n- '+resp.join('\n- '));


    attempts += 1;
    console.log(attempts);
});

report.onText(/\/topix/, (msg,match) => {

    chat_id = msg.chat.id;
    list_difficulties = [
        '"ho avuto alcuni problemi quando dovevo cambiare progetto su cui lavorare, saltare da un progetto ad un altro è stato difficile per me."',
        '"all\'inizio dell\'esperienza di stage in Top-IX mi sono sentito molto inutile poichè il loro livello era troppo elevato"',
    ];

    //resp.join('\n- ')
    
    resp = {
      'contro': list_difficulties.join('\n- '),
      'pro':'ciao pro',
    };
    var keys = Object.keys(resp);
    console.log(keys);
    report.sendMessage(chat_id, 'Topix stage:\n\n-'+keys[1].toUpperCase()+':\n'+resp['contro']+'\n\n-'+keys[0].toUpperCase());


    attempts += 1;
    console.log(attempts);
});

report.onText(/\/fine/,(msg)=>{
    chat_id = msg.chat.id;
    report.sendMessage(chat_id, "I miei migliori saluti!!\n\nSviluppatore: "+ mauri.get_fullname()+"\n\n\nSeguimi su GitHub\n @ "+ mauri.github);

    attempts += 1
    console.log(attempts);
    });
