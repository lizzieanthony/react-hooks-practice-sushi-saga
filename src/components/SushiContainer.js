import React from "react";
import Sushi from "./Sushi"
import MoreButton from "./MoreButton";

function SushiContainer({sushis, eatSushi}) {
  return (
    <div className="belt">
      {sushis.map(s => <Sushi eatSushi={eatSushi} key={s.id} {...s}/>)}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
