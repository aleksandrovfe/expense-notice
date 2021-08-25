import './NewExpenseForm.css'
import {Card} from "../../ExpensesList/Card/Card";

export const NewExpenseForm = () => {
    return (
        <form className='form'>
            <Card>
                <div className='form__inputs'>
                    <div className='form__input-box'>
                        <label className='form__label' htmlFor="title">Title</label>
                        <input className='form__input' id="title" type="text"/>
                    </div>
                    <div className='form__input-box'>
                        <label className='form__label' htmlFor="amount">Amount</label>
                        <input className='form__input' id="amount" type="number" min="0.01" step="0.01"/>
                    </div>
                    <div className='form__input-box'>
                        <label className='form__label' htmlFor="date">Date</label>
                        <input className='form__input' id="date" type="date" min="2019-01-01" max="2022-12-31"/>
                    </div>
                </div>
                <div className="form__actions">
                    <button className="form__submit-btn">Add new expense</button>
                </div>
            </Card>
        </form>
    )
}
