const nav=document.getElementById('nav');
const progress=document.querySelector('.progress');
const mobileMenu=document.getElementById('mobileMenu');
document.getElementById('menuBtn').onclick=()=>mobileMenu.classList.add('open');
document.getElementById('closeMenu').onclick=()=>mobileMenu.classList.remove('open');
document.querySelectorAll('.mobile-menu a').forEach(a=>a.onclick=()=>mobileMenu.classList.remove('open'));

const observer=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const storyImage=document.getElementById('storyImage');
const steps=document.querySelectorAll('.story-step');
const stepObserver=new IntersectionObserver((entries)=>{
 entries.forEach(e=>{if(e.isIntersecting){const img=e.target.dataset.image;if(img)storyImage.style.backgroundImage=`url("${img}")`}})
},{threshold:.55});
steps.forEach(s=>stepObserver.observe(s));

window.addEventListener('scroll',()=>{
 nav.classList.toggle('scrolled',window.scrollY>60);
 const h=document.documentElement.scrollHeight-window.innerHeight;
 progress.style.width=(h>0?(window.scrollY/h)*100:0)+'%';
 document.querySelectorAll('[data-parallax]').forEach(el=>{
   const r=el.parentElement.getBoundingClientRect();
   const offset=(window.innerHeight/2-(r.top+r.height/2))*0.08;
   el.style.transform=`translate3d(0,${offset}px,0) scale(1.08)`;
 });
},{passive:true});

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
 const id=a.getAttribute('href'); if(id.length>1){const target=document.querySelector(id);if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'});}}
}));
