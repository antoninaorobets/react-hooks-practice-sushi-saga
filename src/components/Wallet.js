import React,{useState} from 'react';

function Wallet({onAddMoney}) {
    const [addedCash,setCash] = useState("")
    const handleSubmit = (event)=>{
        event.preventDefault()
        if (addedCash>0) {
        onAddMoney(parseInt(addedCash))}
        setCash("")
    }
  return <div>
      <form onSubmit={handleSubmit}>
          <label>Add money: </label>
          <input type="number" value={addedCash} onChange={(event)=>setCash(event.target.value)}></input>
          <input type="submit" name="Add money"></input>
      </form>
  </div>;
}

export default Wallet;
