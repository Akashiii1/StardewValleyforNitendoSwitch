const btn=document.querySelector('.btn');
const sublist=document.querySelector('.sub-list');
btn.addEventListener('click',function(e){
  sublist.classList.toggle('active');
})