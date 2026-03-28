const pages = {
    home: `
        <section class="hero">
            <div class="hero-card">
                <h1 id="hero-title">Будущее технологий вместе с GIGABYTE</h1>
                <p id="hero-desc">Разрабатываем инновации на стыке AI и робототехники для Decentrathon 5.0</p>
                <button class="main-button" id="apply-btn">Подать заявку</button>
            </div>
        </section>`,
    about: `
        <section class="page-section">
            <div class="container">
                <h1 class="page-title">О нас</h1>
                <div class="about-grid">
                    <div class="text-block">
                        <p class="accent-text">Международная команда GIGABYTE борется за технологическое лидерство, создавая решения, которые делают мир умнее.</p>
                        <p>Мы — студенты IT-Lyceum, объединенные страстью к робототехнике и искусственному интеллекту.</p>
                    </div>
                    <div class="image-placeholder">
                        <div class="id-box">GIGABYTE TEAM</div>
                    </div>
                </div>
            </div>
        </section>`,
    contacts: `
        <section class="page-section dark-bg">
            <div class="container">
                <h1 class="page-title">Свяжитесь с нами</h1>
                <div class="contact-grid">
                    <div class="contact-item">
                        <span>Телефон</span>
                        <h3>+7 771 070 73 70</h3>
                    </div>
                    <div class="contact-item">
                        <span>Электронная почта</span>
                        <h3>info@gigabyte.team</h3>
                    </div>
                    <div class="contact-item">
                        <span>Адрес</span>
                        <h3>Казахстан, г. Кокшетау, ул. Каныша Сатпаева, 22/1</h3>
                    </div>
                </div>
            </div>
        </section>`,
    bakalavriat: `
        <section class="page-section">
            <div class="container">
                <h1 class="page-title">Бакалавриат</h1>
                <p>Информация о программах обучения будет доступна в ближайшее время.</p>
            </div>
        </section>`
};

function showPage(pageId) {
    document.getElementById('main-content').innerHTML = pages[pageId];
    window.scrollTo(0,0);
}

// Запускаем главную при загрузке
showPage('home');

// Функция смены языка (пример для главной)
function changeLang(lang) {
    // Здесь можно расширить логику переводов для всех страниц
    console.log("Язык изменен на:", lang);
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText.toLowerCase() === lang) btn.classList.add('active');
    });
}