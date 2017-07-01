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

mauri.setTask('bootstrap modals/navbar/footer','FRONTEND');
mauri.setTask('angularJS modals/live search/api http request','FRONTEND');
mauri.setTask('browser console usage','FRONTEND');
mauri.setTask('HTML & CSS form/footer','FRONTEND');
mauri.setTask('django web server','BACKEND');
mauri.setTask('django admin shell','BACKEND');
mauri.setTask('django invitation mail','BACKEND');
mauri.setTask('django read & write file .csv','BACKEND');
mauri.setTask('flask blog CRUD','BACKEND');
// console.log(mauri.list_skills);
// console.log(mauri.list_tasks);



/*
###############
TELEGRAM BOT
###############
*/
report.onText(/\/start/, (msg,match) => {
    
    /*
    KEYBOARD
    */
    const  opts = {
      reply_to_message_id: msg.message_id,
      reply_markup: {
        resize_keyboard: true,
        one_time_keyboard: true,
        keyboard: [['/start'],['/topix','/attivita','/competenze','/colleghi'],['/supporto'],['/saluti']]
      }
    };



    //console.log(msg);
    //console.log(match);
    chat_id = msg.chat.id;

    var list_of_commands = [];

    for (elem in mauri.list_commands){
        list_of_commands.push(mauri.list_commands[elem].join(': '));
    }
    // console.log(list_of_commands)

    resp = list_of_commands.join('\n')
    report.sendMessage(chat_id, "###########################\n# INNANZITUTTO COSA E' UN BOT??#\n###########################\n\n'Un bot è un programma che mette in relazione il programma stesso ed un utente, la relazione con il programma avviene del tutto automaticamente attraverso delle risposte precofenzionate dal programmatore attivate tramite appositi comandi..'\n ________________________________________________________________\n\nISTRUZIONI:\n'usa i seguenti comandi per scoprire l'esperienza di stage'\n\n"+resp,opts);


    attempts += 1;
    console.log(attempts);

});

report.onText(/\/attivita/, (msg,match) => {

    chat_id = msg.chat.id;
    resp = mauri.get_all_tasks(mauri.list_tasks);


    report.sendMessage(chat_id, 'ATTIVITA\':\n- '+resp,opts);

    attempts += 1;
    console.log(attempts);
});

report.onText(/\/competenze/, (msg,match) => {

    chat_id = msg.chat.id;
    resp = mauri.get_all_skills(mauri.list_skills);

    report.sendMessage(chat_id, 'Le mie attuali competenze:\n- '+resp,opts);


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

    report.sendMessage(chat_id, 'I miei colleghi:\n- '+resp.join('\n- ',opts));


    attempts += 1;
    console.log(attempts);
});

report.onText(/\/topix/, (msg,match) => {

    chat_id = msg.chat.id;
    list_difficulties = [
        '"ho avuto alcuni problemi quando dovevo cambiare progetto su cui lavorare, saltare da un progetto ad un altro è stato difficile per me."',
        '"all\'inizio dell\'esperienza di stage in Top-IX mi sono sentito molto inutile poichè il loro livello era troppo elevato"',
    ];
    list_pro = [
    '"Affiancamento efficace rivolto all\'acquisizione di competenze spendibili in questo mercato del lavoro."',
    '"Un vincente approccio informale all\'interno di un contesto professionale puntando su di un supporto vicendevole alla programmazione del codice piuttosto che ad una malsana competizione."',
    ];

    //resp.join('\n- ')
    
    resp = {
      'contro': list_difficulties.join('\n- '),
      'pro':list_pro.join('\n- ')
    };
    var keys = Object.keys(resp);
    console.log(keys);
    report.sendMessage(chat_id, 'Topix stage:\n\n- '+keys[0].toUpperCase()+':\n'+resp['contro']+'\n\n- '+keys[1].toUpperCase()+':\n'+resp['pro'],opts);


    attempts += 1;
    console.log(attempts);
});


report.onText(/\/supporto/,(msg, match)=>{
    //console.log(msg);
    //console.log(match);
    chat_id = msg.chat.id
    resp = 'ENGIM:\'aspetti negativi e positvi\'\n\n -) Preparazione generica alla programmazione\n\n +) Affiancamento e supporto su tutta la parte relativa alle competenze trasversali e di orientamento e di orientamento dell\'allievo\n\n +) Autore del primo inserimento lavorativo\n\n +) Attenzione alla persona';
    report.sendMessage(chat_id,resp, opts);
    
    });

report.onText(/\/saluti/,(msg)=>{
    chat_id = msg.chat.id;
    report.sendMessage(chat_id, "Grazie per l\'attenzione!!\n\nSviluppatore: "+ mauri.get_fullname()+"\n\n\nSeguimi su GitHub\n @ "+ mauri.github);

    attempts += 1
    console.log(attempts);

});
