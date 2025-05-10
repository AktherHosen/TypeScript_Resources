const str: string = "Bangladesh";

let anyVar = 1;

let arr: number[] = [1, 2, 3, 4, 5];

export type Tobj = {
  name: string;
  email: string;
  age: number;
  address: string;
  education: {
    uni_name: "university" | "college"; //string literal
    level: string;
  };
};
const obj: Tobj = {
  name: "Abir",
  email: "dev@gmail.com",
  age: 25,
  address: "LLC ",
  education: {
    uni_name: "university",
    level: "undergrad",
  },
};
