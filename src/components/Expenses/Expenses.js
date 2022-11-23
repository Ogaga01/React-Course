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

    return (
      <div>
        <Card className="expenses">
          <ExpensesFilter
            selected={year}
            onChangeExpenseYear={changeExpenseYear}
          />
          {filteredYear.map((expense) => {
            return <ExpenseItem
              key={expense.id}
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