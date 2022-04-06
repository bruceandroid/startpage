import React, { useState, useEffect } from "react";
import { WEATHER } from '../util/constants';
import './styles/Weather.scss';

const Weather = () => {

  let [loading, setLoading] = useState(true);
  let [weather, setWeather] = useState('');

  let now = new Date();
  let nightTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), WEATHER.NIGHT_TIME.hours, WEATHER.NIGHT_TIME.minutes);
  let dayTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), WEATHER.DAY_TIME.hours, WEATHER.DAY_TIME.minutes);
  let timeOfDay = 'day';
  if (dayTime < now) {
    if (nightTime < now) {
      timeOfDay = 'night';
    } else {
      timeOfDay = 'day';
    }
  } else {
    if (nightTime < now) {
      timeOfDay = 'day';
    } else {
      timeOfDay = 'night';
    }
  }

  useEffect(() => {
    let alreadyHappened = false;
    const fetchData = async () => {
      if (!alreadyHappened) {
        setLoading(true);
        const data = await fetch(WEATHER.URL);
        const json = await data.json();
        const mainData = json.data.filter(x => x.globalIdLocal === WEATHER.LISBON_CODE)[0];
        const weatherCode = WEATHER.CODES[mainData.idWeatherType];
        setWeather({ ...mainData, filename: weatherCode.same ? weatherCode.text : weatherCode.text + '_' + timeOfDay });
        setLoading(false);
      }
    }
    fetchData()
      .catch(() => {
        setLoading(false);
        setWeather({ tMin: '-', tMax: '-', filename: 'no_info' });
      });
    return () => alreadyHappened = true;
  }, [timeOfDay]);

  return (
    <>
      {!loading &&
        <div className="weather-container">
          <img src={require(`./svgs/weather/${weather.filename}.svg`)} alt={weather.filename} />
          <div className="temp">
            <span className="max">
              {weather.tMax}
              <span className="degrees">º</span>
            </span>
            <span className="min">
              {weather.tMin}
              <span className="degrees">º</span>
            </span>
          </div>
        </div>
      }
    </>

  );
};

export default Weather;
