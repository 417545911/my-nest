import { Injectable } from '@nestjs/common';
// import dayjs from 'dayjs';
const dayjs = require('dayjs');

@Injectable()
export class MarketService {
  getMock(): string {
    return '235';
  }
  getMock1() {
    const _date = Array.from({ length: 5 }, (_, i) =>
      dayjs().subtract(4-i, 'day').format('YYYY-MM-DD'),
    );
    let secondValue = 0; // 涨跌初始值
    const ret = _date.map((el) => generateTimeArray(el,secondValue));
    return ret.flat();
  }
}

function generateTimeArray(date, secondValue,startTime = '09:00', endTime = '17:30') {
  date = dayjs(date).format('YYYY-MM-DD');
  const timeArray = [];
  const startHour = parseInt(startTime.split(':')[0]);
  const startMinute = parseInt(startTime.split(':')[1]);
  const endHour = parseInt(endTime.split(':')[0]);
  const endMinute = parseInt(endTime.split(':')[1]);
  for (let hour = startHour; hour <= endHour; hour++) {
    let minuteStart = 0;
    let minuteEnd = 59;

    if (hour === startHour) {
      minuteStart = startMinute;
    }
    if (hour === endHour) {
      minuteEnd = endMinute;
    }
    for (let minute = minuteStart; minute <= minuteEnd; minute++) {
      const formattedHour = hour.toString().padStart(2, '0');
      const formattedMinute = minute.toString().padStart(2, '0');
      const randomVal = Math.random() * 0.2 - 0.1
      const _secondValue = secondValue - randomVal;
      secondValue = Math.abs(_secondValue) > 4.4 ? secondValue : _secondValue;

      timeArray.push([
        `${date} ${formattedHour}:${formattedMinute}`,
        +secondValue.toFixed(2),
        null,
      ]);
    }
  }

  return timeArray;
}
