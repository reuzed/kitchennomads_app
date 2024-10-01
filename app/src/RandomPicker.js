import { useState } from "react";
import "./App.css";
import { random } from "mathjs";

const countries = [
  "Suriname",
  "Laos",
  "Lesotho",
  "Fiji",
  "Czechia",
  "Democratic People's Republic of Korea",
];

function RandomPicker() {
  const [countdown, setCountdown] = useState(10);

  if (countdown > 0) {
    return (
      <button className="bigbutton" onClick={() => setCountdown((x) => x - 1)}>
        {countdown}
      </button>
    );
  } else {
    return (
      <div className="bigtext">
        You're receiving food from {countries[Math. floor(random(0, 5))]}
      </div>
    );
  }
}

export default RandomPicker;
