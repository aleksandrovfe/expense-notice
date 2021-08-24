import './ExpenseItem.css'
import {ExpenseDate} from "./ExpenseDate/ExpenseDate";

export const ExpenseItem = ({date, title, amount}) => {
    return (
        <div className='expense-item'>
            <div className="expense-item__description">
                <ExpenseDate date={date}/>
                <h2 className="expense-item__title">{title}</h2>
            </div>
            <p className="expense-item__price">${amount}</p>
        </div>
    )
}
