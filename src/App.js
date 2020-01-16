import React, { useState } from "react";
import "./App.css";
import Container from './Components/Body/Container';
import Header from './Components/Head/Header';

function App() {
  const [date, setDate] = useState("");
  console.log(date);

  return (
    <div className="App">
      <Header newDate={setDate} />
      <Container newDate={date} />
    </div>
  );
}

export default App;
//date={data.date} 