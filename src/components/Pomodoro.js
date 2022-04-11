import React, { useState, useEffect } from "react";
import { addInitialZero, numberToRoman } from "../util/util";
import './styles/Pomodoro.scss';

const Pomodoro = () => {

  const [previous, setPrevious] = useState({ time: 0, current: false });
  const [nRepeat, setRepeat] = useState(0);
  const [active, setActive] = useState({ time: 0, current: false });
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });
  const POSSIBLE_TIMES = [5, 15, 25];

  const startCountdown = (time) => (e) => {
    console.log(previous, active);
    setActive({ time, current: true });
    if (previous.time !== time) {
      setRepeat(0);
      setPrevious({ time, current: false });
    }
    setTimeRemaining(time*60);
  }

  const refreshCountdown = () => {
    setTimeRemaining(timeRemaining - 1);
    if (timeRemaining === 1)
      setRepeat(nRepeat => nRepeat + 1);
  }

  useEffect(() => {
    if (active.current) {
      const timer = setTimeout(() => {
        refreshCountdown();
      }, 1000);

      return () => clearTimeout(timer);
    }
  });

  useEffect(() => {
    if (timeRemaining === 0) {
      setActive(active => ({ ...active, current: false }));
    } else {
      setTime({
        minutes: Math.floor((timeRemaining % (60 * 60)) / 60),
        seconds: Math.floor(timeRemaining % 60)
      })
    }
  }, [timeRemaining])


  let possibleTimeButtons = POSSIBLE_TIMES.map((x, i) => {
    return <button onClick={startCountdown(x)} key={i} className={previous.time === x ? 'previous' : null}>
      {x}
    </button>
  });

  return (
    <>
      <div className={"pomodoro-container " + (active.current ? 'active' : 'non-active')}>
        {!active.current &&
          <div className="start-pomodoro">
            {possibleTimeButtons}
          </div>
        }
        {active.current &&
          <div className="current-pomodoro">
            <span>
              {addInitialZero(time.minutes)}
            </span>
            <span className="semicolon">
              :
            </span>
            <span>
              {addInitialZero(time.seconds)}
            </span>
          </div>
        }
        {nRepeat > 0 &&
          // --- Roman numbers ---
          // <div className="pomodoro-times">
          //   <span>
          //     {numberToRoman(nRepeat)}
          //   </span>
          // </div>
          // --- Tally marks ---
          <ol className="pomodoro-times">
            {[...Array(nRepeat).keys()].map((x) => <li key={x}></li>)}
          </ol>
        }
      </div>
    </>

  );
};

export default Pomodoro;
