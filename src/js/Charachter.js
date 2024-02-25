export default class Charachter {
    constructor(name){
        try{
            if(name.length < 2)throw new Error("Имя персонажа слишком короткое!");
            if(name.length > 10) throw new Error("Имя персонажа слишком длинное!");
            this.name = name;
            this.health = 100;
            this.level = 1;
            this.type = null;
            this.attack = null;
            this.defence = null;
        } catch(e) {
            return e;
        }
    }
}

