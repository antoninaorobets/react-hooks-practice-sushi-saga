import React,{useState,useEffect} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis,onEatenSushi, remaining}) {
  const [numOfSushis,setNumOfSushis] = useState(0)
  
  const onMoreButtonClick = () => {
    const numb = sushis.length
    if (numOfSushis + 4 <  sushis.length) { 
    setNumOfSushis(numOfSushis + 4) }
    else {setNumOfSushis(0)}
  } 
 
  return (
    <div className="belt">
      {sushis.slice(numOfSushis,numOfSushis + 4).map(item=> <Sushi key={item.id} sushi={item} remaining={remaining} onEaten={onEatenSushi}/>)}
      <MoreButton onMoreButtonClick={onMoreButtonClick} />
    </div>
  );
}

export default SushiContainer;
