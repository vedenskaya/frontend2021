'use strict';

const header = document.getElementById('header');
const group = document.getElementById('group');
const p = document.all[10];
const label = document.all[14];
const img = document.all[13];

const headerHandler = (e) => {
  const bg = header.style.backgroundColor;
  const color = header.style.color;

  if ((color === 'black' || color === '') 
    && (bg === 'yellow' || bg === '')) {
    header.style.backgroundColor = 'blue';
    header.style.color = 'white';
  } else {
    header.style.backgroundColor = 'yellow';
    header.style.color = 'black';
  }
};

const groupHandler = (e) => {
  const bg = group.style.backgroundColor;
  const color = group.style.color;

  if ((color === 'black' || color === '') 
    && (bg === 'yellow' || bg === '')) {
    group.style.backgroundColor = 'blue';
    group.style.color = 'white';
  } else {
    group.style.backgroundColor = 'yellow';
    group.style.color = 'black';
  }
};

const pHandler = (e) => {
  const bg = p.style.backgroundColor;
  const color = p.style.color;

  if ((color === 'red' || color === '') 
    && (bg === 'white' || bg === '')) {
    p.style.backgroundColor = 'green';
    p.style.color = 'white';
  } else {
    p.style.backgroundColor = 'white';
    p.style.color = 'red';
  }
};

const labelHandler = (e) => {
  const width = img.style.width;
  const color = label.style.color;

  if ((color === 'red' || color === '') && 
    (width === '300px' || width === '')) {
    img.style.width = '400px';
    label.style.color = 'green';
  } else {
    img.style.width = '300px';
    label.style.color = 'red';
  }
};

header.addEventListener('click', headerHandler);
group.addEventListener('click', groupHandler);
p.addEventListener('click', pHandler);
label.addEventListener('click', labelHandler);