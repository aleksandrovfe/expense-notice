import './ExpenseItem.css'
import {ExpenseDate} from "./ExpenseDate/ExpenseDate";
import {Card} from "../Card/Card";

export const ExpenseItem = ({date, title, amount}) => {
    return (
        <Card className='expense-item'>
            <div className="expense-item__description">
                <ExpenseDate date={date}/>
                <h2 className="expense-item__title">{title}</h2>
            </div>
            <p className="expense-item__price">${amount}</p>
        </Card>
    )
}
