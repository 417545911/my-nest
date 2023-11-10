import { Injectable } from '@nestjs/common';
import { CreateDataDto } from './dto/create-data.dto';
// import dayjs from 'dayjs';
const dayjs = require('dayjs');

@Injectable()
export class MarketService {
  getMock(): string {
    return '235';
  }
  getMock1() {
    // const _date = Array.from({ length: 5 }, (_, i) =>
    //   dayjs().subtract(4-i, 'day').format('YYYY-MM-DD'),
    // );
    const _date = [];
    const ret = _date.map((el) => generateTimeArray(el));
    return ret.flat();
  }
  queryMock1(data: CreateDataDto): object[] {
    const { date} = data;
    const _date = JSON.parse(JSON.parse(JSON.stringify(date)))
    const ret = _date.map((el) => generateTimeArray(el));
    return ret.flat();
  }
}

function generateTimeArray(
  date: string,
  startTime = '09:00',
  endTime = '17:30',
) {
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
      const randomVal = (Math.random() * 2 + 2).toFixed(4);

      timeArray.push([
        `${date} ${formattedHour}:${formattedMinute}`,
        +randomVal,
      ]);
    }
  }

  return timeArray;
}
