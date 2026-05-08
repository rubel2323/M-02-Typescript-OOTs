class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getSleep(numOfHours: number) {
    return `You are taking sleep for ${numOfHours} hours`;
  }
}

class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }

  takeClass(numOfHours: number) {
    return `this ${this.name} takes class everday for ${numOfHours} hours`;
  }
}

class Students extends Person {
  constructor(name: string) {
    super(name);
  }

  doClass(numOfHours: number) {
    return ` ${this.name} do ${numOfHours} hours class`;
  }
}
//function guard

const getUserInfo = (user: Person) => {
  if (user instanceof Teacher) {
    return user.takeClass(3);
  } else if (user instanceof Students) {
    return user.doClass(6);
  } else {
    return user.getSleep(8);
  }
};

const student = new Students('Mr.Student');
const teacher = new Teacher('Mr. Teacher');
const person = new Person('Mr. Person');

console.log(getUserInfo(student));
console.log(getUserInfo(teacher));
console.log(getUserInfo(person));
