const scrolltotop = document.querySelector(".scrolltotop");
const nav = document.getElementById("nav");
const d1 = document.getElementById("d1");
const d2 = document.getElementById("d2");
const loding = document.querySelector(".loding");
const imgnav = document.getElementById("imgnav");
let navitem = document.querySelectorAll(".nav-link");
nav.style.transition = "1s";
scrolltotop.style.opacity = "0";
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    scrolltotop.style.opacity = "1";
    nav.classList.add("bg-white");
    nav.classList.remove("pt-5");
    imgnav.src = "assets/img/logo.png";
    for (let i = 0; i < navitem.length; i++) {
      navitem[i].classList.add("text-dark");
      navitem[i].classList.remove("text-white");
    }
  } else {
    scrolltotop.style.opacity = "0";
    nav.classList.remove("bg-white");
    nav.classList.add("pt-5");
    imgnav.src = "assets/img/logo-white.png";
    for (let i = 0; i < navitem.length; i++) {
      navitem[i].classList.add("text-white");
      navitem[i].classList.remove("text-dark");
    }
  }
});
scrolltotop.addEventListener("click", function () {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});
document.body.style.overflow = "hidden";
window.addEventListener("load", function () {
  this.setTimeout(function () {
    loding.style.opacity = "0";
    loding.style.visibility = "hidden";
    loding.style.transition = "1s";
    document.body.style.overflow = "auto";
  }, 2000);
});
var date = new Date();
var day = date.getDate(),
  month = date.getMonth() + 1,
  year = date.getFullYear(),
  hour = date.getHours(),
  min = date.getMinutes();

month = (month < 10 ? "0" : "") + month;
day = (day < 10 ? "0" : "") + day;
hour = (hour < 10 ? "0" : "") + hour;
min = (min < 10 ? "0" : "") + min;

var today = year + "-" + month + "-" + day;
d1.value = today;
var nextDay = new Date(today);
nextDay.setDate(nextDay.getDate() + 1);
var day = nextDay.getDate(),
  month = nextDay.getMonth() + 1,
  year = nextDay.getFullYear(),
  hour = nextDay.getHours(),
  min = nextDay.getMinutes();

month = (month < 10 ? "0" : "") + month;
day = (day < 10 ? "0" : "") + day;
hour = (hour < 10 ? "0" : "") + hour;
min = (min < 10 ? "0" : "") + min;

var today = year + "-" + month + "-" + day;
d2.value = today;
