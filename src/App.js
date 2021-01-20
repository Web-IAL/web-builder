import React from "react";
// import ReactDom from "react-dom";

import Button from "./Button";
import Header from "./components-header/Header";
import Title from "./components-header/Title";
import Subtitle from "./components-header/Subtitle";
import Text from "./components-header/Text";
import IconLeft from "./components-header/IconLeft";
import IconMenu from "./components-header/IconMenu";
import TestButton from "./button1";

import CardItem from "./components-cards/CardItem";
import Card from "./components-cards/Card";

import "./App.css";
import { DistributeVertical } from "react-bootstrap-icons";

export default function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header>Header</Header>
      <Header android>Header</Header>

      {/* Title */}
      <Title>Title</Title>
      <Title android>Title</Title>

      {/* Subtitle */}
      <Subtitle>Subtitle</Subtitle>
      <Subtitle android>Subtitle</Subtitle>

      <Card >
        <CardItem header >
          <Text CardHeader>CardItemHeader</Text>
        </CardItem>
        <CardItem >
          <Text body>
            {" "}
            NativeBase is made from effective building blocks referred to as
            components. The Components are constructed in pure React Native
            platform along with some JavaScript functionality with rich set of
            customisable properties. These components allow you to quickly build
            the perfect interface
          </Text>
        </CardItem>
        <CardItem footer>
          <Text CardHeader>CardItemFooter</Text>
        </CardItem>
      </Card>



      <Card >
        <CardItem header bordered >
          <Text CardHeader>CardItemHeader</Text>
        </CardItem>
        <CardItem bordered>
          <Text body>
            {" "}
            NativeBase is a free and open source framework that enable
            developers to build
            high-quality mobile apps using React Native iOS and Android
            apps with a fusion of ES6.
          </Text>
        </CardItem>
        <CardItem footer bordered>
          <Text CardHeader>CardItemFooter</Text>
        </CardItem>
      </Card>

      <Text>Back</Text>
      <Text>Cancel</Text>
      <Text android>Cancel</Text>

      <IconLeft></IconLeft>
      <IconLeft ios></IconLeft>

      <IconMenu android></IconMenu>


      <Button light>light</Button>
      <Button light and>light</Button>

      <Button info>Info</Button>
      <Button info and>Info</Button>


      <Button primary>Primary</Button>
    </div>
  );
}

// import React, { useState } from "react";
// import "./App.css";
// import Header from "./components-header/Header";


// function App() {
//   const [isAndroid, setIsAndroid] = useState(true);


//   return (
//     <div className="App">
//       <button
//         className={!isAndroid ? "btnI" : "btnA"}
//         onClick={() => setIsAndroid(false)}
//       >
//         IOS
//       </button>
//       <button
//         className={isAndroid ? "btnI" : "btnA"}
//         onClick={() => setIsAndroid(true)}
//       >
//         ANDROID
//       </button>
//       <Header ></Header>
//       <Card>
//         <CardItem></CardItem>
//       </Card>
//       {/* <Button>light</Button> */}
//       {/* <Button ios={!isAndroid} primary>Primary</Button> */}
//     </div>
//   );
// }

// export default App;