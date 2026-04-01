// testing arrays
let kataHuruf = ["orange", "durian", "Semangka"];
let angka = [1, 2, 3, 4];

console.log("Angka awal:", angka);
console.log("Awalan kata:", kataHuruf);

// push pop unshift shift
angka.push(5,5);        
angka.pop();          
angka.unshift(0);     
angka.shift();        

console.log("array angka setelah updaet:", angka);
console.log("length dari array string:", angka.length);

//object
let person = {
  name: "test1",
  age: 401,
  isStudent: true
};

console.log("Objek:", person);
console.log("Name:", person.name);
console.log("Age:", person["age"]);

person.age = 22;
person["name"] = "Budi";

console.log("Setelah Update object person:", person);


// built in methods

// Array 
let nums = [1, 2, 3, 4, 5];

// map 
let mapped = nums.map(n => n * 2);
console.log("Mapped:", mapped);

// filter 
let filtered = nums.filter(n => n % 2 === 0);
console.log("Filtered:", filtered);

// forEach 
console.log("forEach output test:");
nums.forEach(n => console.log(n));


// Combine objects and arrays
let students = [
  { name: "Abdi", score: 80 },
  { name: "Bryan", score: 60 },
  { name: "Leon", score: 71 }
];

let tingkatKelulusan = students.filter(s => s.score > 70);
let tampilNama = students.map(s => s.name);

console.log("Murid:", students);
console.log("Murid Lulus:", tingkatKelulusan);
console.log("Nama Murid:", tampilNama);
