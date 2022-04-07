import React from 'react';
import { boolTrue } from '../util/util';
import './styles/HomeCard.scss';

const HomeCard = (props) => {

  const goTo = (data) => (e) => {
    e.preventDefault();
    let url = boolTrue(process.env.REACT_APP_SECRET) && data.secret ? process.env.REACT_APP_REDIRECT_URL : data.url;
    window.open(url, '_blank');
    //window.location.href = url
  }
  const data = props.data;

  return (

    <div className={"home-card " + data.icon} tabIndex="0">
      <div className="icon-card" onClick={goTo(data)}>
        <img src={require(`./svgs/logos/${data.icon}_logo.svg`)} alt={data.icon}
          className={"svg " + data.icon} />
      </div>
      <div className="text-card" onClick={goTo(data)}>
        <span>
          {data.text}
        </span>
      </div>
      {data.icon === 'twitch' && !boolTrue(process.env.REACT_APP_SECRET) &&
        <img src={require(`./svgs/xqcl.png`)} alt="xQc Twitch channel"
          className="extra"
          onClick={goTo({ secret: false, url: "https://www.twitch.tv/xqcow" })} />}
    </div>
  )
}

export default HomeCard;