import React, { useState } from "react";
import moment from "moment";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

// const now = moment();
// console.log(now.format("MMM Do, YYYY"));

const ExpenseForm = (props) => {

  const [description, setDescription] = useState("");
  const [note, setNote] = useState("");
  const [amount, setAmount] = useState("");
  const [createdAt, setcreatedAt] = useState(moment());
  const [calenderFocused, setcalenderFocused] = useState(false);
  const [error,seterror] = useState("")

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
  const Onsubmit = (e) => {
    e.preventDefault();

 if(!description || !amount){
    //  please provide description and amount
    seterror("please provide description and amount")
 }else{
    //  clear error
    seterror("");
      props.onSubmit({
        description : description,
        amount: parseFloat(amount,10) * 100,
        createdAt : createdAt.valueOf(),
        note : note

      });
 }

  };
  return (
      <form className="form" onSubmit={Onsubmit}>
      {error && <p className="form__error">{error}</p>}
        <input
          type="input"
          placeholder="Description"
          autoFocus
          className="text_input"
          value={description}
          onChange={onDescriptionChange}
        />
        <input
        className="text_input"
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
        className="text_area"
          placeholder="Add a note (Optional)"
          value={note}
          onChange={onNoteChnage}
        />
        <div>
        <button className="button" type="submit">Add Expense</button>
        </div>
       
        
      </form>

  );
};

export default ExpenseForm;
