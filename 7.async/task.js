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
        return new Date().toLocaleDateString('ru-Ru', {
            hour: '2-digit',
            minute: '2-digit',
        });
    }

    start() {
        if(this.intervalId) {
            return;
        }
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach((alarm) => {
                if(alarm.time === this.getCurrentFormattedTime() && alarm.canCall === true) {
                    alarm.canCall = false;
                    alarm.callback();
                }
            });
            
    }, 1000);

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach((alarm) => alarm.canCall = true);
    }
    
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}
}
