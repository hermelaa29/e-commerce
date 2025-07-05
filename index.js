const sidebar = document.querySelector('.side-bar');
const openIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.menu-icon2');
const navlist = document.querySelector('.nav');


openIcon.addEventListener('click',function(){
    sidebar.style.display = 'flex'
});
closeIcon.addEventListener('click',function(){
    sidebar.style.display = 'none'
});

navlist.foreach(link=>{
    link.addEventListener('click',function(){
        link.classList.add('active');
    });
});