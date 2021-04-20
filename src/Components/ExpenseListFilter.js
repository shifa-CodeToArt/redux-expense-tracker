import React, { useState } from "react";
import { connect } from "react-redux";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setEndDate,
  setStartDate,
} from "../Actions/Filters";
import { DateRangePicker } from "react-dates";

const ExpenseListFilter = (props) => {
  const [calenderFocused, setcalenderFocused] = useState(null);

  const onDatesChange = ({ startDate, endDate }) => {
    props.dispatch(setStartDate(startDate));
    props.dispatch(setEndDate(endDate));
  };

  const onFocusChange = (calenderFocused) => {
    setcalenderFocused(calenderFocused);
  };
  return (
    <div className="content_container">
      <div className="input_group">
        <div className="input_group__item">
          {" "}
          <input
            type="text"
            placeholder="Search Expenses"
            className="text_input"
            defaultValue={props.filters.text}
            onChange={(e) => {
              props.dispatch(setTextFilter(e.target.value));
            }}
          />
        </div>
        <div className="input_group__item" >
          <select 
          className="select"
          placeholder="Select "
            value={props.filters.sortby}
            onChange={(e) => {
              if (e.target.value === "date") {
                props.dispatch(sortByDate());
              } else if (e.target.value === "amount") {
                props.dispatch(sortByAmount());
              }
            }}
          >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
        </div>
        <div className="input_group__item">
          <DateRangePicker
            startDate={props.filters.startDate}
            endDate={props.filters.endDate}
            onDatesChange={onDatesChange}
            focusedInput={calenderFocused}
            onFocusChange={onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            showClearDates={() => true}
          />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};
export default connect(mapStateToProps)(ExpenseListFilter);
