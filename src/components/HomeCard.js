import React from 'react';
import './styles/HomeCard.scss';

const HomeCard = (props) => {

  const goTo = url => () => {
    window.location.href = url;
  }

  return (

    <div className={"home-card " + props.icon} tabIndex="0" onClick={goTo(props.url)}>
      <div className="icon-card">
        <img src={require(`./svgs/logos/${props.icon}_logo.svg`)} alt={props.icon} className={"svg " + props.icon} />
      </div>
      <div className="text-card">
        <span>
          {props.text}
        </span>
      </div>
    </div>
  )
}

export default HomeCard;