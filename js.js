
let textSize = 16;
let isHightContrast = false;
const increaseTextButton = document.getElementById(`increaseTextButton`);


const toggleContrastButton = document.getElementById('toggleContrastButton');
toggleContrastButton.onclick = function () {
    isHightContrast = !isHightContrast;
    if (isHightContrast) {
        document.body.style.backgroundColor = `#000`;
        document.body.style.color = `#f8f6f0`;
    } else {
        document.body.style.backgroundColor = ``;
        document.body.style.color = ``;
    }
}


increaseTextButton.onclick = function () {
    textSize += 2;
    document.body.style.fontSize = textSize + 'px';
}










document.querySelector('.pay-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const emailValue = document.getElementById('email').value;
    const phoneValue = document.getElementById('phone').value;
    console.log('Ваш Email:', emailValue);
    console.log('Номер телефону:', phoneValue);
    alert('Чудово!Чекайте на повідомлення або дзвінок.');
});
function sharePage() {
    navigator.share(
        {
            title: "Джоан Роулінг — Офіційний сайт та біографія письменниці",
            url: window.location.href
        }
    )
}