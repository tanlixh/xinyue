window.onload = function() {
  let titleOl = document.querySelector(".title");
  titleOl.onmouseover = function() {
    this.innerHTML = "了解G分规则";
  };

  titleOl.onmouseout = function() {
    this.innerHTML = "现有G分: 0";
  };
};

let mode = document.querySelectorAll(".actModal");
let modeClass = document.querySelectorAll(".actModalClose");

let gpLi = document.querySelectorAll(".gpLi");

for (let i = 0; i < gpLi.length; i++) {
  gpLi[i].onclick = function() {
    mode[i].style.display = "block";
    modeClass[i].onclick = function() {
      this.parentNode.parentNode.style.display = "none";
    };
  };
}

$(function () {
  $('.arr').mouseenter(function () {
      $('.arr').removeClass('and');
  })
  $('.arr').mouseleave(function () {
      $('.arr').addClass('and');
  })

})
