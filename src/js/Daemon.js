import Charachter from "./Charachter";

export default class Daemon extends Charachter {
  constructor(name){
    super(name, "Daemon");
    this.attack = 10;
    this.defence = 40;
  }
}