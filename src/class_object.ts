// class Prani{
// name:string;
//  sound:string;
// divion:string;

// constructor(name:string,sound:string,divion:string){
//     this.name=name;
//     this.sound=sound;
//     this.divion=divion;

// }

// now doing by parameter assign and declaration

class Prani {
  constructor(
    public name: string,
    public sound: string,
    public division: string
  ) {}

  makeSound() {
    console.log(`${this.name} is making ${this.sound}`);
  }
}

const dog = new Prani('kutti', 'ghew ghew', 'vodro');
dog.makeSound();
console.log(dog.name);
console.log(dog.division);
