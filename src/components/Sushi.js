import React,{useState} from "react";

function Sushi({sushi,onEaten,remaining}) {
 const [isClicked,setIsClicked]= useState(false)

  const handleClick = (event) => {
    if (remaining -sushi.price > 0 ) {
    setIsClicked(true)
    onEaten(sushi.id)
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {/* Tell me if this sushi has been eaten! */}
        { sushi.isEaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
