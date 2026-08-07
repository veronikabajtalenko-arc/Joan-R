
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
console.log(increaseTextButton)









document.querySelector('.pay-form').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Ваш Email:', document.getElementById('email').value);
    console.log('Номер телефону:', document.getElementById('phone').value);
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