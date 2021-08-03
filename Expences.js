// This is to create a sperate component and render the active list it is so... called return conditional content 
import React from "react";
import "./Expences.css";
import ExpenceItem from "./ExpenceItem";
const Expences = (props) =>{
    if(props.items.length === 0)
    {
        return  <h2 className="expenses-list__fallback">Match Not Found</h2>;
    }
    return (
        <ul className="expenses-list">
     {
       props.items.map((expence) => (<ExpenceItem key = {expence.id} item = {expence.title} amount = {expence.amount} date = {expence.date}  />)
        )
            }
        
    </ul>
    );
}

export default Expences;