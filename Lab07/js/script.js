'use strict';

const form = document.getElementById('form');
const display = document.getElementById('display');
const submitBtn = document.getElementById('submitBtn');

const isDeg = (deg) =>
  deg >= 0 && deg <= 90;

const isFunc = (func) =>
  func === 'sin' || func === 'cos' || func === 'tan';

const onFormChange = (e) => {
  e.preventDefault();
  const id = e.target.id;
  const value = e.target.value; 

  if (id === 'degrees' && !isDeg(value) 
    || id === 'func' && !isFunc(value)) {
    submitBtn.disabled = true;
    e.target.classList.add('error');
  }
  else {
    submitBtn.disabled = false;
    e.target.classList.remove('error');
  }
};

const onFormSubmit = (e) => {
  e.preventDefault();
  
  const deg = +e.target[0].value;
  const func = e.target[1].value;

  if (isDeg(deg) && isFunc(func)) {
    const expression = 'Math.' + func + '(' + (deg * Math.PI / 180) + ')';
    display.innerHTML = func + '(' + deg + '&deg;) = ' + eval(expression);
  } else {
    display.innerHTML = 'Не валідні дані!';
  }
};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('change', onFormChange);
