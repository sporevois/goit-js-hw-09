import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const inputRef = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const timerRef = document.querySelector('.timer')
const daysEl = document.querySelector("[data-days]");
const hoursEl = document.querySelector("[data-hours]");
const minutesEl = document.querySelector("[data-minutes]");
const secondsEl = document.querySelector("[data-seconds]");
let deadLine = null;
// Styles:
timerRef.style.display = "flex"; 
daysEl.style.display = "block"; daysEl.style.textAlign = "center"; daysEl.style.fontSize = "45px"; daysEl.style.paddingRight = "10px";
hoursEl.style.display = "block"; hoursEl.style.textAlign = "center"; hoursEl.style.fontSize = "45px";  hoursEl.style.paddingRight = "10px";
minutesEl.style.display = "block"; minutesEl.style.textAlign = "center"; minutesEl.style.fontSize = "45px"; minutesEl.style.paddingRight = "10px";
secondsEl.style.display = "block"; secondsEl.style.textFlign = "center"; secondsEl.style.fontSize = "45px"; secondsEl.style.paddingRight = "10px";

startBtn.setAttribute("disabled", "true");

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] <= new Date()) {
            Notiflix.Notify.failure('Please choose a date in the future');
            return;
        }
        deadLine = selectedDates[0]
        startBtn.addEventListener('click', onTimerSetDate);
        startBtn.removeAttribute("disabled");  
    }
}
function onTimerSetDate() {
    startBtn.removeEventListener('click', onTimerSetDate);
    startBtn.setAttribute("disabled", "true");
    timerId = setInterval(() => {
        const now = new Date();
        const delta = deadLine - now;
        const { days, hours, minutes, seconds } = convertMs(delta);
        daysEl.textContent = pad(days);
        hoursEl.textContent = pad(hours);
        minutesEl.textContent = pad(minutes);
        secondsEl.textContent = pad(seconds);
        
        if (delta < 1000) {
            clearInterval(timerId);
        }
    }, 1000);      
}

function pad(value) {
    return String(value).padStart(2, '0');
}

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
            
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second)

    return { days, hours, minutes, seconds };
}
flatpickr(inputRef, options)

