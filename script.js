let currentUser = JSON.parse(localStorage.getItem('user')) || null;
const pages = {
    // Добавь это в объект pages
admin: `
    <section class="container" style="max-width: 1200px;">
        <h1 class="huge-title">Admin Panel</h1>
        <table class="admin-table">
            <thead>
                <tr>
                    <th>ФИО</th>
                    <th>Программа</th>
                    <th>Мотивация</th>
                    <th>AI Score</th>
                    <th>Оценка комиссии</th>
                    <th>Действие</th>
                </tr>
            </thead>
            <tbody id="admin-table-body"></tbody>
        </table>
    </section>
`,
    auth: `
        <section class="container auth-page">
            <h1 class="huge-title">Регистрация</h1>
            <div class="auth-form">
                <input type="text" id="reg-name" placeholder="Ваше имя">
                <input type="email" id="reg-email" placeholder="Email">
                <button class="main-button" onclick="handleRegister()">Создать аккаунт</button>
                <p id="auth-error" style="color: red; margin-top: 10px;"></p>
            </div>
        </section>`,

    // Страница самой заявки
    applicationForm:  `
        <div class="apply-container">
            <h1>Заявка на Бакалавриат</h1>
            <p>Привет! Заполни данные для поступления:</p>
            
            <div class="stepper-nav">
                <button class="step-btn active" onclick="switchTab('personal')">Personal Information</button>
                <button class="step-btn" onclick="switchTab('contact')">Contact Information</button>
                <button class="step-btn" onclick="switchTab('education')">Education</button>
            </div>

            <div id="tab-personal" class="tab-content">
                <div class="section">
                    <h3 class="section-title">Данные абитуриента</h3>
                    <div class="input-grid">
                        <div class="input-group">
                            <label>Фамилия *</label>
                            <input type="text" id="last-name" placeholder="Фамилия">
                        </div>
                        <div class="input-group">
                            <label>Имя *</label>
                            <input type="text" id="first-name" placeholder="Имя">
                        </div>
                        <div class="input-group">
                            <label>Отчество</label>
                            <input type="text" id="patronymic" placeholder="Отчество">
                        </div>
                        <div class="input-group">
                            <label>Дата рождения *</label>
                            <input type="date" id="birth-date">
                        </div>
                        <div class="input-group">
                            <label>Пол *</label>
                            <select id="gender">
                                <option value="male">Мужской</option>
                                <option value="female">Женский</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="section">
                    <h3 class="section-title">Гражданство и паспортные данные</h3>
                    <div class="input-grid">
                        <div class="input-group">
                            <label>Гражданство *</label>
                            <input type="text" id="citizenship" value="Kazakhstan">
                        </div>
                        <div class="input-group">
                            <label>ИИН *</label>
                            <input type="number" id="iin" placeholder="12 цифр">
                        </div>
                        <div class="input-group">
                            <label>Номер документа *</label>
                            <input type="text" id="doc-number" placeholder="N00000000">
                        </div>
                        <div class="input-group">
                            <label>Дата выдачи *</label>
                            <input type="date" id="doc-date">
                        </div>
                    </div>
                </div>

                <div class="section">
                    <h3 class="section-title">Сведения о родителях</h3>
                    <div class="input-grid">
                        <div class="input-group">
                            <label>ФИО Матери</label>
                            <input type="text" id="mother-name">
                        </div>
                        <div class="input-group">
                            <label>ФИО Отца</label>
                            <input type="text" id="father-name">
                        </div>
                    </div>
                </div>
                
                <button class="next-btn" onclick="switchTab('contact')">Далее</button>
            </div>

            <div id="tab-contact" class="tab-content" style="display:none">
                </div>
            
            <div id="tab-education" class="tab-content" style="display:none">
                </div>
        </div>
        <div id="tab-contact" class="tab-content" style="display:none">
    <div class="section">
        <h3 class="section-title">Домашний адрес</h3>
        <div class="input-grid">
            <div class="input-group">
                <label>Страна *</label>
                <select id="c-country">
                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div class="input-group">
                <label>Регион *</label>
                <input type="text" id="c-region" placeholder="Напр: Акмолинская область">
            </div>
            <div class="input-group">
                <label>Город *</label>
                <input type="text" id="c-city" placeholder="Напр: Кокшетау">
            </div>
            <div class="input-group">
                <label>Улица *</label>
                <input type="text" id="c-street" placeholder="Напр: ул. Абая">
            </div>
            <div class="input-group">
                <label>Дом *</label>
                <input type="text" id="c-house" placeholder="10">
            </div>
            <div class="input-group">
                <label>Квартира</label>
                <input type="text" id="c-apartment" placeholder="5">
            </div>
        </div>
    </div>

    <div class="section">
        <h3 class="section-title">Контактная информация</h3>
        <div class="input-grid">
            <div class="input-group">
                <label>Номер телефона *</label>
                <input type="tel" id="c-phone" placeholder="+7 (___) ___-__-__">
            </div>
            <div class="input-group">
                <label>Instagram</label>
                <input type="text" id="c-instagram" placeholder="@username">
            </div>
            <div class="input-group">
                <label>Telegram</label>
                <input type="text" id="c-telegram" placeholder="@username">
            </div>
            <div class="input-group">
                <label>WhatsApp *</label>
                <input type="tel" id="c-whatsapp" placeholder="+7 (___) ___-__-__">
            </div>
        </div>
    </div>

    <div class="checkbox-group" style="margin-top: 20px;">
        <label style="display: flex; align-items: flex-start; gap: 10px; font-size: 13px; color: #888;">
            <input type="checkbox" id="c-privacy" required> 
            Нажимая на кнопку, вы соглашаетесь с Политикой конфиденциальности.
        </label>
    </div>

    <div class="button-row" style="margin-top: 30px; display: flex; gap: 10px;">
        <button class="prev-btn" onclick="switchTab('personal')" style="background: #333;">Назад</button>
        <button class="next-btn" onclick="switchTab('education')">Далее</button>
    </div>
</div>
    `,

    success: `
        <section class="container">
            <h1 class="huge-title">Готово!</h1>
            <p>Ваша заявка принята. Мы свяжемся с вами в ближайшее время.</p>
            <button class="main-button" onclick="showPage('home')">На главную</button>
        </section>`,
    home: `
        <section class="hero">
            <div class="hero-card">
                <h1 id="hero-title">Будущее Пренадлежит Лидерам</h1>
                <p id="hero-desc">Разрабатываем инновации на стыке AI и робототехники для Decentrathon 5.0</p>
                <button class="main-button" onclick="startApplication()">Подать заявку</button>
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

const firebaseConfig = {
    apiKey: "AIzaSyCPlBNPamgTRxNGr2VAl5zBHNe-d1-wHNE",
    authDomain: "gigabyte5decentrathon.firebaseapp.com",
    projectId: "gigabyte5decentrathon",
    storageBucket: "gigabyte5decentrathon.firebasestorage.app",
    messagingSenderId: "991235315498",
    appId: "1:991235315498:web:9048e5f43ac795bf85b053",
    measurementId: "G-J8Y2MBJVYY"
  };

// Универсальная функция отрисовки страниц
function showPage(pageId) {
    const contentDiv = document.getElementById('main-content');
    if (!contentDiv) return;

    // 1. Отрисовываем саму страницу из объекта pages
    contentDiv.innerHTML = pages[pageId];

    // 2. Если перешли на админку — ПРИНУДИТЕЛЬНО запускаем загрузку данных
    if (pageId === 'admin') {
        console.log("Админка отрисована, запрашиваю данные из Firebase...");
        loadAdminData(); 
    }
}

// Убедись, что функция загрузки выглядит именно так:
function loadAdminData() {
    const tbody = document.getElementById('admin-table-body');
    if (!tbody) {
        console.error("Ошибка: элемент admin-table-body не найден на странице!");
        return;
    }

    // Включаем "живое" обновление через onSnapshot
    db.collection("applications").orderBy("createdAt", "desc")
        .onSnapshot((snapshot) => {
            tbody.innerHTML = ""; // Очищаем перед обновлением
            
            if (snapshot.empty) {
                tbody.innerHTML = "<tr><td colspan='6'>Заявок пока нет</td></tr>";
                return;
            }

            snapshot.forEach((doc) => {
                const app = doc.data();
                // Внутри функции loadAdminData, там где tbody.innerHTML += ...
tbody.innerHTML += `
    <tr style="background-color: white !important; color: black !important;">
        <td style="color: black !important;">${name}</td>
        <td style="color: black !important;">${prog}</td>
        <td style="color: black !important;">
            <div style="color: black !important; max-height:60px; overflow:auto;">
                ${mot}
            </div>
        </td>
        <td style="color: black !important;">${ai}/100</td>
        <td><input type="number" id="input-${id}" value="${data.commissionScore || ''}" style="color: black !important; width:50px;"></td>
        <td>
            <button class="save-btn" onclick="saveScore('${id}')">OK</button>
        </td>
    </tr>
`;
            });
            console.log("Данные успешно подгружены!");
        }, (error) => {
            console.error("Ошибка Firebase:", error);
            tbody.innerHTML = `<tr><td colspan='6' style="color:red">Ошибка доступа!</td></tr>`;
        });
}

function getAIScore(text) {
    const keywords = ['робот', 'программирование', 'лидер', 'команда', 'проект', 'GIGABYTE', 'FLL'];
    let score = 50; // Базовый балл
    keywords.forEach(word => {
        if (text.toLowerCase().includes(word.toLowerCase())) score += 7;
    });
    return Math.min(score, 100); // Не больше 100
}

function submitApplication() {
    const motivation = document.getElementById('app-motivation').value;
    const program = document.getElementById('app-program').value;
    const aiRating = getAIScore(motivation); // Вычисляем балл

    db.collection("applications").add({
        userName: currentUser.name,
        userEmail: currentUser.email,
        program: program,
        motivation: motivation,
        aiScore: aiRating, // Сохраняем балл ИИ
        commissionScore: "", // Пустое поле для комиссии
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => showPage('success'));
}

function loadAdminData() {
    db.collection("applications").orderBy("createdAt", "desc").onSnapshot(snapshot => {
        const tbody = document.getElementById('admin-table-body');
        if (!tbody) return;
        tbody.innerHTML = "";

        snapshot.forEach(doc => {
            const data = doc.data();
            tbody.innerHTML += `
                <tr>
                    <td>${data.userName}</td>
                    <td>${data.program}</td>
                    <td><div style="max-height:60px; overflow:auto;">${data.motivation}</div></td>
                    <td><span class="ai-score-badge">${data.aiScore}/100</span></td>
                    <td><input type="number" id="input-${doc.id}" value="${data.commissionScore || ''}" style="width:50px"></td>
                    <td><button class="save-btn" onclick="saveScore('${doc.id}')">OK</button></td>
                </tr>
            `;
        });
    });
}

// Функция сохранения оценки комиссии
function saveScore(id) {
    const newScore = document.getElementById(`input-${id}`).value;
    db.collection("applications").doc(id).update({
        commissionScore: newScore
    }).then(() => alert("Оценка сохранена!"));
}

// ПРОВЕРКА СЕКРЕТНОГО ВХОДА
window.onhashchange = () => {
    if (window.location.hash === '#admin') {
        showPage('admin');
        loadAdminData();
    }
};

// Проверка при первой загрузке
if (window.location.hash === '#admin') {
    setTimeout(() => { showPage('admin'); loadAdminData(); }, 500);
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

// Функция, которая вызывается при клике на "Подать заявку"
function startApplication() {
    if (!currentUser) {
        alert("Для подачи заявки необходимо зарегистрироваться");
        showPage('auth');
    } else {
        showPage('applicationForm');
        // Небольшая задержка, чтобы DOM успел обновиться
        setTimeout(() => {
            document.getElementById('user-display-name').innerText = currentUser.name;
        }, 10);
    }
}

// Регистрация
function handleRegister() {
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;

    if (name && email) {
        currentUser = { name, email };
        localStorage.setItem('user', JSON.stringify(currentUser));
        alert(`Добро пожаловать, ${name}!`);
        showPage('applicationForm');
    } else {
        document.getElementById('auth-error').innerText = "Заполните все поля!";
    }
}

// Отправка заявки (пока просто в консоль)
function submitApplication() {
    const program = document.getElementById('app-program').value;
    const motivation = document.getElementById('app-motivation').value;

    const fullApplication = {
        user: currentUser,
        program: program,
        motivation: motivation,
        date: new Date().toISOString()
    };

    console.log("Заявка сохранена:", fullApplication);
    // Здесь позже будет запрос к Firebase
    showPage('success');
}

// Инициализация
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

// Функция для отправки заявки в облако
function submitApplication() {
    const program = document.getElementById('app-program').value;
    const motivation = document.getElementById('app-motivation').value;

    if (!currentUser) {
        alert("Ошибка: пользователь не найден");
        return;
    }

    // Сохраняем в коллекцию "applications"
    db.collection("applications").add({
        userName: currentUser.name,
        userEmail: currentUser.email,
        program: program,
        motivation: motivation,
        status: "pending",
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then((docRef) => {
        console.log("Заявка сохранена с ID: ", docRef.id);
        showPage('success');
    })
    .catch((error) => {
        console.error("Ошибка при добавлении: ", error);
        alert("Произошла ошибка при отправке");
    });
}

function loadApplications() {
    db.collection("applications").orderBy("createdAt", "desc").onSnapshot((querySnapshot) => {
        const listDiv = document.getElementById('admin-list');
        listDiv.innerHTML = ""; // Очищаем текст "Загрузка"

        querySnapshot.forEach((doc) => {
            const app = doc.data();
            listDiv.innerHTML += `
                <div class="app-card" style="border: 1px solid #ddd; padding: 20px; margin-bottom: 10px; border-radius: 8px; background: #fff; color: #000;">
                    <h3>${app.userName}</h3>
                    <p><strong>Программа:</strong> ${app.program}</p>
                    <p><strong>Email:</strong> ${app.userEmail}</p>
                    <p><strong>Мотивация:</strong> ${app.motivation}</p>
                    <span style="font-size: 12px; color: #888;">ID: ${doc.id}</span>
                </div>
            `;
        });
    });
}

// Обнови функцию showPage, чтобы она вызывала загрузку данных
const originalShowPage = showPage;
showPage = function(pageId) {
    originalShowPage(pageId);
    if (pageId === 'admin') {
        loadApplications();
    }
};

function submitApplication() {
    const program = document.getElementById('app-program').value;
    const motivation = document.getElementById('app-motivation').value;

    if (motivation.length < 10) {
        alert("Пожалуйста, напишите чуть подробнее о своей мотивации (минимум 10 символов)");
        return;
    }

    db.collection("applications").add({
        userName: currentUser.name,
        userEmail: currentUser.email,
        program: program,
        motivation: motivation,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        showPage('success');
    })
    .catch((error) => alert("Ошибка: " + error));
}

function showPage(pageId) {
    const contentDiv = document.getElementById('main-content');
    if (!contentDiv) return;

    // Отрисовываем контент
    contentDiv.innerHTML = pages[pageId];
    
    // ВАЖНО: Если зашли на админку, запускаем загрузку данных из Firebase
    if (pageId === 'admin') {
        console.log("Загрузка админ-панели...");
        loadAdminData(); 
    }
    
    window.scrollTo(0,0);
}

// Эта функция сработает, если ты вручную допишешь #admin в браузере
window.addEventListener('hashchange', () => {
    if (window.location.hash === '#admin') {
        showPage('admin');
    }
});

// Эта функция сработает сразу при загрузке страницы, если там уже есть #admin
window.addEventListener('load', () => {
    if (window.location.hash === '#admin') {
        showPage('admin');
    }
});

function loadAdminData() {
    const tbody = document.getElementById('admin-table-body');
    if (!tbody) return;

    // Очищаем таблицу перед загрузкой (показываем статус)
    tbody.innerHTML = "<tr><td colspan='6'>Загрузка заявок...</td></tr>";

    // Подключаемся к коллекции
    db.collection("applications")
      .orderBy("createdAt", "desc") // Сначала новые
      .onSnapshot((snapshot) => {
        tbody.innerHTML = ""; // Очищаем для новых данных
        
        if (snapshot.empty) {
            tbody.innerHTML = "<tr><td colspan='6'>Заявок пока нет</td></tr>";
            return;
        }

        snapshot.forEach((doc) => {
    const data = doc.data();
    const id = doc.id;

    // ВНИМАНИЕ: Проверь, чтобы названия справа (data.userName) 
    // в точности совпадали с тем, что ты видишь в консоли Firebase!
    tbody.innerHTML += `
        <tr style="background: white;">
            <td style="color: black !important;">${data.userName || 'Пусто'}</td>
            <td style="color: black !important;">${data.program || '—'}</td>
            <td style="color: black !important;">
                <div style="max-height:60px; overflow:auto; color: black;">
                    ${data.motivation || 'Нет описания'}
                </div>
            </td>
            <td style="color: black;">
                <span class="ai-score-badge">${data.aiScore || 0}/100</span>
            </td>
            <td>
                <input type="number" id="input-${id}" 
                       value="${data.commissionScore || ''}" 
                       style="width:50px; color: black; border: 1px solid #ccc;">
            </td>
            <td>
                <button class="save-btn" onclick="saveScore('${id}')">OK</button>
            </td>
        </tr>
    `;
});
    }, (error) => {
        console.error("Ошибка Firestore:", error);
        tbody.innerHTML = `<tr><td colspan='6' style="color:red">Ошибка доступа: ${error.message}</td></tr>`;
    });
}

function saveScore(docId) {
    const scoreValue = document.getElementById(`score-${docId}`).value;
    
    db.collection("applications").doc(docId).update({
        commissionScore: scoreValue,
        status: "reviewed" // Меняем статус на "проверено"
    })
    .then(() => {
        alert("Оценка успешно сохранена в Firebase!");
    })
    .catch((error) => {
        console.error("Ошибка обновления:", error);
        alert("Не удалось сохранить балл.");
    });
}

function deleteApp(id) {
    if(confirm("Удалить эту заявку?")) {
        db.collection("applications").doc(id).delete();
    }
}

function switchTab(tabName) {
    // Скрываем все разделы
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = 'none';
    });
    // Убираем активный класс у кнопок
    document.querySelectorAll('.step-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Показываем нужный раздел
    document.getElementById('tab-' + tabName).style.display = 'block';
    
    // Делаем кнопку активной (визуально)
    // Можно добавить логику поиска кнопки по тексту, если нужно
}