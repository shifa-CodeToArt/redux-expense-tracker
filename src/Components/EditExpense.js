import React from "react";
import { connect } from "react-redux";
import ExpenseForm1 from "./ExpenseForm1";
import { StartEditExpense } from "../Actions/Expenses";
import { StartRemoveExpense } from "../Actions/Expenses";

const EditExpense = (props) => {
  const onRemove = () => {
    console.log(props.expense.id);
    props.dispatch(StartRemoveExpense({ id: props.expense.id }));
    props.history.push("/dashboard");
  };
  return (
    <div>
      <div className="page-header">
        <div className="content_container">
          <h1 className="page-header__title">EDIT Expense</h1>
        </div>
      </div>

      <div className="content_container">
        <ExpenseForm1
          expense={props.expense}
          onFormSubmit={(expense) => {
            // dispatch
            props.dispatch(StartEditExpense(props.expense.id, expense));
            props.history.push("/dashboard");
            console.log("updated", expense);
          }}
        />

        <button className="button--secondary" onClick={onRemove}>
          REMOVE EXPENSE
        </button>
      </div>
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
