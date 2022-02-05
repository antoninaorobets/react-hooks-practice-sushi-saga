import React,{useState,useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [allSushis, setAllSushi] = useState([])
  const [plates, setPlates] = useState([])
  const [remaining,setremaining] = useState(100)
  useEffect(()=>{
    fetch(API).then(resp=>resp.json()).then(data=>setAllSushi(data))
  },[])

  const onEatenSushi = (id)=>{
    const eatenSushi= allSushis.find(item=>item.id === id)
    setPlates([...plates,1])
    setremaining(remaining-eatenSushi.price)
    setAllSushi(allSushis.map(item=>{
      if (item.id === id) {return {...item, isEaten: true}}
    else {return item}}))
    
  }
  console.log(allSushis)
  const onAddMoney = (amountAdded)=>{
    setremaining(remaining+amountAdded)
  }
  
  return (
    <div className="app">
      <SushiContainer  sushis={allSushis} onEatenSushi={onEatenSushi} remaining={remaining}/>
      <Table plates={plates} remaining={remaining} onAddMoney={onAddMoney}/>
    </div>
  );
}

export default App;
