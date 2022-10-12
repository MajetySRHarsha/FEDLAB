const users = [
  {
    name: "David John",
    city: "London",
    birthYear: 1998
  },
  {
    name: "Justin",
    city: "Canada",
    birthYear: null
  },
  {
    name: "Yusuf Shea",
    city: "Paris",
    birthYear: 1990
  },
  {
    name: "Zerovsky",
    city: "Russia",
    birthYear: 2002,
  }
];

const currentYear = new Date().getFullYear();

const userNames = users.reduce((filterUsers, user) => {
  if (user.birthYear && (currentYear - user.birthYear) > 25) {
    filterUsers.push(user.name);
  }
  return filterUsers;
}, []);
console.log(userNames);