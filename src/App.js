import React, {useState} from "react";
import {NewExpense} from "./components/Expenses/NewExpense/NewExpense";
import {Expenses} from "./components/Expenses/Expenses";

function App() {
    const dummyExpenses = [
        {id: 1, date: new Date(2021, 3, 12), title: 'Car insurance', amount: "254.83"},
        {id: 2, date: new Date(2020, 5, 8), title: 'Dog insurance', amount: "1254.11"},
        {id: 3, date: new Date(2021, 9, 2), title: 'Frog insurance', amount: "4.24"},
    ]

    const [expenses, setExpenses] = useState(dummyExpenses)

    const addExpenseHandler = (newExpense) => {
        setExpenses(prevExpenses => [newExpense, ...prevExpenses])
    }

    return (
        <>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses expenses={expenses}/>
        </>
    );
}

export default App;
