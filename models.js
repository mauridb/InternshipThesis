var Mauri = function(name, surname){
    this.name = name;
    this.surname = surname;
    this.github = 'https://github.com/mauridb';

/*
    #### INIT LIST ####
*/
    this.list_commands = [
        ['/start','mostra la lista di comandi\n'],
        ['/topix','l\'azienda che mi ha ospitato\n'],
        ['/attivita','mostra la lista di attività che ho completato durante l\'esperienza.\n'],
        ['/competenze','mostra la lista di competenze acquisite in Top-IX\n'],
        ['/colleghi','il ruolo impiegato dai colleghi\n'],
        ['/supporto','il supporto di Engim Artigianelli\n'],
        ['/fine','saluti finali\n'],
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
        if (this.list_tasks.indexOf(type + ' | ' + task) >=0 && (type == 'FRONTEND' || type == 'BACKEND')) {
            console.log('already push '+ task +'task');
        }else if (this.list_tasks.indexOf(task) == -1 && (type == 'FRONTEND' || type == 'BACKEND')) {
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
