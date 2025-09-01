const selectField = document.getElementById('select-field');
const arrow = document.getElementById('arrow');
const selectText = document.getElementById('select-text');
const list = document.getElementById('list');
let options = document.getElementsByClassName('option');
options = Array.from(options);

selectField.addEventListener('click', () => {
    list.classList.toggle('show');
    arrow.classList.toggle('rotate');
});

options.forEach((option) => {
    option.addEventListener('click', () => {
        selectText.innerText = option.innerText;
        list.classList.toggle('show');
        arrow.classList.toggle('rotate');
    });
});