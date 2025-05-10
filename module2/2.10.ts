{
  //
  //mapped
  const arrOfNumbers: number[] = [1, 2, 3, 4];
  const arrOfStrings: string[] = arrOfNumbers.map((number) =>
    number.toString()
  );
  console.log(arrOfStrings);

  type AreaNumber = {
    height: number;
    width: number;
  };

  //keyof
  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaString<{ height: string; width: number }> = {
    height: "100s",
    width: 50,
  };

  // loopup type
  type Height = AreaNumber["height"];
  //
}
