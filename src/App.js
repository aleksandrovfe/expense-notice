import React from "react";
import {ExpensesList} from "./components/ExpensesList/ExpensesList";
import {NewExpense} from "./components/NewExpense/NewExpense";

function App() {
    const expenses = [
        {id: 1, date: new Date(2021, 3, 12), title: 'Car insurance', amount: 254.83},
        {id: 2, date: new Date(2020, 5, 8), title: 'Dog insurance', amount: 1254.11},
        {id: 3, date: new Date(2021, 9, 2), title: 'Frog insurance', amount: 4.24},
    ]

    return (
        <>
            <NewExpense />
            <ExpensesList expenses={expenses}/>
        </>
    );
}

export default App;
