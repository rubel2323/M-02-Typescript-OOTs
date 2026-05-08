type Alphanumeric = number | string;

const add = (num1: Alphanumeric, num2: Alphanumeric) => {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2;
  } else {
    return num1.toString() + num2.toString();
  }
};
add(2, 2);
add('3', 5);

console.log(add('3', 4));

type User1 = {
  id: number;
  name: string;
};

type User2 = {
  designation: string;
};

const address = (intro: User1 | User2) => {
  if ('designation' in intro) {
    return `(
      'You are designated as Assistant Engineer',
      ${intro.designation}
    )`;
  } else if ('name' in intro) {
    return `You are named as ${intro.name}`;
  } else {
    return `you are nothing`;
  }
};

const guestInfo = address({ id: 234, name: 'Rubel' });
console.log(guestInfo);
