{
  // NULLABLE type
  const searchName = (value: string | null) => {
    if (value) {
      console.log("searching......");
    } else {
      console.log("there is nothing to search...");
    }
  };

  searchName(null);

  // Unkown type
  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value == "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed}ms/1`);
    }
    if (typeof value == "string") {
      const [result, init] = value.split(" ");
      const convertedSpeed = (parseFloat(result) * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed}${init}`);
      console.log(result);
    } else {
      console.log("Wrong Input.....");
    }
  };
  getSpeedInMeterPerSecond(1000);
  getSpeedInMeterPerSecond(`1000 kmh/1`);

  // never  karon error jiboneo type set korbena tai amra never use korte pari
  const throwError = (msg: string): never => {
    throw new Error(msg);
  };

  throwError("Arrey Baba error hogeya");
}
