// Step 2
// Before 
// function getEvenNumbers(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(getEvenNumbers([1,2,3,4,5,6]));

// After 
function getEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); 

// Step 3

// Before 
// for (let i = 0; i < 100; i++) {
//   list.innerHTML += "<li>Item " + i + "</li>";
// }

// After
const list = document.getElementById("list");
let items = "";

for (let i = 0; i < 100; i++) {
  items += `<li>Item ${i}</li>`;
}
list.innerHTML = items;

//step 4

// Before
// function findDuplicates(arr) {
//   let duplicates = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         duplicates.push(arr[i]);
//       }
//     }
//   }
//   return duplicates;
// }

// After
function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = new Set();
  arr.forEach(item => {
    if (seen.has(item)) {
      duplicates.add(item);
    } else {
      seen.add(item);
    }
  });
  return [...duplicates];
}

console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1])); 