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
  for (let i = arr.length - 1; i > 0; i++) {
    console.log(arr[i]);
    return;
  }
}
const arr = [5, 10, 1, 9, 6, 29, 15];
bubbleSort(arr);
