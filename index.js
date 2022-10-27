// const task = (message) => {
//   // emulate time consuming task
//   let n = 1000000000;
//   while (n > 0) {
//     n--;
//   }
//   console.log(message);
// };

// // setTimeout(() => {
// //   task("download a file");
// // }, 100);

// console.log("Start script...");
// task("Call an API");
// console.log("Done!");

// console.log(a);
// // console.log(b);
// var a = 10;
// let b = 20;
// console.log(a);
// console.log(b);

// var a = "this";

// function hell() {
//   console.log(this.a);
// }

// hell();
// // console.log(a);

function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    // return;
  }
  return arr;
}
const arr = [5, 10, 1, 9, 6, 29, 15];
console.log(bubbleSort(arr), "is bubble sort");

// function bubbleSort(arr) {
//   for (let i = arr.length - 1; i > 0; i--) {
//     for (let j = 0; j < i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         // SWAP
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// }

// Short way of  (Destructuring Assignment Array Matching)):

// let a = 5, b = 6;
// [a, b] = [b, a];
// console.log(`${a} ${b}`);
