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
        ['/difficulties','which problems do I found in Top-IX\n'],
        ['/end','my personal page of greetings\n'],
    ];
    this.list_tasks = [];
    this.list_skills = []

/*
    #### SETTER ####
*/
    this.setSkill = function(nameofskill){
        if (this.list_skills.indexOf(nameofskill) >= 0){
            console.log('you have already push '+ nameofskill +' skill');
        }else {
            this.list_skills.push(nameofskill);
            // console.log('Skill '+nameofskill+' inserted!');
        };
    };

/*
    #### GETTER ####
*/
    this.get_fullname = function(){
        return this.name + " - " + this.surname;
    }

    this.get_all_skills = function(list){
        return list.join('\n- ');
    }

};
module.exports = Mauri;
