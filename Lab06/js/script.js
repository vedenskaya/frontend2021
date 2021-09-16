'use strict';

const form = document.getElementById('form');
const table = document.getElementById('table');

// Task 1

const fields = {
  pib: '',
  group: '',
  variant: '',
  phone: '',
  email: ''
};

const isGroup = (group) => 
  /[А-Яа-яІіЇї][А-Яа-яІіЇї]-[0-9][0-9]$/.test(group);

const isEmail = (email) =>
  /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-0-9A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u.test(email);

const isPhone = (phone) => 
  /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(phone);

const isVariant = (variant) => 
  /^\d$|^\d\d$/.test(variant);

const onFormChange = (e) => {
  fields[e.target.id] = e.target.value;

  if (!isGroup(e.target.value) && !isEmail(e.target.value) && !isPhone(e.target.value) && !isVariant(e.target.value)) 
    e.target.nextElementSibling.style.display = 'inline';
  else
    e.target.nextElementSibling.style.display = 'none';

  const newWin = window.open('about:blank', 'hello', 'width=300,height=200');
  newWin.document.write(`
    ПІБ: ${ fields.pib } <br>
    Група: ${ fields.group } <br>
    Варінт: ${ fields.variant } <br>
    Телефон: ${ fields.phone } <br>
    E-mail: ${ fields.email }
  `);
};

form.addEventListener('change', onFormChange);

// Task 2

const randInt = (min, max) =>
  Math.round(min - 0.5 + Math.random() * (max - min + 1));

const createTable = () => {
  const tbody = document.createElement('tbody');
  
  for (let i = 0; i < 6; i++) {
    const tr = document.createElement('tr');

    for (let j = 0; j < 6; j++) {
      const n = i * 6 + j + 1;
      const td = document.createElement('td');
      td.innerHTML = n;
      td.id = 'td' + n;

      tr.appendChild(td);
    }

    tbody.appendChild(tr);
  }

  table.appendChild(tbody);
};

createTable();

const td2 = document.getElementById('td2');
const color = document.getElementById('color');

const onTd2MouseMove = (e) => {
  const r = randInt(0, 255);
  const g = randInt(0, 255);
  const b = randInt(0, 255);

  for (let i = 2; i <= 36; i += 2) 
    document.getElementById('td' + i).style.backgroundColor = `rgb(${ r }, ${ g }, ${ b })`;
};

const onTd2Click = (e) => {
  for (let i = 2; i <= 36; i += 2) 
    document.getElementById('td' + i).style.backgroundColor = color.value;
};

td2.addEventListener('mousemove', onTd2MouseMove);
td2.addEventListener('click', onTd2Click);