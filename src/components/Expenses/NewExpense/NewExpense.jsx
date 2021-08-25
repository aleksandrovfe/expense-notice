import {NewExpenseForm} from "./NewExpenseForm/NewExpenseForm";
import {useState} from "react";
import {AddNewExpenseMessage} from "./AddNewExpenseMessage/AddNewExpenseMessage";

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

    const toggleShowModalHandler = () => setToggleShowModal(prevToggle => !prevToggle)


    if (toggleShowModal) {
        return <NewExpenseForm onSubmitNewExpense={submitNewExpenseHandler} onToggleShowModal={toggleShowModalHandler}/>
    } else {
        return <AddNewExpenseMessage onToggleShowModal={toggleShowModalHandler}/>
    }
}
