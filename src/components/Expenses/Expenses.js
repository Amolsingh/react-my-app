import React, {useState} from "react";
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "../NewExpense/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
 
const Expenses = (props) => {

    
    const [filteredYear, setFilteredYear] = useState('2022');

    const getSelectedExpense = (year) => {
        console.log("In Expenses.js"); 
        // console.log("Year");
        // console.log(year);
        setFilteredYear(year);
    };

    const filteredByYear = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

         
    return (
        <div>
            {/* This part of the code shows sending data from child to parent */}
            <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onSelectExpense={getSelectedExpense}></ExpenseFilter>
            <ExpensesChart expenses={filteredByYear} />
            <ExpensesList items={filteredByYear}/>
        </Card>
        </div>  
    );
}

export default Expenses;