import "./AddToList.css";
import { useState } from "react";
import React from "react";
import NewExpense from "../NewExpense/NewExpense";
const AddToList = () => {
  const [expenses, setExpenses] = useState();

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return <NewExpense onAddExpense={addExpenseHandler} />;
};
export default AddToList;
