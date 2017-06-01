var Mauri = function(name, surname){
    this.name = name;
    this.surname = surname;
    this.github = 'https://github.com/mauridb';

/*
    #### INIT LIST ####
*/
    this.list_commands = [
        ['/start','show the list of commands\n'],
        ['/tasks','show the list of tasks that i completed during this experience\n'],
        ['/skills','show a list of skills that i\'ve learnt in Top-IX\n'],
        ['/collegues','not who but which kind of collegues i met during the experience\n'],
        ['/problems','which problems do I found in Top-IX\n'],
        ['/end','my personal page of greetings\n'],
    ];
    this.list_tasks = [];
    this.list_skills = []

/*
    #### SETTER ####
*/




/*
    #### GETTER ####
*/
    this.get_fullname = function(){
        return this.name + " - " + this.surname;
    }

};
module.exports = Mauri;
