import React, { useState } from "react";
import moment from "moment";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

const ExpenseForm = (props) => {
  const [description, setDescription] = useState(props.expense.description);
  const [note, setNote] = useState(props.expense.note);
  const [amount, setAmount] = useState(props.expense.amount);
  const [createdAt, setcreatedAt] = useState(moment(props.expense.createdAt));
  const [calenderFocused, setcalenderFocused] = useState(false);
  const [error, seterror] = useState("");

  const onDescriptionChange = (e) => {
    const Description = e.target.value;
    setDescription(Description);
  };

  const onNoteChnage = (e) => {
    const Note = e.target.value;
    setNote(Note);
  };

  const onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setAmount(amount);
    }
  };

  const onDateChange = (createdAt) => {
    if (createdAt) {
      setcreatedAt(createdAt);
    }
  };

  const onFocusChange = ({ focused }) => {
    setcalenderFocused(focused);
    console.log("value of focused", focused);
  };

  const onsubmit=(e)=>{
    e.preventDefault()
  props.onFormSubmit({
    description : description,
    amount: parseFloat(amount,10) * 100,
    createdAt : createdAt.valueOf(),
    note : note
  });
  }
 
  return (
    <div>
      <form onSubmit={onsubmit}>
        <input
          type="input"
          placeholder="Description"
          autoFocus
          value={description}
          onChange={onDescriptionChange}
        />
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={onAmountChange}
        />

        <SingleDatePicker
          date={createdAt} // momentPropTypes.momentObj or null
          onDateChange={onDateChange} // PropTypes.func.isRequired
          focused={calenderFocused} // PropTypes.bool
          onFocusChange={onFocusChange} // PropTypes.func.isRequired
          numberOfMonths={1}
          isOutsideRange={() => false}
        />

        <textarea
          placeholder="Add a note (Optional)"
          value={note}
          onChange={onNoteChnage}
        />
        <button type="submit">Save Changes</button>
        <p>{error}</p>
      </form>
    </div>
  );
};

export default ExpenseForm;
