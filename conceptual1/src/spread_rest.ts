{
  const user = {
    name: "Toufiq",
    age: 26,
  };

  const user2 = { ...user, address: "Khowaznagar" };
  console.log(user2);

  const { name } = user2;
  console.log(name);

  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
  const number2: number[] = [0, ...numbers];
  console.log(number2);

  //rest operator
  function restTest(...num: number[]): void {
    console.log(num);
  }
  restTest(1, 2, 4, 7);
}
