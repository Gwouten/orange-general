"use strict";var buttons=Array.prototype.slice.call(document.querySelectorAll(".filter__button")),engagements=Array.prototype.slice.call(document.querySelectorAll(".engagements__item")),activeClass="filter__button--active",filterEngagements=function(t,e){e?(engagements.forEach(function(t){t.style.cssText=""}),document.querySelector("."+activeClass).classList.remove(activeClass)):engagements.forEach(function(e){e.style.display="block",e.dataset.tag.indexOf(t)>-1&&(e.style.display="none")})},setBtnActive=function(){};buttons.forEach(function(t){t.addEventListener("click",function(t){setBtnActive();var e=document.querySelector("."+activeClass),s=Array.prototype.slice.call(t.target.classList).indexOf(activeClass)>-1;e&&e.classList.remove(activeClass),t.target.classList.toggle(activeClass),filterEngagements(t.target.dataset.tag,s)})});