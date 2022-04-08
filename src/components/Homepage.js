import React, { useEffect } from "react";
import Clock from "./Clock";
import Weather from "./Weather";
import HomeCard from "./HomeCard";
import { HOMEPAGE_LINKS } from "../util/constants";
import './styles/Homepage.scss';

const Homepage = () => {

  let homeCards = HOMEPAGE_LINKS.map((x, i) =>
    <HomeCard data={x} key={i} />
  );

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakPoint = 1040;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <>
      <div className="page-header">
        <div className="spacer-container" />

        <Clock />

        {width >= breakPoint ?
          <Weather /> :
          <div className="spacer-container" />}
      </div>
      <div className="card-row">
        {homeCards}
      </div>
    </>
  );
};

export default Homepage;
