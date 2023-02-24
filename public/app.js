const down1 = document.getElementById('svgDown1');
const down2 = document.getElementById('svgDown2');
const down3 = document.getElementById('svgDown3');
const up1 = document.getElementById('svgUp1');
const up2 = document.getElementById('svgUp2');
const up3 = document.getElementById('svgUp3');
const dropdown1 = document.getElementById('dropdown1');
const dropdown2 = document.getElementById('dropdown2');
const dropdown3 = document.getElementById('dropdown3');

down1.addEventListener('click', ()=>{
  down1.classList.toggle('hidden');
  up1.classList.toggle('hidden');
  dropdown1.classList.toggle('hidden');
});
down2.addEventListener('click', ()=>{
  down2.classList.toggle('hidden');
  up2.classList.toggle('hidden');
  dropdown2.classList.toggle('hidden');
});
down3.addEventListener('click', ()=>{
  down3.classList.toggle('hidden');
  up3.classList.toggle('hidden');
  dropdown3.classList.toggle('hidden');
});

up1.addEventListener('click', ()=>{
  down1.classList.toggle('hidden');
  up1.classList.toggle('hidden');
  dropdown1.classList.toggle('hidden');
});
up2.addEventListener('click', ()=>{
  down2.classList.toggle('hidden');
  up2.classList.toggle('hidden');
  dropdown2.classList.toggle('hidden');
});
up3.addEventListener('click', ()=>{
  down3.classList.toggle('hidden');
  up3.classList.toggle('hidden');
  dropdown3.classList.toggle('hidden');
});

