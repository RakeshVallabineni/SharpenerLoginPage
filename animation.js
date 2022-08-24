const s=document.querySelector('#form');
const m=document.querySelector('.Name');
const n=document.querySelector('.Email');
const o=document.querySelector('#users');
const p=document.querySelector("#error");
s.addEventListener("submit",sub);

function sub(e){
  e.preventDefault();
  if (m.value==='' || n.value===''){
   p.innerHTML='* Please fill the tabs';
   setTimeout(() =>p.remove(),3000) ;
  }
  else{
   const li=document.createElement('li');
   li.appendChild(document.createTextNode(`${m.value} : ${n.value}`));
   o.appendChild(li);
   m.value='';
   n.value='';

  }
  
};

