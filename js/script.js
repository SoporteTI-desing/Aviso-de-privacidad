
// script.js - Tabs interactions
document.querySelectorAll('.tab-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const target = btn.getAttribute('data-target');
    document.querySelectorAll('.tab-btn').forEach(b=>b.setAttribute('aria-selected','false'));
    btn.setAttribute('aria-selected','true');
    document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
    document.getElementById(target).classList.add('active');
    // Smooth scroll to top of content on mobile
    document.getElementById(target).scrollIntoView({behavior:'smooth', block:'start'});
  });
});
