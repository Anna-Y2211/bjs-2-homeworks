class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if(!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        } else if(this.alarmCollection.find(this.time)) {
            console.warn('Уже присутствует звонок на это же время');
        }

      return this.alarmCollection.push({
        callback,
        time,
        canCall: true,
      });
    }

    removeClock(time) {
        this.alarmCollection.filter((time) => {
            return time !== true;
        });
    }

    getCurrentFormattedTime() {
        return new Date().toString();
    }

    start() {
        if(this.intervalId) {
            return;
        }
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(() => {
                if(this.time === getCurrentFormattedTime() && canCall === true) {
                    canCall = false;
                }
            });
            
       callback();
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(() => canCall = true);
    }
    
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}
