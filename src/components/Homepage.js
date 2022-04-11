import React, { useEffect } from "react";
import Pomodoro from "./Pomodoro";
import Clock from "./Clock";
import Weather from "./Weather";
import HomeCard from "./HomeCard";
import SearchBar from "./SearchBar";
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
        {width >= breakPoint ?
          <Pomodoro /> :
          <div className="spacer-container" />
        }

        <Clock />

        {width >= breakPoint ?
          <Weather /> :
          <div className="spacer-container" />
        }
      </div>
      {width >= breakPoint &&
        <div className="card-row search">
          <SearchBar />
        </div>
      }
      <div className="card-row last">
        {homeCards}
      </div>
    </>
  );
};

export default Homepage;
