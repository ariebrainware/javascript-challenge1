/**
 * Calculate Time
 * Level 20-22
 */

var timeTools = {
    t: new Date(),
    checkYear: () => {
      return t.getFullYear();
    },
    checkMonth: () => {
      return t.getMonth();
    },
    checkDay: () => {
      return t.getDay();
    },
    checkHours: () => {
      return t.getHours();
    },
    checkMinutes: () => {
      return t.getHours();
    },
    checkSeconds: () => {
      return t.getSeconds();
    },
    checkMiliseconds: () => {
      return t.getMilliseconds();
    },
    convertHoursToSeconds: x => {
      return x * 3600;
    },
    convertHoursToMinutes: x => {
      return x * 60;
    },
    convertMinutesToHours: x => {
      return x / 60;
    },
    convertMinutesToSeconds: x => {
      return x * 60;
    },
    convertMinutesToMiliseconds: x => {
      return x * 60000;
    },
    convertSecondToHours: x => {
      return x / 3600;
    },
    convertSecondToMinutes: x => {
      return x / 60;
    },
    convertSecondToMiliseconds: x => {
      return x * 1000;
    }
  };
const A = 10
const res = timeTools.convertHoursToMinutes
console.log(`${A} Hours  = ${res} Minutes`  )