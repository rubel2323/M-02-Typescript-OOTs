class Parent {
  name: string;
  age: string;
  address: string;

  constructor(name: string, age: string, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
}

class A extends Parent {
  studyHours: number;
  constructor(name: string, age: string, address: string, studyHours: number) {
    super(name, age, address);
    this.studyHours = studyHours;
  }
  makeDaily() {
    console.log(`${this.name} is reading for ${this.studyHours} hours`);
  }
}

const object_A = new A('xianhu', '35', 'china', 8);
console.log(object_A.address);
console.log(object_A.name);
console.log(object_A.age);
object_A.makeDaily();
