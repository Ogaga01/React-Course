import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import {useState} from 'react'
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

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
          <ExpensesChart expenses={filteredYear} />
          <ExpensesList items={filteredYear}/>
        </Card>
      </div>
    );
}

export default Expenses