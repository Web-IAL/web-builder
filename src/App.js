import React, { useState } from "react";
import Spinner from "./components/spinner";
import Badger from "./components/badge";
import Radio from "./components/radiobutton";
import "./styles/App.css";

function App() {
  const [isAndroid, setIsAndroid] = useState(true);

  const data = [
    { title: "Text1", value: 1 },
    { title: "Text2", value: 2 },
  ];

  return (
    <div className="App">
      <button
        className={!isAndroid ? "btnI" : "btnA"}
        onClick={() => setIsAndroid(false)}
      >
        IOS
      </button>
      <button
        className={isAndroid ? "btnI" : "btnA"}
        onClick={() => setIsAndroid(true)}
      >
        ANDROID
      </button>

      <Spinner os={!isAndroid} color="green" />
      <Badger color="info" count={5} />
      <Radio os={!isAndroid} data={data} color="green" />
    </div>
  );
}

export default App;
