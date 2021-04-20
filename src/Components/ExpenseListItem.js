import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
const ExpenseListItem = ({ description, amount, CreatedAt, id, dispatch }) => {
  return (
    <Link className="list_item" to={`/edit/${id}`}>
      <div>
        <h5 className="list_item__title">{description}</h5>
        <span className="list_item__subtitle"> {moment(CreatedAt).format("MMMM Do, YYYY")}</span>
      </div>
      <h5 className="list_item__data">{amount}$</h5>
    </Link>
  );
};

export default connect()(ExpenseListItem);
