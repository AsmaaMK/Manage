import"https://code.jquery.com/jquery-3.2.1.slim.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function f(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=f(e);fetch(e.href,t)}})();const i=document.getElementById("open-nav"),o=document.getElementById("close-nav"),d=document.getElementsByTagName("nav")[0];o.classList.add("hidden");i.addEventListener("click",()=>{d.classList.remove("hidden"),o.classList.remove("hidden"),i.classList.add("hidden"),document.body.classList.add("stop-scrolling")});o.addEventListener("click",()=>{d.classList.add("hidden"),i.classList.remove("hidden"),o.classList.add("hidden"),document.body.classList.remove("stop-scrolling")});d.addEventListener("click",s=>{(s.target.tagName==="A"||s.target.tagName==="NAV")&&(d.classList.add("hidden"),i.classList.remove("hidden"),o.classList.add("hidden"),document.body.classList.remove("stop-scrolling"))});const g=document.getElementById("submit-btn"),m=document.getElementById("email"),a=document.getElementById("error-message"),L=s=>/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(s),u=()=>{const s=m.value;return L(s)?(a.classList.add("hidden"),!0):(a.classList.remove("hidden"),!1)};g.addEventListener("click",u);m.addEventListener("input",u);const c=document.getElementById("scroll-top");window.addEventListener("scroll",()=>{window.pageYOffset>80?c.classList.add("show"):c.classList.remove("show")});$(".owl-carousel").owlCarousel({loop:!0,margin:10,autoplay:!0,responsive:{0:{items:1},600:{items:2},1e3:{items:3}}});