import React from "react";
import { connect } from "react-redux";
import ExpenseForm1 from "./ExpenseForm1";
import { editExpense } from "../Actions/Expenses";
import { removeExpense } from "../Actions/Expenses";
const EditExpense = (props) => {
  return (
    <div>
      <ExpenseForm1
        expense={props.expense}
        onFormSubmit={(expense) => {
          // dispatch
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push("/");
          console.log("updated", expense);
        }}
      />
      <button
        onClick={() => {
          console.log(props.expense.id);
          props.dispatch(removeExpense({id:props.expense.id}));
          props.history.push("/");
        }}>
        REMOVE EXPENSE
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      (expense) => expense.id === props.match.params.id
    ),
  };
};
export default connect(mapStateToProps)(EditExpense);
