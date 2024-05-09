import Charachter from "./Charachter";

export default class Bowerman extends Charachter {
  constructor(name){
    super(name, "Bowerman");
    this.attack = 25;
    this.defence = 25;
  }
}
