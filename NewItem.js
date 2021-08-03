import React,{useState} from 'react';
import "./NewItem.css";
import ItemForm from "./ItemForm";

// this component is a example for how  to add and pass the value to the all the props or other components


const NewItem = (props) => {

  const [toclickcancle, toinitiateCancle]= useState(false);

  const ExchangeParentvalueToAnychild = (PassedValues) => {
    const TotalList = {
      ...PassedValues,
      id : Math.random().toString()
    }
    console.log(TotalList);
    props.passedExpense(TotalList);
  }

 const toshowaddnewExpense =() =>{
   toinitiateCancle (true);
 };
 const tohideaddnewExpense =() =>{
   toinitiateCancle (false);
 };
  return (
    <div className="new-expense">
      {/* In line 29 and 30  ! and && used for conditional rendering */}
     {!toclickcancle && <button onClick={toshowaddnewExpense}>Add New Expense</button>}
     {toclickcancle && <ItemForm ExchangeDataTonewItem={ExchangeParentvalueToAnychild} onCancel={tohideaddnewExpense} />}
    </div>
  );
}
export default NewItem;