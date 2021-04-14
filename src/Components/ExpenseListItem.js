import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const ExpenseListItem = ({ description, amount, CreatedAt, id, dispatch }) => {
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>

      <p>
        {amount} - {CreatedAt}
      </p>
     
    </div>
  );
};

export default connect()(ExpenseListItem);
