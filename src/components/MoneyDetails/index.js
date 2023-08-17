import {v4} from 'uuid'
import {Fragment} from 'react'
import './index.css'

const MoneyDetailsSection = props => {
  const {income, expenses, balance} = props

  return (
    <>
      <div className="box box1">
        <img
          className="box-image"
          alt="balance"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        />
        <div className="box-text-container">
          <p className="your-balance-title">Your Balance</p>
          <p className="your-balance" data-testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="box box2">
        <img
          className="box-image"
          alt="income"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
        />
        <div className="box-text-container">
          <p className="your-balance-title">Your Income</p>
          <p className="your-balance" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="box box3">
        <img
          className="box-image"
          alt="expenses"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
        />
        <div className="box-text-container">
          <p className="your-balance-title">Your Expenses</p>
          <p className="your-balance" data-testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </div>
    </>
  )
}

export default MoneyDetailsSection
