const pages = {
    home: `
        <section class="hero">
            <div class="hero-card">
                <h1 id="hero-title">Будущее Пренадлежит Лидерам</h1>
                <p id="hero-desc">Разрабатываем инновации на стыке AI и робототехники для Decentrathon 5.0</p>
                <button class="main-button" id="apply-btn">Подать заявку</button>
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
    about: `
        <section class="about-page">
            <div class="container">
                <div class="section-header">
                    <h1 class="huge-title">О нас</h1>
                    <div class="header-line"></div>
                </div>
                
                <div class="about-main-grid">
                    <div class="about-text-content">
                        <h2 class="about-hero-text">
                            Международная компания <strong> inDrive </strong> борется с неравным распределением возможностей и знаний, чтобы помочь сделать мир более справедливым для одного миллиарда человек
                        
                        <div class="founder-block">
                            <div class="founder-photo-container">
                                <img src="arsen.png" alt="Арсен Томский" class="founder-img">
                            </div>
                            <p class="founder-quote">
                                inVision U основан и спонсируется Арсеном Томским, основателем и генеральным директором inDrive. Мы разделяем его ценности в стремлении к справедливому миру.
                            </p>
                        </div>
                    </div>
                    
                    <div class="about-visual-block">
                        <div class="id-brand-box">
                            inVision U
                        </div>
                    </div>
                </div>
            </div>
        </section>`,

    bakalavriat: `
        <section class="bak-page">
            <div class="container">
                <div class="bak-header">
                    <h1 class="huge-title">Бакалавриат</h1>
                    <div class="header-line"></div>
                    <p class="bak-sub-title">Инновационное образование для реальных изменений</p>
                </div>

                <div class="bak-grid">
                    <div class="bak-card">
                        <div class="step-num">01</div>
                        <p>Бакалавриат inVision U объединяет академическую глубину и практическое применение знаний. Мы развиваем в студентах мышление лидеров.</p>
                    </div>
                    <div class="bak-card">
                        <div class="step-num">02</div>
                        <p>На четвертом курсе каждый студент работает над реальным проектом и может получить грант от Университета на его реализацию.</p>
                    </div>
                </div>

                <div class="directions-section">
                    <h2 class="directions-title">Основные направления:</h2>
                    <div class="direction-item">
                        <span class="badge">Наука</span>
                        <h3>Креативная инженерия</h3>
                        <p>Программа предназначена для тех, кто будет формировать будущее технологий. С первых дней студенты решают реальные инженерные задачи.</p>
                    </div>
                    <div class="direction-item">
                        <span class="badge">Технологии</span>
                        <h3>Инновационные цифровые продукты и сервисы</h3>
                        <p>Программа учит превращать идеи в цифровые продукты, которые действительно нужны людям. Студенты разрабатывают удобные интерфейсы, создают решения на основе данных и технологий, изучают UX/UI, управление продуктами и основы маркетинга. Обучение помогает соединить творчество и аналитику, чтобы создаваемые продукты делали жизнь проще и лучше.</p>
                    </div>
                    <div class="direction-item">
                        <span class="badge">Общество</span>
                        <h3>Социология инноваций и лидерства</h3>
                        <p>Программа подходит тем, кто стремится понять людей, их истории, традиции и способы взаимодействия в обществе. Студенты изучают, как формируются ценности, как сообщества адаптируются к изменениям и как культура влияет на восприятие мира. В ходе обучения они осваивают методы исследований и анализа данных, учатся понимать закономерности, объединяющие разные общества, и разрабатывать решения, способствующие социальной инклюзии и развитию сообществ.</p>
                    </div>
                    <div class="direction-item">
                        <span class="badge">Законадательные реформы</span>
                        <h3>Стратегии государственного управления и развития</h3>
                        <p>Программа рассчитана на студентов, которые хотят влиять на развитие городов и регионов и участвовать в создании справедливой и устойчивой политики. В процессе обучения они осваивают методы анализа данных, изучают устройство экономики и учатся разрабатывать стратегии, направленные на улучшение качества жизни. Полученные знания помогают работать с государственными структурами, некоммерческими организациями и сообществами, создавая реальные положительные изменения.</p>
                    </div>
                    <div class="direction-item">
                        <span class="badge">Искусство + медиа</span>
                        <h3>Цифровые медиа и маркетинг</h3>
                        <p>Программа готовит специалистов по коммуникациям с навыками в журналистике, медиапроизводстве, PR и маркетинге. Студенты учатся сторителлингу, писать и редактировать тексты, создавать видео и подкасты, понимают, как работают медиа. Выпускники смогут запускать собственные проекты и работать в самых разных сферах, от бизнеса до медиа. Отдельный фокус — критическое мышление, аналитика и эффективная коммуникация.</p>
                    </div>
                    <div class="bak-header">
                    <h1 class="huge-title">Требования для поступления</h1>
                    <div class="header-line"></div>
                </div>
                <div class="bak-grid">
                    <div class="bak-card">
                        <p>Заявки на бакалавриат подаются онлайн. При регистрации в личном кабинете нужно будет заполнить анкету и прикрепить документы. Можно выбрать только одну программу.</p>
                    </div>
                    <div class="bak-card">
                        <strong>Сроки:</strong>
                        <ul>
                            <li>Ранняя подача заявок: до 24 декабря 2025.</li>
                            <li>Основная: с 12 марта по 30 мая 2026.</li>
                        </ul>
                    </div>
                </div>
                <div class="directions-section">
                    <h2 class="directions-title">Этапы поступления:</h2>
                    <div class="direction-item">
                        <span class="badge">1</span>
                        <h3>Заполнить форму и загрузить документы</h3>
                    <div class="direction-item">
                        <span class="badge">2</span>
                        <h3>Записать видео с ответами на вопросы:</h3>
                        <ul>
                            <li>Why are you applying to inVision U?</li>
                            <li>Which program are you interested in and why?</li>
                            <li>What major challenge have you overcome, and what helped you through it?.</li>
                            <li>What are your long-term goals, and how will this program help you reach them? What motivates you in your life?</li>
                            <li>What does being a leader mean to you? Could you share an example of a time you showed leadership?</li>
                            <li>Does your family support your decision to join inVision U? Who is your biggest source of encouragement?</li>
                        </ul>
                    </div>
                    <div class="direction-item">
                        <span class="badge">3</span>
                        <h3>Загрузить результаты ЕНТ и тестов по английскому (IELTS, TOEFL)</h3>
                    </div>
                    <div class="direction-item">
                        <span class="badge">4</span>
                        <h3>Пройти собеседование с приёмной комиссией</h3>
                    </div>
                    <div class="direction-item">
                        <span class="badge">5</span>
                        <h3>Получить приглашение на обучение</h3>
                    </div>
                    <div class="direction-item">
                        <span class="badge">6</span>
                        <h3>Предоставить оригиналы документов</h3>
                    </div>
                    <div class="direction-item">
                        <span class="badge">7</span>
                        <h3>Принять участие в Адаптационной неделе</h3>
                    </div>
                    <div class="direction-item">
                        <span class="badge">8</span>
                        <h3>Приступить к занятиям</h3>
                    </div>
                </div>
                <div class="directions-section">
                    <h2 class="directions-title">Минимальные требования:</h2>
                    <div class="bak-griddy">
                    <div class="bak-card">
                        <div class="step-num">01</div>
                        <p>ЕНТ: 80 баллов (для граждан Казахстана) по одной из связок предметов:</p>
                        <ul>
                            <li>Математика + География (специальности: Социология инноваций и лидерства, Стратегии государственного управления и развития)</li>
                            <li>Математика + Информатика (специальность: Инновационные цифровые продукты и сервисы)</li>
                            <li>Математика + Физика (специальность: Креативная инженерия)</li>
                            <li>История Казахстана + Грамотность чтения + 2 творческих экзамена (специальность: Цифровые медиа и маркетинг).</li>
                        </ul>
                    </div>
                    <div class="bak-card">
                        <div class="step-num">02</div>
                        <p>Уровень английского языка:</p>
                            <h>Принимаются сертификаты IELTS (от 6.0), TOEFL IBT (60–78) или Duolingo (105–115; для иностранных кандидатов при отсутствии возможности сдать IELTS/TOEFL).</h>
                    </div>
                    <div class="bak-card">
                        <div class="step-num">03</div>
                        <p>Список необходимых документов:</p>
                        <ul>
                            <li>Удостоверение личности или паспорт</li>
                            <li>Ссылка на видеопрезентацию</li>
                            <li>Сертификат ЕНТ (для граждан Казахстана)</li>
                            <li>Сертификат, подтверждающий уровень владения английским языком</li>
                        </ul>
                </div>
            </div>
        </section>`
};

// Универсальная функция отрисовки страниц
function showPage(pageId) {
    localStorage.setItem('activePage', pageId); // Запоминаем страницу
    const t = translations[currentLang]; // Сокращение для удобства
    
    const pages = {
        home: `
            <section class="hero">
                <div class="hero-card">
                    <h1>${t.heroTitle}</h1>
                    <p>${t.heroDesc}</p>
                    <button class="main-button">${t.applyBtn}</button>
                </div>
            </section>`,
        
        bakalavriat: `
            <div class="container">
                <h1 class="huge-title">${t.bakalavriat}</h1>
                <div class="dates-block">
                    <strong class="dates-title">${t.datesTitle}</strong>
                    <ul class="dates-list">
                        <li><span>${t.earlyStream}</span> до 15 апреля</li>
                        <li><span>${t.mainStream}</span> до 1 июля</li>
                        <li><span>${t.extraStream}</span> до 25 августа</li>
                    </ul>
                </div>
            </div>`,
        
        about: ``,
        contacts: ``
    };

    document.getElementById('main-content').innerHTML = pages[pageId];
    
    // Обновляем навигацию (чтобы пункты меню тоже перевелись)
    updateNavbar();
}

function updateNavbar() {
    const t = translations[currentLang];
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks[0].innerText = t.bakalavriat;
    navLinks[1].innerText = t.about;
    navLinks[2].innerText = t.contacts;
}

// Инициализация при загрузке
window.onload = () => showPage('home');

function showPage(pageId) {
    document.getElementById('main-content').innerHTML = pages[pageId];
    window.scrollTo(0,0);
}

// Запускаем главную при загрузке
showPage('home');
