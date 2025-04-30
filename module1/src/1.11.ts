{
  // ternary operator || optional chaining || nullish coalescing operator
  const age: number = 15;
  if (age > 18) {
    console.log("adult");
  } else {
    console.log("Not adult");
  }

  const isAdult = age >= 18 ? "adult" : "not adult";
  console.log({ isAdult });

  // nullish coalescing operator
  /// if null / undefined --> decision making
  //   const isAuthenticated = null;
  const isAuthenticated = "";
  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";
  console.log({ result1 }, { result2 });

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentaddress: string;
      permanentaddesss?: string;
    };
  };

  const user: User = {
    name: "Akther",
    address: {
      city: "ctg",
      road: "8/1A",
      presentaddress: "Kowaznagar",
    },
  };
  const permanentAddress =
    user?.address?.permanentaddesss ?? "No Permanent address!";
  console.log({ permanentAddress });
}
