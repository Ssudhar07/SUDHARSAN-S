import React ,{useState} from "react";
import './App.css';
import NewItem from "./components/newItems/NewItem.js";
import ExpenceList from "./components/ExpenceList";
 // second method of giving value to the expence item  in ExpenceList//
const Dummy_Expenses = [
    {
      id: 'e1',
      title: 'Monitor',
      amount: 12094.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'Laptop', amount: 79900.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Cpu',
      amount: 29400.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'Modem',
      amount: 5000,
      date: new Date(2021, 5, 12),
    },
  ];

const App = () => {

   const [expenses, newExpenses] = useState(Dummy_Expenses);
  const addExpense = (expense) => {
    
 newExpenses ((prevExpenses) =>
 {
   return [expense, ...prevExpenses];
 });

    console.log(expenses);
  };
  return (
    <div>
      <NewItem passedExpense={addExpense} />
      <ExpenceList items={expenses} />
    </div>
  );
};

export default App;
