const b=document.querySelector('.hamburger'),n=document.querySelector('nav');b?.addEventListener('click',()=>{const open=n.classList.toggle('open');b.setAttribute('aria-expanded',String(open));});document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{n.classList.remove('open');b?.setAttribute('aria-expanded','false')}));
(()=>{const dialog=document.querySelector("#gallery-dialog");if(!dialog)return;const thumbs=[...document.querySelectorAll("[data-gallery]")],big=document.querySelector("#gallery-large"),caption=document.querySelector("#gallery-caption"),count=document.querySelector("#gallery-count");let index=0;const render=()=>{const img=thumbs[index].querySelector("img");big.src=img.src;big.alt=img.alt;caption.textContent=thumbs[index].querySelector("span").textContent.replace(" ↗","");count.textContent=`${index+1} / ${thumbs.length}`};thumbs.forEach((b,i)=>b.addEventListener("click",()=>{index=i;render();dialog.showModal()}));document.querySelector("#gallery-prev").addEventListener("click",()=>{index=(index+thumbs.length-1)%thumbs.length;render()});document.querySelector("#gallery-next").addEventListener("click",()=>{index=(index+1)%thumbs.length;render()});document.querySelector("#gallery-close").addEventListener("click",()=>dialog.close());dialog.addEventListener("click",e=>{if(e.target===dialog)dialog.close()});dialog.addEventListener("keydown",e=>{if(e.key==="ArrowRight"){index=(index+1)%thumbs.length;render()}if(e.key==="ArrowLeft"){index=(index+thumbs.length-1)%thumbs.length;render()}})})();


// Rychlá navigace: přesun myší / dotykovým ukazatelem na větších displejích.
(()=>{
 const panel=document.querySelector('.quick-nav'),handle=panel?.querySelector('.quick-nav-drag');
 if(!panel||!handle)return;
 const desktop=()=>window.matchMedia('(min-width:1101px)').matches;
 const key='db-autodetailing-quick-nav-position-v1';
 const clamp=(v,min,max)=>Math.min(Math.max(v,min),Math.max(min,max));
 const place=(x,y)=>{
  const width=panel.offsetWidth,height=panel.offsetHeight;
  const px=clamp(x,8,window.innerWidth-width-8),py=clamp(y,8,window.innerHeight-height-8);
  panel.style.setProperty('--quick-nav-x',px+'px');panel.style.setProperty('--quick-nav-y',py+'px');
  panel.classList.add('is-dragged');return {x:px,y:py};
 };
 const reset=()=>{panel.classList.remove('is-dragged');panel.style.removeProperty('--quick-nav-x');panel.style.removeProperty('--quick-nav-y');try{localStorage.removeItem(key)}catch(e){}};
 try{const saved=JSON.parse(localStorage.getItem(key)||'null');if(desktop()&&saved&&Number.isFinite(saved.x)&&Number.isFinite(saved.y))place(saved.x,saved.y)}catch(e){}
 let drag=null;
 handle.addEventListener('pointerdown',e=>{
  if(!desktop()||e.button!==0)return;
  const r=panel.getBoundingClientRect();drag={id:e.pointerId,dx:e.clientX-r.left,dy:e.clientY-r.top};
  place(r.left,r.top);panel.classList.add('is-dragging');handle.setPointerCapture(e.pointerId);e.preventDefault();
 });
 handle.addEventListener('pointermove',e=>{if(!drag||e.pointerId!==drag.id)return;place(e.clientX-drag.dx,e.clientY-drag.dy)});
 const finish=e=>{if(!drag||e.pointerId!==drag.id)return;drag=null;panel.classList.remove('is-dragging');const r=panel.getBoundingClientRect();try{localStorage.setItem(key,JSON.stringify({x:r.left,y:r.top}))}catch(e){}};
 handle.addEventListener('pointerup',finish);handle.addEventListener('pointercancel',finish);
 handle.addEventListener('dblclick',reset);
 handle.addEventListener('keydown',e=>{if(e.key==='Home'){reset();e.preventDefault()}});
 window.addEventListener('resize',()=>{if(desktop()&&panel.classList.contains('is-dragged')){const r=panel.getBoundingClientRect();place(r.left,r.top)}});
})();
