import React from 'react';

class ExpenseForm extends React.Component {
  state = {
    description: '',
    note: '',
    amount: ''
  };

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onAmountChange = e => {
    const amount = e.target.value;
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  render() {
    return (
      <div>
        <form action="">
          <input
            type="text"
            name=""
            id=""
            value={this.state.description}
            onChange={this.onDescriptionChange}
            placeholder="Rent"
            autoFocus
          />
          <input
            type="number"
            value={this.state.amount}
            onChange={this.onAmountChange}
            name=""
            id=""
            placeholder="Amount"
          />
          <textarea
            name=""
            value={this.state.note}
            onChange={this.onNoteChange}
            id=""
            cols="30"
            rows="10"
            placeholder="Add a note for your expense (optional)"
          />
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
