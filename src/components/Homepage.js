import React from "react";
import Clock from "./Clock";
import Weather from "./Weather";
import HomeCard from "./HomeCard";
import { HOMEPAGE_LINKS } from "../util/constants";
import './styles/Homepage.scss';

const Homepage = () => {

  let homeCards = HOMEPAGE_LINKS.map((x, i) =>
    <HomeCard data={x} key={i} />
  );

  return (
    <>
      <div className="page-header">
        <div className="spacer-container"/>
        <Clock />
        <Weather />
      </div>
      <div className="card-row">
        {homeCards}
      </div>
    </>
  );
};

export default Homepage;
