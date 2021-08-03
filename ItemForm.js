import React, { useState } from "react";
import "./ItemForm.css";
const ItemForm = (props) => {
    //using multiple state

    const [item, newItem] = useState("");
    const [amount, newAmount] = useState("");
    const [date, newDate] = useState("");

    //using single state

    // const[valueChange,userInput] =useState(
    //   {
    //      newItem:'',
    //      newAmount:'',
    //      newDate:''
    //     }
    // );
    //console.log(valueChange)

    const AddingItem = (event) => {
        newItem(event.target.value);
        //1.
        // userInput (/*using object to edit*/{...valueChange,
        //  newItem: event.target.value})

        //OR//
        //2. 
        //2 is very safe
        //userInput((prevState /*prevState is used to save the latest state */) =>
        //{
        //return
        // ...prevState, newItem: event.target.value });     
    };
    const AddingAmount = (event) => {
        newAmount(event.target.value);
        //1.
        // userInput (/*using object to edit*/{...valueChange,
        //  newItem: event.target.value})

        //OR//
        //2. 
        //2 is very safe
        //userInput((prevState) =>
        //{
        //return
        // ...prevState, newItem: event.target.value });  
    };
    const AddingDate = (event) => {
        newDate(event.target.value);
        //1.
        // userInput (/*using object to edit*/{...valueChange,
        //  newItem: event.target.value})

        //OR//
        //2. 
        //2 is very safe
        //userInput((prevState ) =>
        //{
        //return
        // ...prevState, newItem: event.target.value }); 
    };
    const EnteredList = (event) => {
        event.preventDefault();//preventDefault method is used to stop reload while submitting a form [**important line of code while using a form.

        const TotalList = {
            title: item,
            amount: +amount,
            date: new Date(date)
        };
        props.ExchangeDataTonewItem(TotalList);// this line is called because, to call and pass the values to  the costom component.** note inbuilt components like <input>,<div>,etc. does not need to be called to pass the value.
        //console.log(TotalList);
        newItem('');/* it called because to display the empty values in the form*/
        newAmount('');
        newDate('');
    }


    return (
        <form onSubmit={EnteredList}>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Item</label>
                    <input type="text" max='12' min='4' onChange={AddingItem} value={item}
                /*value attribute is used to know the current value user enter. while calling the  newItem function with the empty string in line 71,72,73. after submiting the form it disply the empty value.*/ />
                </div>
                <div className="new-expense__controls">
                    <label>Price</label>
                    <input type="number" min='0.01' step='0.01' onChange={AddingAmount} value={amount} />
                </div>
                <div className="new-expense__controls">
                    <label>Date</label>
                    <input type="date" max='2019/01/01' min='2022/01/01' onChange={AddingDate} value={date} />
                </div>
                <div className=".new-expense__actions">
                    
                        <button type="button" onClick={props.onCancel}>cancel</button>
                
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
      
    );
}

export default ItemForm;