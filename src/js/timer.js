const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  start() {
    const startTime = Date.now();
    let deltaTime = this.targetDate.getTime() - startTime;
    this.updateClockface(this.getTimeComponents(deltaTime));

    this.startSetInterval(deltaTime);
  }

  startSetInterval(deltaTime) {
    const timerId = setInterval(() => {
      deltaTime -= 1000;
      const time = this.getTimeComponents(deltaTime);
      this.updateClockface(time);
    }, 1000);

    this.stopTimer(deltaTime, timerId);
  }
  stopTimer(deltaTime, timerId) {
    if (deltaTime <= 0) {
      clearInterval(timerId);
      this.updateClockface(0);
      const blockTimer = document.querySelector(this.selector);
      blockTimer.textContent = 'Таймер остановился';
    }
  }

  getTimeComponents(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    return { days, hours, mins, secs };
  }

  updateClockface({ days, hours, mins, secs }) {
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});
timer.start();
