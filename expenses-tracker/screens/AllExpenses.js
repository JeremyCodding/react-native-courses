import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expense-context";

function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      fallbackText={"No expenses registeres"}
      expenses={expensesCtx.expenses}
      expensesPeriod="Total"
    />
  );
}

export default AllExpenses;
