{
  // type assertion
  let anything: any;
  anything = "Bangladesh";
  anything = 222;
  //   anything as string;
  //   anything as number;

  const KGtoGram = (value: string | number): string | number | undefined => {
    if (typeof (value === "string")) {
      const convertedValue = parseFloat(value) * 1000;
      return `The converted value is ${convertedValue}`;
    }
    if (typeof (value === "number")) {
      return value * 1000;
    }
  };

  const result1 = KGtoGram(22) as number;
  const result2 = KGtoGram("22") as string;

  type CustomError = {
    message: string;
  };
  try {
  } catch (err) {
    console.log((err as CustomError).message);
  }
}
