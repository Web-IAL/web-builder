import React, { useState } from "react";
import Spinner from "./components/spinner";
import Badger from "./components/badge";
import Radio from "./components/radiobutton";
import Text from "./components_header/Text";
import Button from "./components_header/Button";
import IconLeft from "./components_header/LeftIcon";
import MenuLeft from "./components_header/MenuLeft";

import Card from "./components_card/card";
import CardItem from "./components_card/cardItem";

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

      <Text color="blue">Header</Text>

      <MenuLeft ios={!isAndroid}></MenuLeft>
      <IconLeft ios={!isAndroid}></IconLeft>

      <Card>
        <CardItem ios={!isAndroid} >
        <Text >Header</Text>
        </CardItem>
        <CardItem ios={!isAndroid}>
          <Text>Body</Text>
        </CardItem>
        <CardItem ios={!isAndroid} >
          <Text>Footer</Text>
        </CardItem>
      </Card>

      <Button ios={!isAndroid} bordered color="danger">
        <Text color="danger" size="14px" weight="500">
          Danger
        </Text>
      </Button>

      <Spinner ios={!isAndroid} color="blue" />
      <Badger color="primary" count={5} />
      <Radio ios={!isAndroid} data={data} color="green" />
    </div>
  );
}

export default App;
