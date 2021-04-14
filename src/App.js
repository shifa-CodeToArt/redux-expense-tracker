import "./App.css";
import AppRouter from "./Router/AppRouter";
import configureStore from "./Store/configureStore";
import { Provider } from "react-redux";
import { addExpense } from "./Actions/Expenses";
import { setTextFilter } from "./Actions/Filters";
// import getVisibleExpenses from "./Selectors/Expenses";

function App() {
  const store = configureStore;
  // store.dispatch(addExpense({ description: "Gas Bill" ,amount:1000,CreatedAt:"1618986600000"}));
  // store.dispatch(addExpense({ description: "Water Bill",amount:8000,CreatedAt:"1618122600000"}));
  //  store.dispatch(addExpense({ description: "Rent",amount:5000,CreatedAt:"1617258600000"}));
  // store.dispatch(setTextFilter(""));

// setTimeout(()=>{
//   store.dispatch(setTextFilter("Bill"));
// },3000)

  // const state = store.getState();
  // const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters);

  // console.log(VisibleExpenses);

  return (
    <>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  );
}

export default App;
