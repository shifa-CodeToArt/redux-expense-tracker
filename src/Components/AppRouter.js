import React from 'react'
import { Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import AddExpense from "./AddExpense";
import Error404 from "./Error404";
import EditExpense from "./EditExpense";
import Help from "./Help";
const AppRouter = (props) => {
    return (
        <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/create" component={AddExpense} />
        <Route exact path="/edit/:id" component={EditExpense} />
        <Route exact path="/help" component={Help} />
        <Route component={Error404} />
      </Switch>
    )
}

export default AppRouter
