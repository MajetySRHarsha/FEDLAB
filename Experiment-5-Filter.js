const users = [
  {
    name: "Van Batchelder",
    city: "London",
    birthYear: 1998
  },
  {
    name: "Winter Rubino",
    city: "Madrid",
    birthYear: 1992
  },
  {
    name: "Yusuf Shea",
    city: "Paris",
    birthYear: 1990
  },
  {
    name: "Zion Shively",
    city: "Alabama",
    birthYear: 2002,
  }
];

const currentYear = new Date().getFullYear();
const filteredUsers = users.filter((user) => (currentYear - user.birthYear) > 25);

console.log(filteredUsers);