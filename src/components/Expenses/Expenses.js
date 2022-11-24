import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import {useState} from 'react'

const Expenses = (props) => {
  const [year, setYear] = useState('2020')

  const filteredYear = props.items.filter((expense) => {
      return expense.date.getFullYear().toString() === year
    })
  

  const changeExpenseYear = (year) => {
    setYear(year)
  }

  let expenseContent = <p>No expense for this year</p>

  if (filteredYear.length > 0) {
    expenseContent = filteredYear.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    });
  }

    return (
      <div>
        <Card className="expenses">
          <ExpensesFilter
            selected={year}
            onChangeExpenseYear={changeExpenseYear}
          />
          {expenseContent}
        </Card>
      </div>
    );
}

export default Expenses