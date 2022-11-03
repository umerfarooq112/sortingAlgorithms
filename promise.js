// function getUsers() {
//   //   return [
//   //     { username: "john", email: "john@test.com" },
//   //     { username: "jane", email: "jane@test.com" },
//   //   ];
//   let users = [];

const axios = require("axios");

//   // delay 1 second (1000ms)
//   setTimeout(() => {
//     users = [
//       { username: "john", email: "john@test.com" },
//       { username: "jane", email: "jane@test.com" },
//     ];
//   }, 1000);

//   return users;
// }

// function findUser(username) {
//   const users = getUsers();
//   const user = users.find((user) => user.username === username);
//   return user;
// }
// console.log(findUser("john"));

// ----------------
// Promise Chaining
// ----------------

// function getUsers() {
//   axios.get("https://jsonplaceholder.typicode.com/todos/1").then((response) => {
//     console.log(response.data, "is the user 1");
//     const dataid = 2;
//     return axios
//       .get(`https://jsonplaceholder.typicode.com/todos/${dataid}`)
//       .then((response) => {
//         console.log(response.data, "is the second user data");
//         const dataid = 3;
//         axios
//           .get(`https://jsonplaceholder.typicode.com/todos/${dataid}`)
//           .then((response) => {
//               console.log(response.data, "is the third user data");
//           });
//       });
//   });

// return new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve([
//       { username: "john", email: "john@test.com" },
//       { username: "jane", email: "jane@test.com" },
//     ]);
//   }, 1000);
// });
// }

// const promise = getUsers();

// promise.then((first) => {
//   console.log(first);
// });

// getUsers();

// ----------
// PROMISE ALL
// ----------

function getAllPromise() {
  const url1 = axios.get(`https://jsonplaceholder.typicode.com/todos/1`);
  const url2 = axios.get(`https://jsonplaceholder.typicode.com/todos/3`);

  const allPromise = Promise.all([url1, url2]).then(
    async ([value1, value2]) => {
      const resvalue1 = await value1.data;
      const resvalue2 = await value2.data;
      console.log(resvalue1, resvalue2);
    }
  );
}

getAllPromise();
