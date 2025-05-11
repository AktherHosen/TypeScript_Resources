export interface Ilearner extends Iuser {
  attitude: "learning";
}

function fn(input: string | number | boolean | "osthir"): void {
  if (typeof input === "number") {
    console.log("narrow number", input * 2);
  } else if (typeof input === "string") {
    console.log(input.length);
  } else {
    console.log(1);
  }
}

console.log(fn("s"));

type Tuser = {
  name: string;
  age: number;
};
type Tlearner = {
  attitude: "learning";
};
interface Iuser {
  name: string;
  age: number;
}
type Tlerner = Tuser & Tlearner;

const newLearner: Ilearner = {
  name: "a",
  age: 20,
  attitude: "learning",
};

// generic
function identity<T>(value: T): T[] {
  return [value];
}

interface IYouLearner<T> extends Iuser {
  attitude: T;
}

const user24: IYouLearner<string> = {
  name: "akteh",
  age: 25,
  attitude: "Nolearning",
};

// constraint
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const name = getProperty(user24, "age");
console.log(typeof name);

// asynchronous ts
async function fetchUser(): Promise<string> {
  return "str";
}
// console.log(fetchUser());
fetchUser().then((user) => console.log(user));
