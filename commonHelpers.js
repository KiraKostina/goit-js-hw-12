import{S as d,a as f,i as h}from"./assets/vendor-24f26945.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const m="43048239-bd17c0d5033bfd52479da7a86",g="https://pixabay.com/api/";function y(s){const e={q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,key:m},n=new URLSearchParams(e);return fetch(`${g}?${n}`).then(o=>{if(!o.ok)throw new Error("Error!");return o.json()})}function L(s){return s.map(e=>`<li class="gallery__item">
        <a class="gallery-link" href="${e.largeImageURL}">
        <img src="${e.webformatURL}" data-source="${e.largeImageURL}" alt="${e.tags}">
       
        </a>
        <ul class="list-container">
          <li class="item-description"><h3>Likes</h3> <p>${e.likes}</p></li>
          <li class="item-description"><h3>Views</h3> <p>${e.views}</p></li>
          <li class="item-description"><h3>Comments</h3> <p>${e.comments}</p></li>
          <li class="item-description"><h3>Downloads</h3> <p>${e.downloads}</p></li>
        </ul>
       </li>`).join("")}const b=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),a=document.querySelector(".js-backdrop"),l=new d(".gallery a",{captionsData:"alt",captionDelay:250});b.addEventListener("submit",S);const w={lines:13,length:38,width:17,radius:45,scale:1,corners:1,speed:.8,rotate:0,animation:"spinner-line-fade-quick",direction:1,color:"#ffffff",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"},u=new f(w);let p="";function S(s){s.preventDefault(),$(),c.innerHTML="",p=s.target["user-search-query"].value.trim(),y(p).then(e=>{if(e.hits.length===0)return h.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});l.refresh(),c.innerHTML=L(e.hits),l.refresh()}).catch(e=>{console.log(e)}).finally(()=>{P()})}function $(){u.spin(a),a.classList.remove("is-hidden")}function P(){u.stop(),a.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map