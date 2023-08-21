import './index.css'

const CreateHistoryItem = props => {
  const {historyDetails, onDeleteTransaction} = props
  const {id, title, amount, option} = historyDetails

  const onDeleteHistory = () => {
    onDeleteTransaction(id)
  }

  return (
    <li className="history-item">
      <p className="transaction-title">{title}</p>
      <p className="transaction-amount">Rs {amount}</p>
      <p className="transaction-type">{option}</p>
      <button
        type="button"
        className="delete-btn"
        onClick={onDeleteHistory}
        data-testid="delete"
      >
        <img
          className="delete-btn-image"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        />
      </button>
    </li>
  )
}

export default CreateHistoryItem
