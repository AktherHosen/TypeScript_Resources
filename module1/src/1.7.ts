{
  // spread operator
  // rest operator
  // destructuring

  // learn spread operator

  const bros1: string[] = ["mir", "firoz", "rahat"];
  const bros2: string[] = ["akther", "hosen"];
  bros2.push(...bros1);

  const mentors1 = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };
  const mentors2 = {
    prisma: "Firoz",
    next: "Tanmoy",
    cloud: "Nahid",
  };

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };

  // rest operator

  const greetFriends = (...friends: string[]) => {
    // console.log(`Hi ${friend1} ${friend2} ${friend3}`);
    friends.forEach((friend: string) => {
      console.log(`Hi ${friend}`);
    });
  };

  greetFriends("abul", "kabul", "babil");
}
