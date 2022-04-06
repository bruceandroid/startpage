import React, { useState } from 'react';
import { WEEKDAYS, MONTHS } from "../util/constants";
import './styles/Clock.scss';

const Clock = () => {
  let now = new Date();

  const addInitialZero = (time) => {
    if (time < 10) {
      time = '0' + time;
    }
    return time;
  }

  let [hours, setHours] = useState(addInitialZero(now.getHours()));
  let [minutes, setMinutes] = useState(addInitialZero(now.getMinutes()));
  let [seconds, setSeconds] = useState(addInitialZero(now.getSeconds()));

  let [weekday, setWeekday] = useState(WEEKDAYS[now.getDay()].toLowerCase());
  let [day, setDay] = useState(addInitialZero(now.getDate()));
  let [month, setMonth] = useState(MONTHS[now.getMonth()].toLowerCase());


  const getDateTime = () => {
    now = new Date();
    setHours(addInitialZero(now.getHours()));
    setMinutes(addInitialZero(now.getMinutes()));
    setSeconds(addInitialZero(now.getSeconds()));

    setWeekday(WEEKDAYS[now.getDay()].toLowerCase());
    setDay(addInitialZero(now.getDate()));
    setMonth(MONTHS[now.getMonth()].toLowerCase());
  }

  setInterval(getDateTime, 500);

  return (
    <>
      <div className='clock-container'>
        <div className='time'>
          <span className='hours'>{hours}</span>
          <span className='colon'>:</span>
          <span className='minutes'>{minutes}</span>
        </div>
        <span className='seconds'>{seconds}</span>

        <div className='date'>
          <span className='week'>{weekday}</span>
          <span className='day'>{day}</span>
          <span className='month'>{month}</span>
        </div>
      </div>
    </>
  )
}

export default Clock;