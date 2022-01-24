const btn=document.querySelector('.btn');
const sublist=document.querySelector('.sub-list');
btn.addEventListener('click',function(e){
  sublist.classList.toggle('active');
  e.target.classList.toggle('fa-bars');

  e.target.classList.toggle('fa-times');
})
document.addEventListener('click',function(e){
  if(!sublist.contains(e.target)&& !e.target.matches(".btn")){
  sublist.classList.remove('active');

  }
})