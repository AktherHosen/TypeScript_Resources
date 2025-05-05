{
  // Generic types
  // reusable dynamic generic type
  type GenericArray<t> = Array<t>;
  //   const rollNumbers: number[] = [1, 2, 3, 4];
  //   const rollNumbers: Array<number> = [1, 2, 3, 4];
  const rollNumbers: GenericArray<number> = [1, 2, 3, 4];

  //   const nammes: string[] = ["A", "B", "C"];
  //   const nammes: Array<string> = ["A", "B", "C"];
  const nammes: GenericArray<string> = ["A", "B", "C"];

  //   const bool: boolean[] = [true, false];
  //   const bool: Array<boolean> = [true, false];
  const bool: GenericArray<boolean> = [true, false];

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "Akther",
      age: 110,
    },
    {
      name: "Home",
      age: 11,
    },
  ];

  // Generic Tuple
  type GenericTuple<X, Y> = [X, Y];
  const manush: GenericTuple<string, string> = ["Mr. X", "Mrs. Y"];
  const userWithID: GenericTuple<number, { name: string; email: string }> = [
    12,
    {
      name: "akther",
      email: "dev@gmail.com",
    },
  ];
  //   if there is too much properties in an object we can use interface or type of Objects to simplify it
  interface User {
    name: string;
    email: string;
  }
  type User1 = {
    name: string;
    email: string;
  };
  const userWithID2: GenericTuple<number, User> = [
    12,
    {
      name: "akther",
      email: "dev@gmail.com",
    },
  ];
}
