const b=document.querySelector('.hamburger'),n=document.querySelector('nav');b?.addEventListener('click',()=>{const open=n.classList.toggle('open');b.setAttribute('aria-expanded',String(open));});document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{n.classList.remove('open');b?.setAttribute('aria-expanded','false')}));
(()=>{const dialog=document.querySelector("#gallery-dialog");if(!dialog)return;const thumbs=[...document.querySelectorAll("[data-gallery]")],big=document.querySelector("#gallery-large"),caption=document.querySelector("#gallery-caption"),count=document.querySelector("#gallery-count");let index=0;const render=()=>{const img=thumbs[index].querySelector("img");big.src=img.src;big.alt=img.alt;caption.textContent=thumbs[index].querySelector("span").textContent.replace(" ↗","");count.textContent=`${index+1} / ${thumbs.length}`};thumbs.forEach((b,i)=>b.addEventListener("click",()=>{index=i;render();dialog.showModal()}));document.querySelector("#gallery-prev").addEventListener("click",()=>{index=(index+thumbs.length-1)%thumbs.length;render()});document.querySelector("#gallery-next").addEventListener("click",()=>{index=(index+1)%thumbs.length;render()});document.querySelector("#gallery-close").addEventListener("click",()=>dialog.close());dialog.addEventListener("click",e=>{if(e.target===dialog)dialog.close()});dialog.addEventListener("keydown",e=>{if(e.key==="ArrowRight"){index=(index+1)%thumbs.length;render()}if(e.key==="ArrowLeft"){index=(index+thumbs.length-1)%thumbs.length;render()}})})();


// Presouvani rychle navigace na desktopu.
(()=>{
 const panel=document.querySelector('.quick-nav');
 const handle=panel?.querySelector('.quick-nav-drag');
 if(!panel||!handle)return;
 const desktop=()=>matchMedia('(min-width:1101px)').matches;
 const key='db-quick-nav-position-v3';
 const clamp=(n,lo,hi)=>Math.max(lo,Math.min(n,Math.max(lo,hi)));
 function place(x,y){
  const width=panel.offsetWidth,height=panel.offsetHeight;
  panel.style.setProperty('--quick-nav-x',clamp(x,8,innerWidth-width-8)+'px');
  panel.style.setProperty('--quick-nav-y',clamp(y,8,innerHeight-height-8)+'px');
  panel.classList.add('is-dragged');
 }
 function reset(){panel.classList.remove('is-dragged');panel.style.removeProperty('--quick-nav-x');panel.style.removeProperty('--quick-nav-y');try{localStorage.removeItem(key)}catch(_){}}
 try{const p=JSON.parse(localStorage.getItem(key)||'null');if(desktop()&&p&&Number.isFinite(p.x)&&Number.isFinite(p.y))place(p.x,p.y)}catch(_){}
 let drag=null;
 handle.addEventListener('pointerdown',e=>{
  if(!desktop()||e.button!==0)return;
  const r=panel.getBoundingClientRect();
  drag={id:e.pointerId,dx:e.clientX-r.left,dy:e.clientY-r.top};
  place(r.left,r.top);
  panel.classList.add('is-dragging');
  handle.setPointerCapture(e.pointerId);
  e.preventDefault();
 });
 handle.addEventListener('pointermove',e=>{if(drag&&drag.id===e.pointerId)place(e.clientX-drag.dx,e.clientY-drag.dy)});
 const finish=e=>{if(!drag||drag.id!==e.pointerId)return;drag=null;panel.classList.remove('is-dragging');const r=panel.getBoundingClientRect();try{localStorage.setItem(key,JSON.stringify({x:r.left,y:r.top}))}catch(_){}};
 handle.addEventListener('pointerup',finish);
 handle.addEventListener('pointercancel',finish);
 handle.addEventListener('dblclick',reset);
 handle.addEventListener('keydown',e=>{if(e.key==='Home'){reset();e.preventDefault()}});
 addEventListener('resize',()=>{if(desktop()&&panel.classList.contains('is-dragged')){const r=panel.getBoundingClientRect();place(r.left,r.top)}});
})();
