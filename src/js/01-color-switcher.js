// 1. написать ф-цию которая меняет цвет фона
// 2. после нажатия кнопки «Start», раз в секунду меняет цвет фона <body>
// 3. При нажатии на кнопку «Stop», изменение цвета фона должно останавливаться.
// 4. пока изменение темы запушено, кнопка «Start»должна быть не активна (disabled).

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');

startBtn.addEventListener("click", () => {
    timerId = setInterval(() => {
      changeBgColor();
    }, 1000);
    startBtn.setAttribute("disabled", "true");   
});

stopBtn.addEventListener('click', () => {
    clearInterval(timerId);
    startBtn.removeAttribute("disabled");
})

function changeBgColor() {
    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
    bodyRef.style.backgroundColor = `${getRandomHexColor()}`;
}

