export default class Charachter {
    constructor(name, type){
        if(name.length < 2){
            throw new Error("Имя персонажа слишком короткое!");
        }
        if(name.length > 10) {
            throw new Error("Имя персонажа слишком длинное!");
        }
        if(!["Bowerman", "Daemon", "Magician", "Swordsman", "Undead", "Zombie"].includes(type)){
            throw new Error("Недопустимый тип персонажа!");
        }
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = null;
        this.defence = null;
    }
}

