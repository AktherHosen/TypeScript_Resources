{
  // type alias

  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };
  const student1: Student = {
    name: "akther",
    age: 25,
    gender: "male",
    contactNo: "01610945101",
    address: "ctg",
  };

  const student2: Student = {
    name: "mir",
    age: 24,
    gender: "male",
    address: "chowaznagar",
  };

  const student3: Student = {
    name: "mira",
    age: 21,
    gender: "female",
    address: "chowagara",
  };

  type UserName = string;
  type IsAdmin = boolean;

  const userName: UserName = "akther";
  const isAdmin: IsAdmin = true;

  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;
  //
}
