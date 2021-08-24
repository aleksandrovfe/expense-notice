import './ExpenseItem.css'

export const ExpenseItem = ({date, title, amount}) => {
    const year = date.getFullYear()
    const month = date.toLocaleString('en-US', {month: 'long'})
    const day = date.toLocaleString('en-US', {day: '2-digit'})
    return (
        <div className='expense-item'>
            <div className="expense-item__description">
                <p className="expense-item__date">{year} {month} {day}</p>
                <h2 className="expense-item__title">{title}</h2>
            </div>
            <p className="expense-item__price">${amount}</p>
        </div>
    )
}
