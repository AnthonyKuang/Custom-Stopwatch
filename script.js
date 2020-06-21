// Document variables
const goBtn = document.querySelector('#go');
const stopBtn = document.querySelector('#stop');
const clearBtn = document.querySelector('#clear');
const clock = document.querySelector('#clock');

// Time variables
let secondCount = 0;
let stopWatch;



// Functions
function startTime() {
  secondCount += 1;

  let seconds = secondCount % 60;
  let minutes = Math.floor((secondCount % 3600) / 60);
  let hours = Math.floor(secondCount / 3600);

  let displaySeconds = (seconds < 10) ? '0' + seconds : seconds;
  let displayMinutes = (minutes < 10) ? '0' + minutes : minutes;
  let displayHours = (hours < 10) ? '0' + hours : minutes;

  clock.textContent = `${displayHours}:${displayMinutes}:${displaySeconds}`;
}



// Event Listeners
goBtn.addEventListener('click', () => {
  stopWatch = setInterval(startTime, 1000);
  goBtn.disabled = true;
});

stopBtn.addEventListener('click', () => {
  clearInterval(stopWatch);
  goBtn.disabled = false;
})

clearBtn.addEventListener('click', () => {
  clearInterval(stopWatch);
  secondCount = 0;
  clock.textContent = '00:00:00';
  goBtn.disabled = false;
})