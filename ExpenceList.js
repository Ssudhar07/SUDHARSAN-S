import React, { useState } from "react";
import "./ExpenseList.css";
import AddFilter from "./newItems/AddFilter";
import Expences from "./Expences";
import ExpenceChart from "./ExpenceChart";
const ExpenceList = (props) => {

  //first method of giving value to the expence item

  //   const expence = [{date:new Date(2021, 2, 10),item:"laptop", price: 1000},
  // {date:new Date(2021, 5, 11),item:"mouse", price: 39},
  // {date:new Date(2021, 7, 30),item:"keyboard", price: 54},
  // {date:new Date(2021, 3, 22),item:"Cpu", price: 1500}];

  const [yearChange, FilterYear] = useState("2021");
  const yearFilter = (changeYear) => {
    FilterYear(changeYear);
  }
  // This part of coding is to get the year filtered 
 const filteryear = props.items.filter( expence =>
  {
   return expence.date.getFullYear().toString() === yearChange;
   });

                                              /* third  method inside the component*/
                                               /* outputting conditonal content  */

  //  let expenceContent = <p>No match found</p>
   
  //  if (filteryear.length > 0)
  //  {
  //  expenceContent = filteryear.map((expence) => (<ExpenceItem key = {expence.id} item = {expence.title} amount = {expence.amount} date = {expence.date}  />))
  //  }

  return (
    <div>
      <div className="expenses">
        <AddFilter SelectedYear={yearChange} onfilterYear={yearFilter} />
        {/* first method value calling */}
        {
    /* <ExpenceItem date={expence[0].date} item={expence[0].item} price={expence[0].price} />
    <ExpenceItem date={expence[1].date} item={expence[1].item} price={expence[1].price} />
    <ExpenceItem date={expence[2].date} item={expence[2].item} price={expence[2].price} />
    <ExpenceItem date={expence[3].date} item={expence[3].item} price={expence[3].price} /> */}

        {/* second method value calling from app component to display the values oly*/}

        {/* <ExpenceItem item={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
        <ExpenceItem item={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
        <ExpenceItem item={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
        <ExpenceItem item={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} /> */}
                               
                               {/* or */}

         {/* this method of value calling is used to add new list to the list that already we have {where "filteryear" is assigned in the line 19} instead of using props.items */}
        
                                                       {/* first method inside jsx snippet*/}
                                              {/* outputting conditonal content  */}
        
        {/* {filteryear.length === 0 ? <p>No match found</p> : filteryear.map((expence) => (<ExpenceItem key = {expence.id} item = {expence.title} amount = {expence.amount} date = {expence.date}  />))} */}
        
                                                              {/* OR */}
                                                             {/* second method inside jsx snippet  */} 
                                                     {/* outputting conditonal content  */}
        {/* {filteryear.length === 0 && <p>No match found</p>}
        {filteryear.length === 0 && filteryear.map((expence) => (<ExpenceItem key = {expence.id} item = {expence.title} amount = {expence.amount} date = {expence.date}  />))} */}
              
              {/* this line of code ie.58 is to display the content without and conditional content eg. <p>No match found  */}
       {/* {filteryear.map((expence) => (<ExpenceItem key = {expence.id} item = {expence.title} amount = {expence.amount} date = {expence.date}  />))} */}

       {/* {expenceContent} */} {/* this line is called based on the code executed on the line 27 to 32*/} 

        <ExpenceChart expenses = {filteryear}/>
        <Expences items={filteryear} />
        
      </div>
    </div>
  );
}

export default ExpenceList;