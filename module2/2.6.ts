{
  // constraint
  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "RNext";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent<{
    name: string;
    email: string;
    devType: string;
    id: number;
  }>({
    id: 202,
    name: "MR. X",
    email: "x@gmail.com",
    devType: "next level developer",
  });
  const student2 = addCourseToStudent({
    id: 202,
    name: "MR. Y",
    email: "y@gmail.com",
    devType: "next level developer",
    hasWatch: "apple watch",
  });

  const student3 = addCourseToStudent({
    emni: "emni",
    id: 202,
    name: "salma",
    email: "salam@gmail.com",
  });
  // here in student3 we don't consider him as an student. so we need constraint of student where he should name and id include
}
