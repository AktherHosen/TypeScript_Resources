// destructuring
{
  const user = {
    id: 345,
    name: {
      firstName: "Mezbaul",
      middleName: "Abedin",
      lastName: "Persian",
    },
    contactNo: "01610945101",
    address: "Uganda",
  };
  const {
    contactNo,
    name: { middleName: midName },
  } = user;
}

// array destructuring

const myFriends = ["mir", "jorin", "rocks", "abha", "monica"];
const [, , bestFriend, ...rest] = myFriends;
