import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../Selectors/Expenses";
import  StartAddExpense from "../Actions/Expenses"
const ExpenseList = (props) => {
  return (
 
    <div className="content_container">
    <Link to="/add"><button className="button-add">Add Expense</button></Link>
    <div className="list_header">
    <div className="show_for_mobile">Expenses</div>
    <div className="show_for_desktop">Expense</div>
    <div className="show_for_desktop">Amount</div>
    </div>
      <div className="list_body">
      {
        props.expenses.length === 0 ? (
          <div className="list_item__message">No Expenses</div>
        ) :(props.expenses.map((expense) => {
        return <ExpenseListItem key={expense.id} {...expense} />;
      }))
    
    }
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpenseList);
