'use babel';

export default class Stopwatch{

  constructor(div) {
    this.div = div;
    this.div.className = 'atom-logger-stopwatch';
    this.div.textContent = 'Session Time : 00:00:00';
    this.time = 0;
    this.interval;
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

  start() {
    var temp = this;
    this.interval = setInterval(function () {
      temp.time++;
      temp.timer();
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }

  clear(){
    this.stop();
    this.time = 0;
    this.div.textContent = 'Session Time : 00:00:00';
  }

  timer() {
    let hours = ((temp = Math.floor(this.time/3600)) < 10) ? '0'+ temp : temp;
    let minutes = ((temp = Math.floor((this.time%3600)/60)) < 10 ) ? '0'+ temp : temp;
    let seconds = ((temp = Math.floor((this.time%3600)%60)) <10 ) ? '0'+ temp : temp;
    this.div.textContent = 'Session Time : ' + hours + ':' + minutes + ':' + seconds;
  }
}