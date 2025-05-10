{
  //
  // utilities

  type Person = {
    name: string;
    age: number;
    email?: string;
    phone: number;
  };
  // Pick
  type NameAge = Pick<Person, "name" | "age">;
  //Omit
  type ContactNo = Omit<Person, "name" | "age">;

  // required
  type PersonRequired = Required<Person>;

  // pertial
  type PersonPertial = Partial<Person>;

  // readonly
  type PersonReadOnly = Readonly<Person>;
  const person2: PersonReadOnly = {
    name: "age",
    age: 20,
    phone: 12,
  };

  //   person2.name = "Mr. X"; can't write

  // Record
  //   type MyObj = {
  //     a: string;
  //     b: string;
  //   };
  type MyObj = Record<string, string>;
  const obj1: MyObj = {
    a: "a",
    b: "c",
    c: "aa",
  };

  const emptyObj: Record<string, unknown> = {};
}
