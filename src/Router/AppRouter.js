import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../Components/Dashboard";
import AddExpense from "../Components/AddExpense";
import Error404 from "../Components/Error404";
import EditExpense from "../Components/EditExpense";
import Help from "../Components/Help";
import Navbar from "../Components/Navbar";

const AppRouter = () => {
  return (
    <div>
    <Navbar/>
      <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/add" component={AddExpense} />
      <Route exact path="/edit/:id" component={EditExpense} />
      <Route exact path="/help" component={Help} />
      <Route  component={Error404} />
      </Switch>
    </div>
  );
};

export default AppRouter;
