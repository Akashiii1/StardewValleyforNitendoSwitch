const btn=document.querySelector('.btn');
const sublist=document.querySelector('.sub-list');
btn.addEventListener('click',function(e){
  sublist.classList.toggle('active');
  e.target.classList.toggle('fa-bars');

  e.target.classList.toggle('fa-times');
})
document.addEventListener('click',function(e){
  if(!e.target.matches(".btn")&& !sublist.contains(e.target)){
   sublist.classList.remove('active');
    btn.classList.add('fa-bars');
    btn.classList.remove('fa-times');

  }
})
const arcodianH=document.querySelector('.arcodian');
arcodianH.addEventListener('click',function(e){
  const next=e.target.nextElementSibling;
  next.classList.toggle('active');
  const icon=e.target.querySelector('.icon');
  // console.log(icon);
  
  icon.classList.toggle('fa-angle-up')
  icon.classList.toggle('fa-angle-down')

})