import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "../NewExpense/ExpenseFilter";
 
const Expenses = (props) => {

    
    const [filteredYear, setFilteredYear] = useState('2020');
    const getSelectedExpense = (year) => {
        console.log("In Expenses.js"); 
        console.log("Year");
        console.log(year);
        setFilteredYear(year);
    };
    return (
        <div>
            {/* This part of the code shows sending data from child to parent */}
            <ExpenseFilter selected={filteredYear} onSelectExpense={getSelectedExpense}></ExpenseFilter>
            <Card className="expenses">
                {props.expenses.map((expense) => (
                    <ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    />
                ))}
        </Card>
        </div>  
    );
}

export default Expenses;