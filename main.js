// Sticky Navigation Menu Js

let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

let val;

window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
}

// Side Navigation Menu Js
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = function() {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflowX = "hidden";
  scrollBtn.style.pointerEvents = "none";
}

cancelBtn.onclick = function() {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflowX = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We click On Navigation Links

let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}
/* My Skills CSS */
/*.skills{
  background:#f0f8ff;
}
.skills .content{
  padding:40px 0;
}
.skills .skills-details{
  display:flex;
  justify-content: space-between;
  align-items: center;
}
.skills-details .text{
  width:50%;
}
.skills-details p{
  color:var(--black-color);
  text-align: justify;
}
.skills .skills-details .experience{
  display:flex;
  align-items: center;
  margin:0 10px;
}
.skills-details .experience .num{
  color:var(--black-color);
  font-size: 80px;
}
.skills-details .experience .exp{
  color:var(--black-color);
  margin-left: 20px;
  font-size: 18px;
  font-weight: 500;
  margin:0 6px;
}
.skills-details .boxes{
  width:45%;
  display:flex;
  flex-wrap: wrap;
  justify-content:space-between;
}
.skills-details .box{
  width:calc(100% / 2 - 20px);
  margin:20px 0;
}
.skills-details .boxes .topic{
  font-size: 20px;
  color:var(--primary-color);
}
.skills-details .boxes .per{
  font-size: 60px;
  color:var(--primary-color);
}*/

