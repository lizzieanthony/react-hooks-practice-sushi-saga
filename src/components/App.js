import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
const [sushis, setSushi] = useState([])
const [position, setPosition] = useState(0)
const [eatenSushi, setEaten] = useState([])

useEffect(async () => {
  const response = await fetch(API)
  const sushiData = await response.json()

  setSushi(sushiData)
}, []); 

const handleEatSushi = (id) => {
  if(!eatenSushi.includes(id)){
    const newEaten = [...eatenSushi, id]
    setEaten(newEaten)
  }
}

  return (
    <div className="app">
      <SushiContainer eatSushi={handleEatSushi} sushis={sushis.slice(position, position + 4)}/>
      <Table plates={eatenSushi}/>
    </div>
  );
}

export default App;
