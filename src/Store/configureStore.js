import { createStore, combineReducers,applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import expenseReducer from "../Reducers/Expenses";
import filtersReducer from "../Reducers/Filters";
import authReducer from "../Reducers/Auth"

// create store  register(defined) expenseReducer & rentReducer
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;

const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filtersReducer,
    auth :authReducer
  }),
 composeEnhancers( applyMiddleware(thunk))
//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
