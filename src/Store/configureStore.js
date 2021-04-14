import { createStore, combineReducers } from "redux";
import expenseReducer from "../Reducers/Expenses";
import filtersReducer from "../Reducers/Filters";

// create store  register(defined) expenseReducer & rentReducer

const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filtersReducer,
  }),
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
