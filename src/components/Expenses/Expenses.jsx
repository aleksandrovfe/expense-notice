import React, {useState} from "react";
import {ExpenseFilter} from "./ExpensesList/ExpenseFilter/ExpenseFilter";
import {ExpensesList} from "./ExpensesList/ExpensesList";
import {ExpenseChart} from "./ExpenseChart/ExpenseChart";

export const Expenses = ({expenses}) => {
    const [filteredYear, setFilteredYear] = useState('2021')

    const saveFilteredDateHandler = (date) => {
        setFilteredYear(date)
    }

    const filteredExpenses = expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear)

    return (
        <>
            <ExpenseFilter onSaveFilteredDate={saveFilteredDateHandler} filteredYear={filteredYear}/>
            <ExpenseChart expenses={filteredExpenses}/>
            <ExpensesList expenses={filteredExpenses}/>
        </>
    )
}
