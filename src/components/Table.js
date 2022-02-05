import React from "react";
import Wallet from "./Wallet";

function Table({ plates,remaining,onAddMoney}) {


  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  return (
    <>
      <h1 className="remaining">
        You have: ${remaining} remaining!
      </h1>
      < Wallet onAddMoney={onAddMoney}  />
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
