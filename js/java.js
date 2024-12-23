window.onload = function() {
    // Анимация появления заголовка и подзаголовка на главной странице
    document.querySelector('.hero h1').classList.add('fade-in');
    setTimeout(() => {
        document.querySelector('.hero h2').classList.add('fade-in');
    }, 500);
};



document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    window.onscroll = function() {
        if (window.pageYOffset > 200) { // Показываем кнопку, когда пользователь прокрутил вниз больше чем на 200px
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none'; // Скрываем кнопку, когда пользователь находится наверху страницы
        }
    };

    backToTopBtn.onclick = function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Плавный скролл наверх
    };
});