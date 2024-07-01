class Stopwatch {
  constructor() {
    this.isRunning = false;
    this.startTime = null;
    this.duration = 0;
  }

  start() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.startTime = new Date();
      this.tick();
    }
  }

  stop() {
    if (this.isRunning) {
      this.isRunning = false;
      clearTimeout(this.timer);
    }
  }

  reset() {
    this.isRunning = false;
    this.startTime = null;
    this.duration = 0;
  }

  getDuration() {
    if (this.isRunning) {
      this.duration = new Date();
    }
    return this.duration;
  }

  tick() {
    this.timer = setTimeout(() => {
      if (this.isRunning) {
        this.duration = (new Date() - this.startTime) / 1000;
        this.tick();
      }
    }, 10);
  }
}

export default Stopwatch;
