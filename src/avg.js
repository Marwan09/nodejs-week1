const { argv } = require("node:process");

let total = 0;
let avarage = 0;
let count = 0;

for (let i = 0; i < process.argv.length; i++) {
  if (!isNaN(process.argv[i])) {
    total += parseInt(process.argv[i]);
    count += 1;
  }
  avarage = total / count;
  // avarage = total / process.argv.length;
}
if (isNaN(avarage)) {
  // check if number is an number
  console.log("Please enter  numbers");
} else {
  console.log(` The average of the numbers is  $for$:  ${avarage}`);
}

// Way 2 with foreach
let total2 = 0;
let avarage2 = 0;
let count2 = 0;

argv.forEach((val, index) => {
  if (!isNaN(val)) {
    total2 += parseInt(val);
    count2 += 1;
    avarage2 = total2 / count2;
  }
});

console.log(` The average of the numbers is  $foreach$ : ${avarage2}`);
