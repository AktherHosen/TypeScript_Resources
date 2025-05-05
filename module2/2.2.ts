{
  //interface vs type
  type User1 = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string;
    age: number;
  }

  type rollNumber = number;

  type UserWithRoll1 = User1 & { roll: string };

  const user1: UserWithRoll1 = {
    name: "A",
    age: 20,
    roll: "20",
  };

  interface UserWithRoll2 extends User2 {
    roll: number;
  }
  const user2: UserWithRoll2 = {
    name: "A",
    age: 20,
    roll: 20,
  };

  //   const user1: User2 = {
  //     name: "A",
  //     age: 20,
  //   };

  type Roll = number[];
  interface Roll2 {
    [index: number]: number;
  }
  const rollNumber1: Roll = [1, 2, 3];

  type Add = (num1: number, num2: number) => number;
  interface Add2 {
    (num1: number, num2: number): number;
  }
  const add1: Add = (num1, num2) => num1 + num2;
  const add2: Add2 = (num1, num2) => num1 + num2;
}
