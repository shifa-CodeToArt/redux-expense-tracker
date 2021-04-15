import "./App.css";
import AppRouter from "./Router/AppRouter";
import configureStore from "./Store/configureStore";
import { Provider } from "react-redux";
import { addExpense } from "./Actions/Expenses";
import { setTextFilter } from "./Actions/Filters";
// import getVisibleExpenses from "./Selectors/Expenses";

function App() {
  const store = configureStore;


  return (
    <>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  );
}

export default App;
