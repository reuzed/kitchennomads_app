import { useState } from "react";
import "./App.css";

import cardboard_box from "./assets/cardboard_box_bgless.png";

function BoxOpener({ setOpened }) {
  const [countdown, setCountdown] = useState(6);
  if (countdown == 0) {
    setOpened(true);
  }
  return (
    <div className={countdown % 2 == 0 ? "leftbox" : "rightbox"}>
      <img src={cardboard_box} onClick={() => setCountdown((x) => x - 1)} />
    </div>
  );
}

export default BoxOpener;
