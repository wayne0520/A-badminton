// 淡入淡出效果 
const fadeInElements = document.querySelectorAll('.fade-in');
fadeInElements.forEach(element => {
    element.classList.add('show');
});

// 確保圖片載入後再執行淡入 
const heroImage = document.querySelector('.hero img'); // 假設你有一個 <section class="hero">
if (heroImage && heroImage.complete) {
    heroImage.style.opacity = 1;
} else if (heroImage) {
    heroImage.addEventListener('load', function() {
        heroImage.style.opacity = 1;
    });
}

// 輪播圖 
const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentItem = 0;

function showItem(index) {
    if (index < 0) {
        currentItem = carouselItems.length - 1;
    } else if (index >= carouselItems.length) {
        currentItem = 0;
    } else {
        currentItem = index;
    }

    const transformValue = -currentItem * 100 + '%';
    carousel.style.transform = 'translateX(' + transformValue + ')';
}

// 初始顯示第一個項目 
showItem(currentItem);

// 自動輪播 
let autoPlayInterval = setInterval(function() {
    showItem(currentItem + 1);
}, 3000); // 每 3 秒自動播放下一張

// 滑鼠懸停時停止自動播放 
carousel.addEventListener('mouseover', function() {
    clearInterval(autoPlayInterval);
});

// 滑鼠離開時恢復自動播放 
carousel.addEventListener('mouseout', function() {
    autoPlayInterval = setInterval(function() {
        showItem(currentItem + 1);
    }, 3000);
});

// Triple Bar 點擊 
const tripleBar = document.querySelector('.triple-bar');
const mainNav = document.querySelector('.main-nav');
const header = document.querySelector('header');

tripleBar.addEventListener('click', function() {
    mainNav.classList.toggle('open');
    header.classList.toggle('open');
    // 調整 main 的 padding-top
    if (mainNav.classList.contains('open')) {
        document.querySelector('main').style.paddingTop = header.offsetHeight + 'px';
    } else {
        document.querySelector('main').style.paddingTop = header.offsetHeight + 'px';
    }
});

// 綁定按鈕點擊事件 
prevButton.addEventListener('click', function() {
    showItem(currentItem - 1);
});

nextButton.addEventListener('click', function() {
    showItem(currentItem + 1);
});