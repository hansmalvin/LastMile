const name1 = "test demo";
let count = 0;

const testingVar = (name = "User") => {
  return `Hey ${name}, Welcome to ${name1}`;
};


const sum = (a, b) => {
  return `${a} + ${b} = ${a + b}`;
};

const sum2 = (a, b) => {
  return `${a} + ${b} = ${a + b}`;
};

const user = {
  name: "hendry",
  age: 400,
  role: "Player"
};

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

const showUser = ({ name, age, role = "Guest" }) => {
  return `Name: ${name}, Age: ${age}, Role: ${role}`;
};

// Output ke HTML
const output = document.getElementById("output");

output.innerHTML = `
  <p>${testingVar(user.name)}</p>
  <p>${showUser(user)}</p>
  <p>Angka Sebelum ${numbers}</p>
  <p>Angka baru (Spread Operator): ${newNumbers}</p>
  <p>${sum("wa", "wa")}</p>
  <p>${sum2(1, 2)}</p>
`;