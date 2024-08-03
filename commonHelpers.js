import{i,S as l}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function c(a){const o="https://pixabay.com/api/",r="45258111-19b0afcb9384c7a2acd16a24f";let s=new URLSearchParams({key:r,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(o+"?"+s,{headers:{Accept:"application/json"}}).then(e=>e.json())}function u(a){let o="";return a.forEach(r=>{o+=`
  <li class="gallery-item">
      <a href="${r.largeImageURL}" class="gallery-link">  
            <img style="width:360px" 
            src="${r.webformatURL}" 
            class="gallery-image" 
            />
      </a>
      <div>
      <span>Likes: ${r.likes}</span>
      <span>Views: ${r.views}</span>
      <span>Comments: ${r.comments}</span>
      <span>Downloads: ${r.downloads}</span>
      </div>
  </li>

  `}),"<ul>"+o+"</ul>"}document.querySelector("#search-form").addEventListener("submit",a=>{a.preventDefault(),document.querySelector(".loader").style.display="block";let o=document.querySelector(".search").value;c(o).then(r=>{const s=r.hits;if(document.querySelector(".loader").style.display="none",s.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}let e=document.querySelector(".gallery");document.querySelector(".search").value="",e.innerHTML=u(s),new l(".gallery a",{captionDelay:250})})});
//# sourceMappingURL=commonHelpers.js.map
