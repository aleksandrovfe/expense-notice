import {NewExpenseForm} from "./NewExpenseForm/NewExpenseForm";

export const NewExpense = ({onAddExpense}) => {
    const submitNewExpenseHandler = (data) => {
        const newExpense = {
            ...data,
            id: Math.random()
        }

        onAddExpense(newExpense)
    }
    return (<NewExpenseForm onSubmitNewExpense={submitNewExpenseHandler}/>)
}
