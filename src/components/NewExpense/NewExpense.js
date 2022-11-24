import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
import { useState } from 'react'

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setIsEditing(false)
    }

    const startEditing = () => {
        setIsEditing(true)
    }

    const stopEditing = () => {
        setIsEditing(false)
    }

    return (
      <div className="new-expense">
        {isEditing ? (
          <ExpenseForm onCancel={stopEditing} onSaveExpenseData={saveExpenseDataHandler} />
        ) : (
          <button type="button" onClick={startEditing}>
            Add new expense
          </button>
        )}
      </div>
    );
}

export default NewExpense