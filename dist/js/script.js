!function(e){var s={};function t(a){if(s[a])return s[a].exports;var n=s[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=s,t.d=function(e,s,a){t.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,s){if(1&s&&(e=t(e)),8&s)return e;if(4&s&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var n in e)t.d(a,n,function(s){return e[s]}.bind(null,n));return a},t.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(s,"a",s),s},t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},t.p="",t(t.s=0)}([function(e,s,t){"use strict";window.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".ourWorks__items"),s=document.querySelectorAll(".ourWorks__item"),t=document.querySelectorAll(".ourWorks__tabContent"),a=()=>{t.forEach(e=>{e.classList.add("hide"),e.classList.remove("show","fade")}),s.forEach(e=>{e.classList.remove("ourWorks__item-active")})},n=(e=0)=>{t[e].classList.add("show","fade"),t[e].classList.remove("hide"),s[e].classList.add("ourWorks__item-active")};a(),n(),e.addEventListener("click",e=>{const t=e.target;t&&t.classList.contains("ourWorks__item")&&s.forEach((e,s)=>{t==e&&(a(),n(s))})});const r=document.querySelector(".sideMenu__close"),o=document.querySelector(".sideMenu");document.querySelector(".header__hamburger").addEventListener("click",()=>{o.classList.contains("sideMenu__active")?o.classList.remove("sideMenu__active"):o.classList.add("sideMenu__active")}),r.addEventListener("click",()=>{o.classList.remove("sideMenu__active")});const c=document.querySelectorAll(".header__link"),i=document.querySelector(".header"),d=document.querySelector(".about"),_=document.querySelector(".services"),l=document.querySelector(".brands"),u=document.querySelector(".ourWorks"),L=document.querySelector(".ourMasters"),v=document.querySelector(".prices"),m=document.querySelector(".contacts");L.classList.add("ourMasters__none"),v.classList.add("prices__none"),m.classList.add("contacts__none"),c[1].addEventListener("click",()=>{m.classList.add("contacts__none"),v.classList.add("prices__none"),L.classList.remove("ourMasters__none"),i.classList.add("header__none"),d.classList.add("about__none"),_.classList.add("services__none"),l.classList.add("brands__none"),u.classList.add("ourWorks__none"),c[1].classList.add("header__link-active"),c[3].classList.remove("header__link-active"),c[5].classList.remove("header__link-active")}),c[0].addEventListener("click",()=>{m.classList.add("contacts__none"),L.classList.add("ourMasters__none"),i.classList.remove("header__none"),d.classList.remove("about__none"),_.classList.remove("services__none"),l.classList.remove("brands__none"),u.classList.remove("ourWorks__none"),c[0].classList.remove("header__link-active"),c[1].classList.remove("header__link-active"),c[3].classList.remove("header__link-active"),c[5].classList.remove("header__link-active")}),c[3].addEventListener("click",()=>{m.classList.add("contacts__none"),v.classList.remove("prices__none"),L.classList.add("ourMasters__none"),i.classList.add("header__none"),d.classList.add("about__none"),_.classList.add("services__none"),l.classList.add("brands__none"),u.classList.add("ourWorks__none"),c[0].classList.remove("header__link-active"),c[1].classList.remove("header__link-active"),c[5].classList.remove("header__link-active"),c[3].classList.add("header__link-active")}),c[5].addEventListener("click",()=>{m.classList.remove("contacts__none"),v.classList.add("prices__none"),L.classList.add("ourMasters__none"),i.classList.add("header__none"),d.classList.add("about__none"),_.classList.add("services__none"),l.classList.add("brands__none"),u.classList.add("ourWorks__none"),c[0].classList.remove("header__link-active"),c[1].classList.remove("header__link-active"),c[3].classList.remove("header__link-active"),c[5].classList.add("header__link-active")})})}]);