{
  type TNickname = "Muskil Asan" | "Ural ponkhi" | "Porua";

  const bondhu: TNickname = "Porua";

  type A = { bondhu: "Upokari" };
  type B = { sotru: number };

  type AB = A & B;

  const robot: AB = {
    bondhu: "Upokari",
    sotru: 2,
  };

  if (true) {
    console.log("first");
  } else {
    console.log("No second");
  }
  //   let age;
  //   age = 21;
  //   const status = age >= 18 ? "voter" : "underage";
  //   console.log(status);

  //   if (typeof age == "number") {
  //     type voter = number;
  //   }
  let age = "test";
  type VoterType = typeof age extends "number" ? number : string;

  type TUser = {
    name: string;
    age: number;
    address: {
      country: string;
      city: string;
    };
  };
  const user = {
    name: "jekono",
    age: 201,
    address: {
      country: "BBD",
      city: "Dhaka",
    },
  };
  console.log(user?.address?.city);

  const input = null;
  const unserInput = input ?? "Guest Major. L";

  function crash(): never {
    throw new Error("Something went wrong!");
  }
  //   crash();

  let nm: unknown = "Tanjir";
  (nm as string).length;
  
}
