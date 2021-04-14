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
    <div>
      <input
        type="text"
        defaultValue={props.filters.text}
        onChange={(e) => {
          props.dispatch(setTextFilter(e.target.value));
        }}
      />

      <select
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

      <DateRangePicker
        startDate={props.filters.startDate}
        endDate={props.filters.endDate}
        onDatesChange={onDatesChange}
        focusedInput={calenderFocused}
        onFocusChange={onFocusChange}
        numberOfMonths={1}
        isOutsideRange={()=>false}
        showClearDates ={()=>true}
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};
export default connect(mapStateToProps)(ExpenseListFilter);
