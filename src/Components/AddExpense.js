import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { addExpense } from "../Actions/Expenses";
const AddExpense = (props) => {
  return (
    <div>
      Add Expense
      <ExpenseForm
        onSubmit={(expense) => {
          //    dispatch
          console.log(expense);
          props.dispatch(addExpense(expense));
          props.history.push("/");
        }}
      />
    </div>
  );
};

export default connect()(AddExpense);
