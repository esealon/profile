import React, { useState } from "react";
import NavBar from "./NavBar";
import NavBarTop from "./NavBarTop";
import NavBarProjects from "./NavBarProjects";
import LuckyN from "./projects/Dice/LuckyN";
import { sum } from "./projects/Dice/utils";

function lessThan4(dice) {
  return sum(dice) < 4;
}

//check if every value (dice) is equal to the first value (position 0), that is why we use dice[0]
function allSameValue(dice) {
  return dice.every((v) => v === dice[0]);
}

function App() {
  return (
    <>
      <NavBarTop />
      <NavBar />
      {/* <LuckyN winCheck={lessThan4} title="Roll less than 4" />
      <LuckyN winCheck={allSameValue} title="Roll all equal" /> */}
    </>
  );
}

export default App;
