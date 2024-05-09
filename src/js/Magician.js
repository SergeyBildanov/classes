import Charachter from "./Charachter";

export default class Magician extends Charachter {
  constructor(name){
    super(name, "Magician");
    this.attack = 10;
    this.defence = 40;
  }
}