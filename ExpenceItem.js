import React, { useState } from "react";
import Date from "./Date";
import './ExpenceItem.css';
const ExpenceItem = (props) => {
  const [item, setItem] = useState(props.item);

  const clickHandler = () => {
    setItem('updated');
    console.log(item);
  }
  return (
    <li>
    <div className="expense-item">
      <Date date={props.date} />
      <div className="expense-item__description">
        <h1>{props.item}</h1>
        <div className="expense-item__price">RS.{props.amount}</div>
      </div>
      <button onClick={clickHandler}>edit item</button>
    </div>
    </li>
  );

}

export default ExpenceItem;