let openBtn = document.querySelectorAll(".grid__picture");

openBtn.forEach(el => {
  el.addEventListener("click", function () {
    el.children[2].classList.remove("hidden");
  });
});

let btn = document.querySelector("#formSubmit");
let form = document.querySelector(".form__inputs");
btn.addEventListener("click", function () {
  form.classList.add("validated");
});

function checkSpace(event) {
  if (event.keyCode == 32) {
    return false;
  }
}


let open = document.getElementById('open')
let close = document.getElementById('close')
let menu = document.getElementById('menu')
let items = document.querySelectorAll('.menu__item')

open.addEventListener('click', function () {
  menu.setAttribute('style', 'transform: translate(0, 0)')
  close.setAttribute('style', 'display: block')
})

close.addEventListener('click', function () {
  menu.removeAttribute('style')
  close.removeAttribute('style')
})

items.forEach(function (item) {
  item.addEventListener('click', function () {
    menu.removeAttribute('style')
    close.removeAttribute('style')
  })
})