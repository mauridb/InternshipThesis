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
##############
SETTER
##############
*/
    this.setSkill = function(nameofskill){
        if (this.list_skills.indexOf(nameofskill) >= 0){
            console.log('you have already push '+ nameofskill +' skill');
        }else {
            this.list_skills.push(nameofskill);
            // console.log('Skill '+nameofskill+' inserted!');
        };
    };

    this.setTask = function(task, type){
        if (this.list_tasks.indexOf(type + ' | ' + task) >=0 && (type == 'FE' || type == 'BE')) {
            console.log('already push '+ task +'task');
        }else if (this.list_tasks.indexOf(task) == -1 && (type == 'FE' || type == 'BE')) {
            elem = type + ' | ' + task;
            this.list_tasks.push(elem);
        }
    }

/*
##############
GETTER
##############
*/
    this.get_fullname = function(){
        return this.name + " - " + this.surname;
    }

    this.get_all_skills = function(list){
        return list.join('\n- ');
    }

    this.get_all_tasks = function(list){
        return list.join('\n- ');
    }

};
module.exports = Mauri;
