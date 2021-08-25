import {NewExpenseForm} from "./NewExpenseForm/NewExpenseForm";
import {useState} from "react";

export const NewExpense = ({onAddExpense}) => {
    const [toggleShowModal, setToggleShowModal] = useState(false)

    const submitNewExpenseHandler = (data) => {
        const newExpense = {
            ...data,
            id: Math.random(),
            date: new Date(data.date)
        }

        onAddExpense(newExpense)
    }

    if (toggleShowModal) {
        return <NewExpenseForm onSubmitNewExpense={submitNewExpenseHandler}/>
    } else {
        return <AddNewExpenseMessage />
    }

}
