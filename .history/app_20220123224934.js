const btn = document.querySelector(".btn");
const sublist = document.querySelector(".sub-list");
btn.addEventListener("click", function (e) {
  sublist.classList.toggle("active");
  e.target.classList.toggle("fa-bars");

  e.target.classList.toggle("fa-times");
});
document.addEventListener("click", function (e) {
  if (!e.target.matches(".btn") && !sublist.contains(e.target)) {
    sublist.classList.remove("active");
    btn.classList.add("fa-bars");
    btn.classList.remove("fa-times");
  }
});
const arcodianH = document.querySelectorAll(".arcodian");
[...arcodianH].forEach((i) =>
  i.addEventListener("click", function (e) {
    const next = e.target.nextElementSibling;
    next.classList.toggle("active");

    next.style.height = `${next.scrollHeight}px`;
    const icon = e.target.querySelector(".icon");

    icon.classList.toggle("fa-chevron-down");
    icon.classList.toggle("fa-chevron-up");

    if (!next.classList.contains("active")) {
      next.style.height = `0px`;
    }
  })
);

const lightbox = document.querySelectorAll(".galery-item");
[...lightbox].forEach((item) =>
  item.addEventListener("click", function (e) {
    const src = e.target.dataset.img;
    const template = `<div class="modal">
<div class="modal-content">
<i class="fa fa-angle-left lightBox-prev" aria-hidden="true"></i>
  <img src="${src}" alt="">
  <i class="fa fa-angle-right lightBox-next" aria-hidden="true"></i>
</div>
</div>`;
    document.body.insertAdjacentHTML("beforeend", template);
  })
);
let index=0;

document.body.addEventListener("click", function (e) {
  const lightbox=document.querySelector('.modal-content img');
  let lightSrc="";
  console.log(lightbox);
  if (e.target.matches(".modal")) {
    e.target.parentNode.removeChild(e.target);
  }
  else if(e.target.matches('.lightBox-prev')){
    console.log("prev");

  }
  else if(e.target.matches('.lightBox-next')){
   lightSrc=lightbox;
   index=[...lightbox].findIndex(item=>item.dataset.img=lightSrc);
  }
});
