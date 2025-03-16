document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const birthPlace = document.getElementById('birthPlace').value;
    const hobbies = document.getElementById('hobbies').value;

    // Сохраняем данные в cookie
    document.cookie = `fullName=${fullName}; path=/`;
    document.cookie = `email=${email}; path=/`;
    document.cookie = `dob=${dob}; path=/`;
    document.cookie = `birthPlace=${birthPlace}; path=/`;
    document.cookie = `hobbies=${hobbies}; path=/`;

    alert('Данные сохранены в Cookie!');
});

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function displayCookieData() {
    const fullName = getCookie('fullName');
    const email = getCookie('email');
    const dob = getCookie('dob');
    const birthPlace = getCookie('birthPlace');
    const hobbies = getCookie('hobbies');

    const cookieData = document.getElementById('cookieData');
    cookieData.innerHTML = `
        <p><strong>ФИО:</strong> ${fullName}</p>
        <p><strong>Электронная почта:</strong> ${email}</p>
        <p><strong>Дата рождения:</strong> ${dob}</p>
        <p><strong>Место рождения:</strong> ${birthPlace}</p>
        <p><strong>Увлечения:</strong> ${hobbies}</p>
    `;
}

function clearCookie() {
    document.cookie = 'fullName=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    document.cookie = 'email=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    document.cookie = 'dob=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    document.cookie = 'birthPlace=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    document.cookie = 'hobbies=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';

    alert('Cookie очищены!');
    displayCookieData();
}

// Отображаем данные из Cookie при загрузке страницы
displayCookieData();