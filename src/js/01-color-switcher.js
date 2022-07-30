const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');
let timerId = null;

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

