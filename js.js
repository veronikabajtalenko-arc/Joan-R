document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Ваш Email:', document.getElementById('user-text').value);
    console.log('Номер телефону:', document.getElementById('user-text').value);
    alert('Інформацію успішно ндіслано! Чекайте на повідомлення чи дзвінок.');
});
function sharePage() {
    navigator.share(
        {
            title: "Джоан Роулінг — Офіційний сайт та біографія письменниці",
            url: window.location.href
        }
    )
}