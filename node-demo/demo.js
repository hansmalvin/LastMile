const fs = require('fs');

const kontenFile = "Test kedua file content for node.js demo";
const namaFile = "message.txt";

fs.writeFile(namaFile, kontenFile, (err) => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`${namaFile} Success Created`);
});