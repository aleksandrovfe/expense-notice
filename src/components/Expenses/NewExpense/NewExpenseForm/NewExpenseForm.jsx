import './NewExpenseForm.css'
import {Card} from "../../ExpensesList/Card/Card";
import {useState} from "react";

export const NewExpenseForm = ({onSubmitNewExpense}) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const onChangeTitleHandler = (event) => setEnteredTitle(event.target.value)
    const onChangeAmountHandler = (event) => setEnteredAmount(event.target.value)
    const onChangeDateHandler = (event) => setEnteredDate(event.target.value)
    const onSubmitFormHandler = (event) => {
        event.preventDefault()

        onSubmitNewExpense({
            title: enteredTitle,
            amount: enteredAmount,
            date: enteredDate
        })
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }

    return (
        <form className='form' onSubmit={onSubmitFormHandler}>
            <Card>
                <div className='form__inputs'>
                    <div className='form__input-box'>
                        <label className='form__label' htmlFor="title">Title</label>
                        <input value={enteredTitle} onChange={onChangeTitleHandler} className='form__input' id="title" type="text"/>
                    </div>
                    <div className='form__input-box'>
                        <label className='form__label' htmlFor="amount">Amount</label>
                        <input value={enteredAmount} onChange={onChangeAmountHandler} className='form__input' id="amount" type="number" min="0.01" step="0.01"/>
                    </div>
                    <div className='form__input-box'>
                        <label className='form__label' htmlFor="date">Date</label>
                        <input value={enteredDate} onChange={onChangeDateHandler} className='form__input' id="date" type="date" min="2019-01-01" max="2022-12-31"/>
                    </div>
                </div>
                <div className="form__actions">
                    <button className="form__submit-btn">Add new expense</button>
                </div>
            </Card>
        </form>
    )
}
