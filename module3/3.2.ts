{
  //inheritence

  // we see common property and method in both class, so we can combined both in single class
  // in child i have to call super with parameter to pass
  class Person {
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numberOfHours: number) {
      console.log(`${this.name} will sleep for ${numberOfHours}`);
    }
  }
  class Teacher extends Person {
    designation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    takeClass(numberOfClass: number) {
      console.log(`${this.name} will sleep for ${numberOfClass}`);
    }
  }
  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  const student1 = new Student("Mr. Akther", 25, "Khowaznagar");
  const teacher1 = new Teacher("Mr. Teacher", 40, "Canada", "Professor");
  console.log(student1);
  console.log(teacher1);
}
