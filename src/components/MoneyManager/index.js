import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

import MoneyDetailsSection from '../MoneyDetails'

import CreateHistoryItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    option: transactionTypeOptions[0].optionId,
    title: '',
    transactionsList: [],
    amount: '',
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
    console.log(event.target.value)
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
    console.log(event.target.value)
  }

  onChangeOption = event => {
    this.setState({option: event.target.value})
  }

  addTransaction = event => {
    event.preventDefault()
    const {option, title, amount} = this.state
    const type = transactionTypeOptions.find(obj => obj.optionId === option)

    const newObject = {
      id: uuidv4(),
      title,
      amount: parseInt(amount),
      option: type.displayText,
    }

    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newObject],
      amount: '',
      title: '',
    }))
  }

  getIncome = () => {
    const {transactionsList} = this.state
    let income = 0
    transactionsList.forEach(eachObj => {
      if (eachObj.option === transactionTypeOptions[0].displayText) {
        income += eachObj.amount
      }
    })
    return income
  }

  getBalance = () => {
    const {transactionsList} = this.state
    let income = 0
    let expense = 0
    let balance = 0
    transactionsList.forEach(eachObj => {
      if (eachObj.option === transactionTypeOptions[1].displayText) {
        expense += eachObj.amount
      } else {
        income += eachObj.amount
      }
    })
    balance = income - expense
    return balance
  }

  getExpenses = () => {
    const {transactionsList} = this.state
    let expense = 0
    transactionsList.forEach(eachObj => {
      if (eachObj.option === transactionTypeOptions[1].displayText) {
        expense += eachObj.amount
      }
    })
    return expense
  }

  onDeleteTransaction = id => {
    const {transactionsList} = this.state
    const filteredResult = transactionsList.filter(each => each.id !== id)
    this.setState({
      transactionsList: filteredResult,
    })
  }

  render() {
    const {transactionsList, amount, title} = this.state
    const income = this.getIncome()
    const balance = this.getBalance()
    const expenses = this.getExpenses()
    return (
      <div className="bg-container">
        <div className="greeting-section">
          <h1 className="greeting-title">Hi, Rechard</h1>
          <p className="greeting-description">
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>
        <div className="money-Details-section">
          <MoneyDetailsSection
            income={income}
            balance={balance}
            expenses={expenses}
          />
        </div>
        <div className="transaction-section">
          <form className="form" onSubmit={this.addTransaction}>
            <h1 className="transaction-heading">Add Transaction</h1>
            <div className="input-box">
              <label htmlFor="title" className="label">
                TITLE
              </label>
              <input
                className="input"
                id="title"
                type="text"
                placeholder="Title"
                onChange={this.onChangeTitle}
                value={title}
              />
            </div>
            <div className="input-box">
              <label htmlFor="Amount" className="label">
                AMOUNT
              </label>
              <input
                className="input"
                type="text"
                id="Amount"
                placeholder="Amount"
                onChange={this.onChangeAmount}
                value={amount}
              />
            </div>
            <div className="input-box">
              <label htmlFor="Type" className="label">
                TYPE
              </label>
              <select
                className="input"
                onChange={this.onChangeOption}
                id="Type"
              >
                {transactionTypeOptions.map(eachItem => (
                  <option value={eachItem.optionId} key={eachItem.optionId}>
                    {eachItem.displayText}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="submit-btn">
              Add
            </button>
          </form>
          <div className="history-section">
            <h1 className="transaction-heading">History</h1>
            <div className="history-container">
              <div className="top-bar">
                <p className="transaction-title">Title</p>
                <p className="transaction-amount">Amount</p>
                <p className="transaction-type">Type</p>
              </div>
              <ul className="history-items">
                {transactionsList.map(eachItem => (
                  <CreateHistoryItem
                    historyDetails={eachItem}
                    onDeleteTransaction={this.onDeleteTransaction}
                    key={eachItem.id}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
