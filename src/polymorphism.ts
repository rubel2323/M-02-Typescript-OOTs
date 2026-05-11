class Person {
  getSleep() {
    console.log('hi I am a simple and modest person');
  }
}

class student extends Person {
  getSleep() {
    console.log('Hello, this is the students world');
  }
}

class teacher extends Person {
  getSleep(): void {
    console.log('this is the teacher');
  }
}

const funcName = (param: Person) => {
  return param.getSleep();
};

const obj1 = new student();
const obj2 = new teacher();
const obj3 = new Person();

funcName(obj1);
funcName(obj2);
funcName(obj3);
