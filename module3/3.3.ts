{
  // type guards
  // typeof --> type guard

  type Alphaneumeric = string | number;
  const add = (
    param1: Alphaneumeric,
    param2: Alphaneumeric
  ): string | number => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const res1 = add("2", "3");
  console.log(res1);

  // in guard
  type NormalUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`My name is ${user.name}`);
    }
  };

  const normaluser: NormalUser = {
    name: "Mr. Normal",
  };
  const adminuser: AdminUser = {
    name: "Mr. Admin",
    role: "admin",
  };

  console.log(normaluser);
  console.log(adminuser);
}
