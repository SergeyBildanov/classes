import Charachter from "./Charachter";

export default class Undead extends Charachter {
  constructor(name){
    super(name, "Undead");
    this.attack = 25;
    this.defence = 25;
  }
}