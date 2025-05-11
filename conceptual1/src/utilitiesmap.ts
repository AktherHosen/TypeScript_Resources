import { Ilearner } from "./second_half";

{
  // utilities map conditional
  type result<T> = {
    [J in keyof T]: boolean;
  };

  const res: result<Ilearner> = {
    name: true,
    age: true,
    attitude: true,
  };
}
