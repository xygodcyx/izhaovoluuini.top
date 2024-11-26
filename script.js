document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Image Grid
    const imageGrid = document.getElementById('imageGrid');
    const imageUrls = [
        '/icon.jpg',
        '/icon.jpg',
        '/icon.jpg',
        '/icon.jpg',
        '/icon.jpg',
        '/icon.jpg',
    ];

    imageUrls.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = '赵露思照片';
        imageGrid.appendChild(img);
    });

    // News List
    const newsList = document.getElementById('newsList');
    const newsItems = [
        '赵露思出席某品牌代言活动，造型惊艳',
        '赵露思荣获年度最佳女演员奖',
        '赵露思参与公益活动，传递正能量'
    ];

    newsItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        newsList.appendChild(li);
    });
});

