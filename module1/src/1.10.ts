{
  //
  // Union types |

  type FrontendDeveloper = "fakibaazDeveloper" | "juniorDeveloper";
  type FullStackDeveloper = "frontendDeveloper" | "expertDeveloper";
  const newDeveloper: FrontendDeveloper = "fakibaazDeveloper";
  type Developer = FrontendDeveloper | FullStackDeveloper;
  const newWebDeveloper: FrontendDeveloper = "juniorDeveloper";
  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "A+" | "B+" | "O+" | "AB+" | "O-";
    developer: Developer;
  };
  const user1: User = {
    name: "Akther",
    gender: "female",
    bloodGroup: "O-",
    developer: "frontendDeveloper",
  };

  type FrontEndDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };
  type BackEndDeveloper = {
    skilss: string[];
    designation2: "Backend Developer";
  };

  type FullStackWebDeveloper = FrontEndDeveloper & BackEndDeveloper;

  //   const full_StackDeveloper: FullStackWebDeveloper = {
  //     skills: ["HTML"],
  //     designation1: "Frontend Developer",
  //     designation2: "Backend Developer",
  //   };

  //
}
