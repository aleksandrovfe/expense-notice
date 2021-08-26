import {Chart} from "../../Chart/Chart";

export const ExpenseChart = ({expenses}) => {
    const dataPoints = [
        {value: 0, label: 'Jan', id: 1},
        {value: 0, label: 'Feb', id: 2},
        {value: 0, label: 'Mar', id: 3},
        {value: 0, label: 'Apr', id: 4},
        {value: 0, label: 'May', id: 5},
        {value: 0, label: 'Jun', id: 6},
        {value: 0, label: 'Jul', id: 7},
        {value: 0, label: 'Aug', id: 8},
        {value: 0, label: 'Sep', id: 9},
        {value: 0, label: 'Oct', id: 10},
        {value: 0, label: 'Nov', id: 11},
        {value: 0, label: 'Dec', id: 12},
    ]

    for (let expense of expenses) {
        const expensesMonth = expense.date.getMonth()
        dataPoints[expensesMonth].value += +expense.amount
    }

    return <Chart dataPoints={dataPoints}/>
}
