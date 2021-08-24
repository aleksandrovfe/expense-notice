import './ExpenseDate.css'

export const ExpenseDate = ({date}) => {

    const year = date.getFullYear()
    const month = date.toLocaleString('en-US', {month: 'long'})
    const day = date.toLocaleString('en-US', {day: '2-digit'})

    return (
        <div className="expense-date">
            <p className="expense-date__month">{month}</p>
            <p className="expense-date__year">{year}</p>
            <p className="expense-date__day">{day}</p>
        </div>
    )
}
