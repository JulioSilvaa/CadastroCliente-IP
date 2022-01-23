/* eslint-disable no-undef */
// 1 -  fibonacci.js
const fibonacci = (n) => {
  let fq = [0, 1];
  if (n <= 1) {
    console.log(fq[0]);
  }
  if (n === 2) {
    console.log(...fq);
  }
  if (n > 2) {
    for (let i = 1; i <= n - 2; i++) {
      fq.push(fq[fq.length - 1] + fq[fq.length - 2]);
      console.log(...fq);
    }
  }
};

console.log(fibonacci(6));

// Exercício 3

// const newObj = (obj) => {
//   for (const property in obj) {
//     if (obj[property] !== null) {
//       console.log({ [property]: obj[property] });
//     }
//   }
// };
// console.log(
//   newObj({
//     fizz: "buzz",
//     foo: null,
//     bar: 42,
//   })
// );

// const obj = {
//   fizz: "buzz",
//   foo: null,
//   bar: 42,
// };

// Object.keys(obj).forEach(function (element) {
//   if (obj[element] !== null) {
//     console.log({ [element]: obj[element] });
//   }
// });

const validation = (date) => {
  const now = Date.now();
  const past = Date.parse(date)
  const duraction = now - past;

  console.log(now,new Date(now),"now");
  console.log(past,new Date(past),"past");
 

  console.log(new Date(duraction),"resultado");
};

validation("2021-11-17T20:40:09.503Z", "10d");

//("2021-12-10T00:00:00.000Z", "180d");
//"2021-11-17T20:40:09.503Z", "10d"
