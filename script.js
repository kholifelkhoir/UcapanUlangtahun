alert('Assalamualaikum Warahmatullahi Wabarakatuh, dihari yang cerah ini aku mau kasih website special ini buat kamu dan sebelumnya aku minta maaf yaa kalau tidak sesuai dengan harapan kamuu lovee youuu...')
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('bx-x');
}
const sr = ScrollReveal ({
    distance: '65px' ,
    duration: '2600',
    delay: 450,
    reset: true
});
sr.reveal('.hero-text',{delay:200, origin:'top'});
sr.reveal('.hero-img',{delay:450, origin:'top'});
sr.reveal('.icons',{delay:500, origin:'left'});
sr.reveal('.scroll-down',{delay:500, origin:'right'});