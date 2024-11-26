document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        burger.classList.toggle('toggle');
    });

    // 相册数据
    const albums = {
        "清新笑颜": [
            "1.jpg", "2.jpg", "3.jpg",
            "4.jpg", "5.jpg", "6.jpg",
            "7.jpg", "8.jpg", "9.jpg"
        ],
        "舞台风采": [
            "10.jpg", "11.jpg", "12.jpg",
            "13.jpg", "14.jpg", "15.jpg",
            "16.jpg", "17.jpg", "18.jpg"
        ],
        "生活随拍": [
            "19.jpg","20.jpg","21.jpg",
        ],
    };

    // 相册网格
    const albumGrid = document.getElementById('albumGrid');
    Object.entries(albums).forEach(([albumName, photos], index) => {
        const albumElement = document.createElement('div');
        albumElement.classList.add('album');
        albumElement.innerHTML = `
            <img src="/assest/${photos[0]}" alt="${albumName}" class="album-cover">
            <div class="album-title">${albumName}</div>
        `;
        albumElement.addEventListener('click', () => openAlbum(albumName));
        albumGrid.appendChild(albumElement);
    });

    // 全屏相册
    const fullscreenAlbum = document.getElementById('fullscreenAlbum');
    const closeAlbum = document.getElementById('closeAlbum');
    const albumTitle = document.getElementById('albumTitle');
    const fullscreenGrid = document.querySelector('.fullscreen-grid');

    function openAlbum(albumName) {
        const photos = albums[albumName];
        albumTitle.textContent = albumName;
        fullscreenGrid.innerHTML = '';
        photos.forEach((photo, index) => {
            const img = document.createElement('img');
            img.src = "/assest/" + photo;
            img.alt = `${albumName} 照片 ${index + 1}`;
            fullscreenGrid.appendChild(img);
        });
        fullscreenAlbum.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    closeAlbum.addEventListener('click', () => {
        fullscreenAlbum.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // 新闻列表
    const newsList = document.getElementById('newsList');
    const newsItems = [
        '赵露思主演的新剧《清新之恋》即将开播，敬请期待！',
        '赵露思出席某品牌代言活动，清新造型惊艳全场',
        '赵露思荣获年度最具影响力新生代演员奖',
        '赵露思参与公益活动，用爱心传递正能量'
    ];

    newsItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        newsList.appendChild(li);
    });

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

