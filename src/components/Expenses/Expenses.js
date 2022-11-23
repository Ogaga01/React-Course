import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import {useState} from 'react'

const Expenses = (props) => {
  const [year, setYear] = useState('2020')

  const changeExpenseYear = (year) => {
    setYear(year)
    console.log(year)
  }

    return (
      <div>
        <Card className="expenses">
          <ExpensesFilter
            selected={year}
            onChangeExpenseYear={changeExpenseYear}
          />
          {props.items.map((expense) => {
            return <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />;
          })}
        </Card>
      </div>
    );
}

export default Expenses