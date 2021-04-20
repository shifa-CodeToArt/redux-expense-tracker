import React from "react";
import { Router,Route, Switch } from "react-router-dom";
import createHistory from 'history/createBrowserHistory'
import Dashboard from "../Components/Dashboard";
import AddExpense from "../Components/AddExpense";
import Error404 from "../Components/Error404";
import EditExpense from "../Components/EditExpense";
import Navbar from "../Components/Navbar";
import LoginPage from '../Components/LoginPage';
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
 export const history = createHistory()

const AppRouter = () => {
  return (
  
    <Router history={history}>
    <div>
      <Switch>
      <PublicRoute exact path="/" component={LoginPage} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/add" component={AddExpense} />
      <PrivateRoute exact path="/edit/:id" component={EditExpense} />
      <Route  component={Error404} />
      </Switch>
    </div>
    </Router>

   
  );
};

export default AppRouter;
