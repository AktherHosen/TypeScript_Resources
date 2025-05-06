{
  // function with generics
  const createArray = (param: string): string[] => {
    return [param];
  };
  const res1 = createArray("Bangladesh");

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };
  const resGeneric = createArrayWithGeneric<boolean>(true);

  type User = {
    id: number;
    name: string;
  };
  const resGenericObj = createArrayWithGeneric<User>({ id: 22, name: "MR. X" });

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };
  const res10 = createArrayWithTuple<string, string>("Bangladesh", "222");
  const res11 = createArrayWithTuple<string, { name: string }>("Banladesh", {
    name: "asia",
  });

  const addCourseToStudent = <T>(student: T) => {
    const course = "RNext";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "MR. X",
    email: "x@gmail.com",
    devType: "next level developer",
  });
  const student2 = addCourseToStudent({
    name: "MR. Y",
    email: "y@gmail.com",
    devType: "next level developer",
    hasWatch: "apple watch",
  });
}
