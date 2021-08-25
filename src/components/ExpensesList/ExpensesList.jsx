import React from "react";
import {ExpenseItem} from "./ExpenseItem/ExpenseItem";
import {ExpenseFilter} from "./ExpenseFilter/ExpenseFilter";
import './ExpensesList.css'

export const ExpensesList = ({expenses, saveFilteredDate}) => {
    return (
        <>
            <ExpenseFilter onSaveFilteredDate={saveFilteredDate}/>
            <div className="expenses-list">
                {expenses.map(item => (
                    <React.Fragment key={item.id}>
                        <ExpenseItem date={item.date} title={item.title} amount={item.amount}/>
                    </React.Fragment>
                ))}
            </div>
        </>
    )
}
