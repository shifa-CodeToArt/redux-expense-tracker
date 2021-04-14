import React from 'react'
import ExpenseList from "./ExpenseList";
import ExpenseListFilter from "./ExpenseListFilter"
const Dashboard = (props) => {
    return (
        <div>
        <h1>Dashboard Page</h1>
        <ExpenseListFilter/>
        <ExpenseList/>
        </div>
    )
}


export default Dashboard
