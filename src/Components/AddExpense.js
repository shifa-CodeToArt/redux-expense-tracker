import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { StartAddExpense } from "../Actions/Expenses";
const AddExpense = (props) => {
  return (
    <div>
    <div className="page-header">
    <div className="content_container">
    <h1  className="page-header__title">Add Expense</h1>
    </div>
    </div>
      
      <div className="content_container">
      <ExpenseForm
        onSubmit={(expense) => {
          //    dispatch
          console.log(expense);
          props.dispatch(StartAddExpense(expense));
          props.history.push("/dashboard");
        }}
      />
      </div>
    </div>
  );
};

export default connect()(AddExpense);
