import React, {useState} from "react";
import {ExpenseFilter} from "./ExpensesList/ExpenseFilter/ExpenseFilter";
import {ExpensesList} from "./ExpensesList/ExpensesList";

export const Expenses = ({expenses}) => {
    const [filteredYear, setFilteredYear] = useState('2021')

    const saveFilteredDateHandler = (date) => {
        setFilteredYear(date)
    }

    const filteredExpenses = expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear)

    return (
        <>
            <ExpenseFilter onSaveFilteredDate={saveFilteredDateHandler} filteredYear={filteredYear}/>
            <ExpensesList expenses={filteredExpenses}/>
        </>
    )
}
