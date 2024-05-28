const scrollToTopBtn = document.getElementById('btn-scroll-to-top');

scrollToTopBtn.addEventListener('click', function btn(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
})

document.addEventListener('scroll', function(){
    if(window.scrollY > 300){
        scrollToTopBtn.style.visibility = 'visible';
    } else {
        scrollToTopBtn.style.visibility = 'hidden';
    }
})