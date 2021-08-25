import './AddNewExpenseMessage.css'

export const AddNewExpenseMessage = ({onToggleShowModal}) => {
    return (
        <div className="add-expense-message">
            <button className="add-expense-message__btn" onClick={onToggleShowModal}>Add New Expense</button>
        </div>
    )
}
