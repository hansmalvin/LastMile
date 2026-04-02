const clickBtn = document.getElementById('clickBtn');
const output = document.getElementById('output');
const nameInput = document.getElementById('nameInput');
const pilihWarnaTest = document.getElementById('pilihWarnaTest');
const testForm = document.getElementById('testForm');

clickBtn.addEventListener('click', () => {
    output.textContent = "Button success";
});

nameInput.addEventListener('input', () => {
    output.textContent = `Hasil Input: ${nameInput.value}`;
});

pilihWarnaTest.addEventListener('change', () => {
    output.textContent = `Warna favorit: ${pilihWarnaTest.value}`;
});

testForm.addEventListener('submit', (e) => {
    e.preventDefault();
    output.textContent = `Form success Name: ${nameInput.value}, Color: ${pilihWarnaTest.value}`;
});

nameInput.addEventListener('keyup', (e) => {
    output.textContent = `Last key from keyboard you pressed: ${e.key}`;
});

clickBtn.addEventListener('mouseover', () => {
    clickBtn.style.backgroundColor = '#4ebb68';
});
clickBtn.addEventListener('mouseout', () => {
    clickBtn.style.backgroundColor = '';
});

nameInput.addEventListener('focus', () => {
    nameInput.style.backgroundColor = '#80e1ed';
});
nameInput.addEventListener('blur', () => {
    nameInput.style.backgroundColor = '';
});