import {Card} from "../Card/Card";
import './ExpenseFilter.css'

export const ExpenseFilter = ({onSaveFilteredDate, filteredYear}) => {
    const onChangeSelectHandler = (event) => onSaveFilteredDate(event.target.value)

    return (
        <Card className="expense-filter">
            <label className="expense-filter__label" htmlFor="years">Filter by year</label>
            <select value={filteredYear} onChange={onChangeSelectHandler} className="expense-filter__select" id="years">
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
            </select>
        </Card>
    )
}
